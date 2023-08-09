'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PortalInputs } from '@/store/types';
import { UseFormGetValues, UseFormRegister } from 'react-hook-form';
import { usePortalsStore } from '@/store/state';

interface InputsProps {
    register: UseFormRegister<PortalInputs>
    getValues: UseFormGetValues<PortalInputs>
}
const CaptiveTitles = ({ register, getValues }: InputsProps) => {
    const portals = usePortalsStore((state) => state.portals)

    const [inputs, setInputs] = React.useState(getValues('headings.signin'))
    return (
        <div className='border p-4 bg-gray-50'>
            <h4 className="text-xl font-bold mb-4">Headings</h4>
            {inputs.map((field, index) => {
                return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.text}>
                    <Label>Field {index + 1}</Label>
                    <Input  {...register(`headings.signin[${index}].text`)} />
                </div>

            })}
        </div>
    );
};

export default CaptiveTitles;

