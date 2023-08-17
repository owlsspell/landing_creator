'use client';

import React, { ChangeEvent, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import Comboboxes from '@/components/comboboxes';
import { Button } from '@/components/ui/button';
import axios from 'axios';

const CaptiveNoticePage = () => {

    const notices = useBoundStore((state) => state.notices);
    const updateNoticesMessageText = useBoundStore((state) => state.updateNoticesMessageText);
    const updateNoticeMessageClasses = useBoundStore((state) => state.updateNoticeMessageClasses);
    const updateNoticeOverlayClasses = useBoundStore((state) => state.updateNoticeOverlayClasses);
    const updateNoticeLink = useBoundStore((state) => state.updateNoticeLink);

    const [inputs, setInputs] = React.useState(notices)

    const [file, setFile] = useState<File>();

    const handleChange = (e, index) => {
        updateNoticesMessageText(e.target.value, index)
    }

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
            console.log('e.target.files', e.target.files);

        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('file', file);
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
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <div className='border p-4 bg-gray-50'>
            <div className='my-2' >
                {inputs.map((field, index) => {

                    return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.message.text}>
                        <Label>Notice {index + 1}</Label>
                        <Input value={notices[index].message.text} onChange={(e) => handleChange(e, index)} />
                        <Label>Link for {index + 1} notice</Label>
                        <Input value={notices[index].link} onChange={(e) => updateNoticeLink(e.target.value, index)} />
                        <Label>Image for {index + 1} notice</Label>
                        <div className='flex'>
                            <Input type="file" name="someExpressFiles" onChange={handleFileChange} />
                            <Button type="submit" onClick={handleSubmit}>Submit</Button>
                        </div>
                        <Comboboxes title="Typography" classes={field.message.classes} updateClasses={updateNoticeMessageClasses} index={index} />
                        <Comboboxes title="Overlay" classes={field.overlay.classes} updateClasses={updateNoticeOverlayClasses} index={index} />
                    </div>
                })}


            </div>
        </div>
    );
};

export default CaptiveNoticePage;


