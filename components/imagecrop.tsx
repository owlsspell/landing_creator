import { useEffect, useRef, useState } from 'react'
import ReactCrop, { type Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { Button } from './ui/button'

interface CropType {
    files: FileList
    // eslint-disable-next-line no-unused-vars
    setFiles: (params: File[]) => void
    directory: string
}

function CropImage({ files, setFiles, directory }: CropType) {
    const [activeImage, setActiveImage] = useState(files[0])
    const [activeIndex, setActiveIndex] = useState(0)
    const [src, setSrc] = useState<any>(URL.createObjectURL(files[0]))
    const [crop, setCrop] = useState<Crop>()
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)

    const ref = useRef<HTMLImageElement | null>(null)

    function getCroppedImg(image: HTMLImageElement, crop: Crop, fileName: string) {
        const canvas = document.createElement('canvas');

        canvas.width = (crop.width / 100) * width;
        canvas.height = (crop.height / 100) * height;
        const ctx = canvas.getContext('2d');
        if (!ctx) return

        ctx.drawImage(
            image,
            (crop.x / 100) * width,
            (crop.y / 100) * height,
            (crop.width / 100) * width,
            (crop.height / 100) * height,
            0,
            0,
            (crop.width / 100) * width,
            (crop.height / 100) * height,
        );

        setHeight((crop.height / 100) * height)
        setWidth((crop.width / 100) * width)
        return new Promise((resolve) => {
            canvas.toBlob(async file => {
                if (!file) return
                // @ts-ignore
                file.name = fileName;
                resolve(file);
            }, directory === 'logo' ? "image/png" : "image/jpeg");
        });


    }
    async function cropImage() {
        if (crop === undefined) return
        const croppedImg: any = await getCroppedImg(ref.current as HTMLImageElement, crop, activeImage.name);
        let newFile = new File([croppedImg], activeImage.name, { type: croppedImg.type, lastModified: Math.floor((new Date).getTime() / 1000) });
        setFiles(Object.values(files).map((item, index) => index === activeIndex ? newFile : item))
        setSrc(URL.createObjectURL(croppedImg))
        setCrop(undefined)
    }

    const handleClick = (index: number) => {
        setSrc(URL.createObjectURL(files[index]))
        setActiveImage(files[index])
        setActiveIndex(index)
        setCrop(undefined)
    }

    useEffect(() => {
        let img: HTMLImageElement = document.createElement("img");
        img.onload = function () {
            setHeight(img.height)
            setWidth(img.width)
        };
        img.src = URL.createObjectURL(activeImage);

    }, [activeImage])


    return (<>
        <div className='flex flex-wrap gap-2 py-2'>
            {Object.keys(files).length !== 1 && Object.values(files).map((item, index) =>
                <img key={item.name} className='h-10 w-auto' src={URL.createObjectURL(files[index])} onClick={() => handleClick(index)} />
            )}</div>
        <div className='m-auto h-full'>
            <ReactCrop
                crop={crop} onChange={(c, p) => setCrop(p)} className='max-h-[400px]' >
                {files && src.length > 0 && <img
                    className='max-h-[400px] w-auto '
                    ref={ref}
                    src={src}
                    alt=""
                />}
            </ReactCrop >
        </div>
        <Button className="mt-4 disabled:bg-gray-400" onClick={cropImage} disabled={crop?.height === 0 || crop?.width === 0 || crop === undefined}>Crop</Button>
    </>
    )
}

export default CropImage
