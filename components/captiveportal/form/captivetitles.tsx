'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import Comboboxes, { ComboboxesTypography } from '@/components/comboboxes';
import { Title } from '@/store/types';

const CaptiveTitles = () => {
    const signin = useBoundStore((state) => state.signin)
    const updateSigninText = useBoundStore((state) => state.updateSigninText)
    const updateSigninClasses = useBoundStore((state) => state.updateSigninClasses)

    const [inputs,] = React.useState(signin)

    return (
        <div className='border p-4 bg-gray-50'>
            {inputs.map((field: Title, index: number) => {
                return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.text}>
                    <div className='flex justify-between items-center'>
                        <Label>Field {index + 1}</Label>
                        <input type="checkbox" checked={signin[index].text !== ""} onChange={() => updateSigninText("", index)} className='w-6 h-6' />

                    </div>
                    <Input value={signin[index].text} onChange={(e) => updateSigninText(e.target.value, index)} />

                    <ComboboxesTypography value={signin[index].text} updateValue={(val) => updateSigninText(val, index)} classes={signin[index].classes} updateClasses={updateSigninClasses} index={index} />
                    <Comboboxes title="Typography" classes={field.classes} updateClasses={updateSigninClasses} index={index} />

                </div>

            })}
        </div>
    );
};



export default CaptiveTitles;

