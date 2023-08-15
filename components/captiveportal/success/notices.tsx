'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import Comboboxes from '@/components/comboboxes';

const CaptiveNoticePage = () => {

    const notices = useBoundStore((state) => state.notices);
    const updateNoticesMessageText = useBoundStore((state) => state.updateNoticesMessageText);
    const updateNoticeMessageClasses = useBoundStore((state) => state.updateNoticeMessageClasses);
    const updateNoticeOverlayClasses = useBoundStore((state) => state.updateNoticeOverlayClasses);

    const handleChange = (e, index) => {
        updateNoticesMessageText(e.target.value, index)
    }
    const [inputs, setInputs] = React.useState(notices)

    return (
        <div className='border p-4 bg-gray-50'>
            <div className='my-2' >
                {inputs.map((field, index) => {

                    return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.message.text}>
                        <Label>Notice {index + 1}</Label>
                        <Input value={notices[index].message.text} onChange={(e) => handleChange(e, index)} />

                        <Comboboxes title="Typography" classes={field.message.classes} updateClasses={updateNoticeMessageClasses} index={index} />
                        <Comboboxes title="Overlay" classes={field.overlay.classes} updateClasses={updateNoticeOverlayClasses} index={index} />
                    </div>
                })}


            </div>
        </div>
    );
};

export default CaptiveNoticePage;


