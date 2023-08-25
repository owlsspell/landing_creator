
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

// eslint-disable-next-line no-unused-vars
const Gallery = ({ saveImage }: { saveImage: (param: any) => void }) => {
    const [images, setImages] = useState([])
    const [activeImage, setActiveImage] = useState("")
    const [file, setFile] = useState<File>();
    const { orgId } = useAuth();

    const [loading, setLoading] = useState(false)

    async function getImages() {
        return await axios.get('/api/images', { params: { orgId } })
            .then(function (response) {
                setImages(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    useEffect(() => {
        getImages()
    }, [])

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);

        }
    };
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!file || !orgId) return
        setLoading(true)
        const formData = new FormData();
        formData.append("name", file.name);
        formData.append('file', file)
        formData.append('orgId', orgId)
        axios.post('/api/images', formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
            .then(async function (response) {
                setLoading(true)
                await getImages()
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                setLoading(false)
            })
    };

    return (

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Images</DialogTitle>
                <div className='flex py-1'>
                    <Input type="file" name="someExpressFiles" onChange={handleFileChange} />
                    <Button type="submit" onClick={handleSubmit} disabled={loading}>Submit</Button>
                </div>
                <div className='flex py-2 flex-wrap	'>
                    {images.length === 0 ? "Loading..." : images.map((image: any) =>
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
            </DialogHeader>
        </DialogContent>

    );
}
export default Gallery