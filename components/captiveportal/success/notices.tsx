'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import { AccordionSample } from '@/components/accordion';
import { allVariables, exclusionList } from '@/store/data/all';
import ComboboxContainer, { ComboboxContainerForColors } from '@/components/comboboxcontainer';

const CaptiveNoticePage = () => {

    const notices = useBoundStore((state) => state.notices);
    const updateNoticesMessageText = useBoundStore((state) => state.updateNoticesMessageText);
    const updateNoticeMessageClasses = useBoundStore((state) => state.updateNoticeMessageClasses);
    const updateNoticeOverlayClasses = useBoundStore((state) => state.updateNoticeOverlayClasses);

    const handleChange = (e, index) => {
        updateNoticesMessageText(index, e.target.value)
    }
    const [inputs, setInputs] = React.useState(notices)

    return (
        <div className='border p-4 bg-gray-50'>
            <div className='my-2' >
                {inputs.map((field, index) => {

                    return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.message.text}>
                        <Label>Notice {index + 1}</Label>
                        <Input value={notices[index].message.text} onChange={(e) => handleChange(e, index)} />
                        <AccordionSample title="Typography">
                            <div className='grid grid-cols-2 gap-2'>
                                {Object.keys(field.message.classes).map((key) =>
                                    exclusionList.includes(key) ?
                                        <ComboboxContainerForColors key={key} title={key} stateValue={field.message.classes[key]} setStateValue={(val) => updateNoticeMessageClasses(index, key, val)} values={allVariables[key]} />
                                        :
                                        <ComboboxContainer key={key} title={key} stateValue={field.message.classes[key]} setStateValue={(val) => updateNoticeMessageClasses(index, key, val)} values={allVariables[key]} />
                                )}
                            </div>
                        </AccordionSample>
                        <AccordionSample title="Overlay" >
                            <div className='grid grid-cols-2 gap-2'>
                                {Object.keys(field.overlay.classes).map((key) =>
                                    exclusionList.includes(key) ?
                                        <ComboboxContainerForColors key={key} title={key} stateValue={field.overlay.classes[key]} setStateValue={(val) => updateNoticeOverlayClasses(index, key, val)} values={allVariables[key]} />
                                        :
                                        <ComboboxContainer key={key} title={key} stateValue={field.overlay.classes[key]} setStateValue={(val) => updateNoticeOverlayClasses(index, key, val)} values={allVariables[key]} />
                                )}
                            </div>
                        </AccordionSample>
                    </div>
                })}


            </div>
        </div>
    );
};

export default CaptiveNoticePage;

