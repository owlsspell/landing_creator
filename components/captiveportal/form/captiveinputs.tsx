'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';

const CaptiveInputs = () => {

    const fields = useBoundStore((state) => state.fields);
    const updateFields = useBoundStore((state) => state.updateFields);
    const [inputs, setInputs] = React.useState(fields)

    const handleChange = (e, field, index) => {
        updateFields(field, index, e.target.value)
    }
    return (
        <div className='border p-4 bg-gray-50'>
            {inputs.map((field, index) => {
                return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.label}>
                    <Label>Field {index + 1}</Label>
                    <Input value={fields[index].label} onChange={(e) => handleChange(e, "label", index)} />
                    <Label>Placeholder {index + 1}</Label>
                    <Input value={fields[index].placeholder} onChange={(e) => handleChange(e, "placeholder", index)} />

                </div>
            })}
        </div>
    );
};

export default CaptiveInputs;
