
'use client'

import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Dialog,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@clerk/nextjs';
import Resizer from "react-image-file-resizer";
import CropImage from '../imagecrop';

interface GalleryType {
    images: any
    getImages: () => void
    // eslint-disable-next-line no-unused-vars
    checkConditions?: (param: any) => string
    // eslint-disable-next-line no-unused-vars
    saveImage: (param: any) => void,
    widthForLoading?: number
    directory: string
    loadingImages: boolean
}

// eslint-disable-next-line no-unused-vars
const Gallery = ({ saveImage, images, getImages, checkConditions, widthForLoading = 300, directory, loadingImages }: GalleryType) => {
    const [activeImage, setActiveImage] = useState("")
    const [message, setMessage] = useState("")
    const [files, setFiles] = useState<any>([]);
    const [error, setError] = useState("");
    const { orgId } = useAuth();

    const [loading, setLoading] = useState(false)

    const resizeFile = (file: File) => {

        return new Promise((resolve) => {
            try {
                return Resizer.imageFileResizer(
                    file,
                    widthForLoading,
                    widthForLoading,
                    directory === 'logo' ? "png" : "jpeg",
                    100,
                    0,
                    (uri) => {
                        resolve(uri as File);
                        return uri
                    },
                    "file"
                );
            } catch (err) {
                console.log(err);
            }

        });
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files) {

            let arr: any = []
            Object.values(e.target.files).map(async (file: File) => {

                if (checkConditions) {
                    let img: HTMLImageElement = document.createElement("img");
                    img.onload = function () {
                        setError(checkConditions(img.width))
                    };
                    img.src = URL.createObjectURL(file);
                }
                let res: File = await resizeFile(file) as File;
                return arr.push(res)

            })
            setFiles(arr)
        }
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (files.length === 0) return
        if (error.length > 0) return
        if (!orgId) return

        files.map((file: File) => {
            setLoading(true)
            const formData = new FormData();
            formData.append("name", file.name);
            formData.append('file', file)
            formData.append('orgId', orgId)
            formData.append('dir', directory)

            axios.post('/api/images', formData, {
                headers: {
                    "Content-type": "multipart/form-data"
                }
            })
                .then(async function (response) {
                    setMessage(response.data.message)
                    setLoading(true)
                    setTimeout(() => {
                        getImages()
                    }, 1000)
                    setLoading(false)
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    setLoading(false)
                })

        })
    };

    useEffect(() => {
        if (message.length > 0) {
            setTimeout(() => { setMessage("") }, 3000)
        }
    }, [message])

    return (

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Images</DialogTitle>
                <div className='flex py-1'>
                    <Input type="file" name="someExpressFiles" onChange={handleFileChange} multiple />
                    <Button type="submit" className="disabled:opacity-50" onClick={handleSubmit} disabled={loading || error.length !== 0}>Submit</Button>
                </div>
                {error}
                {message}
                {loadingImages ? <div>Loading...</div> :
                    <div className='flex py-2 flex-wrap	'>
                        {
                            images.length === 0 ? "" : images.map((image: any) =>
                                <div className='w-20 h-20 relative m-1' key={image.Key}>
                                    <Image src={process.env.NEXT_PUBLIC_ENDPOINT + "/" + image.Key} alt="" fill
                                        className={`object-cover ${(activeImage === image.Key) ? 'scale-110' : ""}`}
                                        onClick={() => setActiveImage(image.Key)}
                                    />
                                </div>)
                        }
                    </div>}
                <div className='w-full flex '>
                    <Dialog>
                        <DialogTrigger disabled={files.length === 0}>
                            <Button className='disabled:bg-slate-400' disabled={files.length === 0} >
                                Open preview
                            </Button>
                        </DialogTrigger>
                        <DialogContent className='w-screen'>
                            <DialogHeader>
                                <DialogTitle>{"Select the area and click 'crop'"}</DialogTitle>
                                <CropImage files={files} setFiles={setFiles} directory={directory} />
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                    <DialogTrigger asChild>
                        <Button className='mr-0 ml-auto w-20' onClick={() => saveImage(activeImage)}>Save</Button>
                    </DialogTrigger>
                </div>
            </DialogHeader >
        </DialogContent >

    );
}
export default Gallery