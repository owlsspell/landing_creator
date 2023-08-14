'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';

const CaptiveFont = () => {

    const fonts = useBoundStore((state) => state.fonts);
    const updateFonts = useBoundStore((state) => state.updateFonts);

    const handleChange = (e, field) => {
        updateFonts(field, e.target.value)
    }
    return (
        <div className='border p-4 bg-gray-50'>
            <h4 className="text-xl font-bold mb-4">Fonts</h4>
            {Object.keys(fonts).map((field) => <div className='my-2' key={'fonts ' + field} >
                <Label><span className='capitalize'>{field}</span></Label>
                <Input value={fonts[field]} onChange={(e) => handleChange(e, field)} />
            </div>)}
        </div>
    );
};

export default CaptiveFont;

