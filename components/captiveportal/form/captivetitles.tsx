'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import { AccordionSample } from '@/components/accordion';
import ComboboxContainer, { ComboboxContainerForColors } from '@/components/comboboxcontainer';
import { allVariables, exclusionList } from '@/store/data/all';


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
                    <Input value={signin[index].text} onChange={(e) => updateSigninText(index, e.target.value)} />
                    <AccordionSample title="Typography">
                        <div className='grid grid-cols-2 gap-2'>
                            {Object.keys(field.classes).map((key) =>
                                exclusionList.includes(key) ?
                                    <ComboboxContainerForColors key={key} title={key} stateValue={field.classes[key]} setStateValue={(val) => updateSigninClasses(index, key, val)} values={allVariables[key]} />
                                    :
                                    <ComboboxContainer key={key} title={key} stateValue={field.classes[key]} setStateValue={(val) => updateSigninClasses(index, key, val)} values={allVariables[key]} />
                            )}
                        </div>
                    </AccordionSample>
                </div>

            })}
        </div>
    );
};



export default CaptiveTitles;

