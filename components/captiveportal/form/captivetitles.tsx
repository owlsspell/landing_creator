'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import Comboboxes from '@/components/comboboxes';

const CaptiveTitles = () => {
    const signin = useBoundStore((state) => state.signin)
    const updateSigninText = useBoundStore((state) => state.updateSigninText)
    const updateSigninClasses = useBoundStore((state) => state.updateSigninClasses)

    const [inputs, setInputs] = React.useState(signin)

    return (
        <div className='border p-4 bg-gray-50'>
            {inputs.map((field, index) => {
                return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.text}>
                    <Label>Field {index + 1}</Label>
                    <Input value={signin[index].text} onChange={(e) => updateSigninText(e.target.value, index)} />

                    <Comboboxes title="Typography" classes={field.classes} updateClasses={updateSigninClasses} index={index} />

                </div>

            })}
        </div>
    );
};



export default CaptiveTitles;

