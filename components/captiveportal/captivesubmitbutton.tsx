'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { PortalInputs } from '@/store/types';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { ColorPicker } from '../colorpicker';
import { usePortalsStore } from '@/store/state';

interface InputsProps {
    register: UseFormRegister<PortalInputs>
}
const CaptiveSubmitButton = ({ register }: InputsProps) => {

    const formProps = usePortalsStore((state) => state.formProps);

    return (
        <div className='border p-4 bg-gray-50'>
            <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
                <Label>Submit button</Label>
                <Input  {...register('form.submit.content')} />
            </div>
            <ColorPicker value={formProps.classes.background} field={"background"} />
            <ColorPicker value={formProps.classes.hover} field={"hover"} />
        </div>
    );
};

export default CaptiveSubmitButton;

