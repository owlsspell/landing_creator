
'use client'

import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import {
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@clerk/nextjs';
import Resizer from "react-image-file-resizer";

interface GalleryType {
    images: any
    getImages: () => void
    // eslint-disable-next-line no-unused-vars
    checkConditions?: (param: any) => string
    // eslint-disable-next-line no-unused-vars
    saveImage: (param: any) => void,
    widthForLoading?: number
    directory: string
}

// eslint-disable-next-line no-unused-vars
const Gallery = ({ saveImage, images, getImages, checkConditions, widthForLoading = 300, directory }: GalleryType) => {
    const [activeImage, setActiveImage] = useState("")
    const [message, setMessage] = useState("")
    const [file, setFile] = useState<File>();
    const [error, setError] = useState("");
    const { orgId } = useAuth();

    const [loading, setLoading] = useState(false)

    const resizeFile = (file: File) => {
        try {
            Resizer.imageFileResizer(
                file,
                widthForLoading,
                widthForLoading,
                "PNG",
                100,
                0,
                (uri) => setFile(uri as File),
                "file"
            );
        } catch (err) {
            console.log(err);
        }
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            if (checkConditions) {
                let img: HTMLImageElement = document.createElement("img");
                img.onload = function () {
                    setError(checkConditions(img.width))
                };
                img.src = URL.createObjectURL(e.target.files[0]);
            }
            resizeFile(e.target.files[0])

        }
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!file || !orgId) return
        if (error.length > 0) return
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
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setLoading(false)
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
                    <Input type="file" name="someExpressFiles" onChange={handleFileChange} />
                    <Button type="submit" className="disabled:opacity-50" onClick={handleSubmit} disabled={loading || error.length !== 0}>Submit</Button>
                </div>
                {error}
                {message}
                <div className='flex py-2 flex-wrap	'>
                    {images.length === 0 ? "" : images.map((image: any) =>
                        <div className='w-20 h-20 relative m-1' key={image.Key}>
                            <Image src={process.env.NEXT_PUBLIC_ENDPOINT + "/" + image.Key} alt="" fill
                                className={`object-cover ${(activeImage === image.Key) ? 'scale-110' : ""}`}
                                onClick={() => setActiveImage(image.Key)}
                            />
                        </div>)}
                </div>
                <div className='w-full flex '>
                    <DialogTrigger asChild>
                        <Button className='mr-0 ml-auto w-20' onClick={() => saveImage(activeImage)}>Save</Button>
                    </DialogTrigger> </div>
            </DialogHeader >
        </DialogContent >

    );
}
export default Gallery