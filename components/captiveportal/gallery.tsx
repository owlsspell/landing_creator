
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


const Gallery = ({ saveImage }) => {
    const [images, setImages] = useState([])
    const [activeImage, setActiveImage] = useState("")
    const [file, setFile] = useState<File>();

    const [loading, setLoading] = useState(false)

    function getImages() {
        axios.get('/api/images')
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
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();
        formData.append("name", file.name);
        formData.append('file', file)
        formData.append('dir', "slowpokes")
        axios.post('/api/images', formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        })
            .then(function (response) {
                getImages()
                console.log('response', response);
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
                <div className='flex py-2'>
                    {images && images.map(image =>
                        <div className='w-20 h-20 relative mr-2' key={image}>
                            <Image src={`/uploads/images/slowpokes/${image}`} alt="" fill
                                className={`object-cover ${activeImage === image ? 'scale-110' : ""}`}
                                onClick={() => setActiveImage(image)}
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