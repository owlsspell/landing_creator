'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';

const CaptiveInputs = () => {

    const fields = useBoundStore((state) => state.fields);
    const updateFields = useBoundStore((state) => state.updateFields);
    const [inputs, setInputs] = React.useState(fields)

    const handleChange = (val, field, index) => {
        updateFields(field, index, val)
    }

    const clearFields = (e, index) => {
        if (e.target.checked) {
            handleChange("", "label", index)
        } else {
            handleChange(null, "label", index)
            handleChange("", "placeholder", index)
        }
    }
    return (
        <div className='border p-4 bg-gray-50'>
            {inputs.map((field, index) => {
                return <div className="grid w-full max-w-sm items-center gap-1.5 mb-2" key={field.label}>
                    <div className='flex justify-between items-center mt-2'>
                        <Label>Field {index + 1}</Label>
                        {(field.name === "name" || field.name === "email") ? "" :
                            <input type="checkbox" checked={fields[index].label !== null} onChange={(e) => clearFields(e, index)} className='w-6 h-6' />}
                    </div>
                    <Input value={fields[index].label ?? ""} onChange={(e) => handleChange(e.target.value, "label", index)} />
                    <Label>Placeholder {index + 1}</Label>
                    <Input value={fields[index].placeholder ?? ""} onChange={(e) => handleChange(e.target.value, "placeholder", index)} />


                </div>
            })}
        </div>
    );
};

export default CaptiveInputs;

