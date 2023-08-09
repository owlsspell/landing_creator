'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PortalInputs } from '@/store/types';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { ColorPicker } from '../colorpicker';
import { useTheme } from 'next-themes';

interface InputsProps {
    register: UseFormRegister<PortalInputs>
    setValue: UseFormSetValue<PortalInputs>
}
const CaptiveSubmitButton = ({ register, setValue }: InputsProps) => {

    const { theme } = useTheme()

    return (
        <div className='border p-4 bg-gray-50'>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label>Submit button</Label>
                <Input  {...register('form.submit.content')} />
            </div>
            <ColorPicker themeDefault={theme} value={"#15803d"} setValue={setValue} />
        </div>
    );
};

export default CaptiveSubmitButton;

