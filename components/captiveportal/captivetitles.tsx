'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PortalInputs } from '@/store/types';
import { UseFormGetValues, UseFormRegister } from 'react-hook-form';
import { usePortalsStore } from '@/store/state';
import { Combobox } from '../ui/combobox';

interface InputsProps {
    register: UseFormRegister<PortalInputs>
    getValues: UseFormGetValues<PortalInputs>
}
const CaptiveTitles = ({ register, getValues }: InputsProps) => {
    const portals = usePortalsStore((state) => state.portals)
    const titlesProps = usePortalsStore((state) => state.titlesProps)
    const updateTitleProps = usePortalsStore((state) => state.updateTitleProps)

    const [inputs, setInputs] = React.useState(getValues('headings.signin'))

    const aligns = ['left', 'center', 'right', 'justify', "start", "end"]
    const fonts = ['sans', 'serif', 'mono']
    const sizes = ['xs', 'sm', 'base', "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"]

    return (
        <div className='border p-4 bg-gray-50'>
            <h4 className="text-xl font-bold mb-4">Headings</h4>
            {inputs.map((field, index) => {
                return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.text}>
                    <Label>Field {index + 1}</Label>
                    <Input  {...register(`headings.signin[${index}].text`)} />
                    <div className='grid grid-cols-2'>
                        <ComboboxContainer title="Align" stateValue={field.classes.align} setStateValue={(val) => updateTitleProps(index, 'align', val)} values={aligns} />
                        <ComboboxContainer title="Font" stateValue={field.classes.font} setStateValue={(val) => updateTitleProps(index, 'font', val)} values={fonts} />
                        <ComboboxContainer title="Size" stateValue={field.classes.size} setStateValue={(val) => updateTitleProps(index, 'size', val)} values={sizes} />

                    </div>
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

export default CaptiveTitles;

