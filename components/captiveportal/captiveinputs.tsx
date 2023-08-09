'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PortalInputs } from '@/store/types';
import { UseFormGetValues, UseFormRegister } from 'react-hook-form';

interface InputsProps {
    register: UseFormRegister<PortalInputs>
    getValues: UseFormGetValues<PortalInputs>
}
const CaptiveInputs = ({ register, getValues }: InputsProps) => {

    const [inputs, setInputs] = React.useState(getValues('form.fields.standard'))

    return (
        <div className='border p-4 bg-gray-50'>
            <h4 className="text-xl font-bold mb-4">Inputs</h4>
            {inputs.map((field, index) => {
                if (field.length === undefined) {
                    return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.label}>
                        <Label>Field {index + 1}</Label>
                        <Input  {...register(`form.fields.standard[${index}].label`)} />
                        <Label>Field {index + 1} placeholder</Label>
                        <Input  {...register(`form.fields.standard[${index}].placeholder`)} />
                    </div>
                } else {
                    return field.map((item, i) =>
                        <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={item.label}>
                            <Label>Field {index + i + 1}</Label>
                            <Input  {...register(`form.fields.standard[${index}][${i}].label`)} />
                            <Label>Field {index + i + 1} placeholder</Label>
                            <Input  {...register(`form.fields.standard[${index}][${i}].placeholder`)} />

                        </div>)
                }
            })}
        </div>
    );
};

export default CaptiveInputs;

