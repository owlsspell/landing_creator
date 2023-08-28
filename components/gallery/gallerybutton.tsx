
'use client'

import React, { useState } from 'react';
import {
    Dialog,
    DialogTrigger,
} from "@/components/ui/dialog"
import Gallery from './gallery';
import axios from 'axios';
import { useAuth } from '@clerk/nextjs';

interface GaleryType {
    // eslint-disable-next-line no-unused-vars
    saveImage: (param: any) => void,
}
const GalleryButton = ({ saveImage }: GaleryType) => {
    const [images, setImages] = useState([])
    const { orgId } = useAuth();

    async function getImages() {
        return await axios.get('/api/images', { params: { orgId } })
            .then(function (response) {
                setImages(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    return (
        <Dialog>
            <DialogTrigger data-state="open" onClick={getImages}>
                <div className='flex justify-start border py-2 px-4 text-center rounded-md bg-slate-200'>
                    Open gallery
                </div>
            </DialogTrigger>
            <Gallery getImages={getImages} images={images} saveImage={saveImage} />
        </Dialog >

    );
}
export default GalleryButton