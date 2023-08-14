'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ColorPicker } from '@/components/colorpicker';
import { useBoundStore } from '@/store/state';

const CaptiveSubmitButton = () => {
    const submitText = useBoundStore((state) => state.submitText);
    const updateSubmitContent = useBoundStore((state) => state.updateSubmitContent);
    const submitClasses = useBoundStore((state) => state.submitClasses);
    const updateSubmitClasses = useBoundStore((state) => state.updateSubmitClasses);

    const handleChange = (e) => {
        updateSubmitContent(e.target.value)
    }

    return (
        <div className='border p-4 bg-gray-50'>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label>Content</Label>
                <Input value={submitText} onChange={handleChange} />
            </div>
            <div className='mt-2'>
                <ColorPicker label={'Choose color'} value={submitClasses.background} setStateValue={(val) => updateSubmitClasses(val, 'background')} />
            </div>
            <div className='mt-2'>
                <ColorPicker label={'Choose hover color'} value={submitClasses.hover} setStateValue={(val) => updateSubmitClasses(val, 'hover')} />
            </div>
        </div>
    );
};

export default CaptiveSubmitButton;

