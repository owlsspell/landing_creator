'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import Comboboxes from '@/components/comboboxes';

const CaptiveSuccessPage = () => {

    const successText = useBoundStore((state) => state.successText);
    const successClasses = useBoundStore((state) => state.successClasses);
    const updateSuccessText = useBoundStore((state) => state.updateSuccessText);
    const updateSuccessClasses = useBoundStore((state) => state.updateSuccessClasses);

    const handleChange = (e) => {
        updateSuccessText(e.target.value)
    }
    return (
        <div className='border p-4 bg-gray-50'>
            <div className='my-2' >
                <Label><span className='capitalize'>Success text</span></Label>
                <Input value={successText} onChange={handleChange} />
                <Comboboxes title="Typography" classes={successClasses} updateClasses={updateSuccessClasses} />
            </div>
        </div>
    );
};

export default CaptiveSuccessPage;

