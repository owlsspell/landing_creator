'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import { AccordionSample } from '@/components/accordion';
import { allVariables, exclusionList } from '@/store/data/all';
import ComboboxContainer, { ComboboxContainerForColors } from '@/components/comboboxcontainer';

const CaptiveSuccessPage = () => {

    const successText = useBoundStore((state) => state.successText);
    const successClasses = useBoundStore((state) => state.successClasses);
    const updateSuccessText = useBoundStore((state) => state.updateSuccessText);
    const updateSuccessClasses = useBoundStore((state) => state.updateSuccessClasses);

    const notices = useBoundStore((state) => state.notices);
    const updateNoticesMessageText = useBoundStore((state) => state.updateNoticesMessageText);

    const handleChange = (e) => {
        updateSuccessText(e.target.value)
    }
    return (
        <div className='border p-4 bg-gray-50'>
            <div className='my-2' >
                <Label><span className='capitalize'>Success text</span></Label>
                <Input value={successText} onChange={handleChange} />
                <AccordionSample title="Typography">
                    <div className='grid grid-cols-2 gap-2'>
                        {Object.keys(successClasses).map((key) =>
                            exclusionList.includes(key) ?
                                <ComboboxContainerForColors key={key} title={key} stateValue={successClasses[key]} setStateValue={(val) => updateSuccessClasses(key, val)} values={allVariables[key]} />
                                :
                                <ComboboxContainer key={key} title={key} stateValue={successClasses[key]} setStateValue={(val) => updateSuccessClasses(key, val)} values={allVariables[key]} />
                        )}
                    </div>
                </AccordionSample>
            </div>
        </div>
    );
};

export default CaptiveSuccessPage;

