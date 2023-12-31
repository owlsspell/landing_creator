'use client';

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import Comboboxes, { ComboboxesTypography } from '@/components/comboboxes';
import GalleryButton from '@/components/gallery/gallerybutton';
import { Notice } from '@/store/types';

const CaptiveNoticePage = () => {

    const notices = useBoundStore((state) => state.notices);
    const updateNoticesMessageText = useBoundStore((state) => state.updateNoticesMessageText);
    const updateNoticeMessageClasses = useBoundStore((state) => state.updateNoticeMessageClasses);
    const updateNoticeOverlayClasses = useBoundStore((state) => state.updateNoticeOverlayClasses);
    const updateNoticeLink = useBoundStore((state) => state.updateNoticeLink);
    const updateNoticeImage = useBoundStore((state) => state.updateNoticeImage);

    const [inputs,] = useState(notices)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        updateNoticesMessageText(e.target.value, index)
    }
    const saveImage = (url: string, index: number) => {
        updateNoticeImage(url, index)
    }

    return (
        <div className='border p-4 bg-gray-50'>
            <div className='my-2' >
                {inputs.map((field: Notice, index: number) => {
                    return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.message.text}>
                        <Label>Notice {index + 1}</Label>
                        <Input value={notices[index].message.text} onChange={(e) => handleChange(e, index)} />
                        <Label>Link for {index + 1} notice</Label>
                        <Input value={notices[index].link} onChange={(e) => updateNoticeLink(e.target.value, index)} />

                        <GalleryButton saveImage={(url) => saveImage(url, index)} directory="notices" />
                        <ComboboxesTypography value={notices[index].message.text} updateValue={(val) => updateNoticesMessageText(val, index)} classes={notices[index].message.classes} updateClasses={updateNoticeMessageClasses} index={index} />
                        <Comboboxes title="Typography" classes={field.message.classes} updateClasses={updateNoticeMessageClasses} index={index} />

                        <Comboboxes title="Overlay" classes={field.overlay.classes} updateClasses={updateNoticeOverlayClasses} index={index} />
                    </div>
                })}


            </div>
        </div>
    );
};

export default CaptiveNoticePage;


