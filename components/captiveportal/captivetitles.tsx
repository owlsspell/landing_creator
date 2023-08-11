'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import { Combobox } from '../ui/combobox';
import tailwindColors from '@/store/data/tailwindcolors';
import { ColorPicker } from '../colorpicker';
import { aligns, fonts, sizes, weightList, trackingList, marginList } from '@/store/data/typography';
import { AccordionSample } from '../accordion';


const CaptiveTitles = () => {
    const signin = useBoundStore((state) => state.signin)
    const updateSigninText = useBoundStore((state) => state.updateSigninText)
    const updateSigninClasses = useBoundStore((state) => state.updateSigninClasses)

    const [inputs, setInputs] = React.useState(signin)

    return (
        <div className='border p-4 bg-gray-50'>
            <h4 className="text-xl font-bold mb-4">Headings</h4>
            {inputs.map((field, index) => {
                return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.text}>
                    <Label>Field {index + 1}</Label>
                    <Input value={signin[index].text} onChange={(e) => updateSigninText(index, e.target.value)} />
                    <AccordionSample>
                        <div className='grid grid-cols-2 gap-2'>
                            <ComboboxContainer title="Align" stateValue={field.classes.align} setStateValue={(val) => updateSigninClasses(index, 'align', val)} values={aligns} />
                            <ComboboxContainer title="Font" stateValue={field.classes.font} setStateValue={(val) => updateSigninClasses(index, 'font', val)} values={fonts} />
                            <ComboboxContainer title="Size" stateValue={field.classes.size} setStateValue={(val) => updateSigninClasses(index, 'size', val)} values={sizes} />
                            <ComboboxContainerForColors title="Color" stateValue={field.classes.color} setStateValue={(val) => updateSigninClasses(index, 'color', val)} values={tailwindColors} />
                            <ComboboxContainer title="Weight" stateValue={field.classes.weight} setStateValue={(val) => updateSigninClasses(index, 'weight', val)} values={weightList} />
                            <ComboboxContainer title="Letter Spacing" stateValue={field.classes.tracking} setStateValue={(val) => updateSigninClasses(index, 'tracking', val)} values={trackingList} />
                            <ComboboxContainer title="Margin Top" stateValue={field.classes['margin-top']} setStateValue={(val) => updateSigninClasses(index, 'margin-top', val)} values={marginList} />
                            <ComboboxContainer title="Margin Bottom" stateValue={field.classes['margin-bottom']} setStateValue={(val) => updateSigninClasses(index, 'margin-bottom', val)} values={marginList} />
                        </div>
                    </AccordionSample>
                </div>

            })}
        </div>
    );
};

const ComboboxContainer = ({ title, ...props }) => <>
    <div className='flex items-center'>{title}</div>
    <div className='flex justify-end'>
        <Combobox {...props} />
    </div>
</>
const ComboboxContainerForColors = ({ title, ...props }) => <>
    <div className='flex items-center'>{title}</div>
    <div className='flex justify-end'>
        <ColorPicker {...props} />
    </div>
</>


export default CaptiveTitles;

