'use client';

import React from 'react';
import { useBoundStore } from '@/store/state';
import { fontsList } from "@/store/data/fontsList"
import { Combobox } from '@/components/ui/combobox';

const CaptiveFont = () => {

    const fonts = useBoundStore((state) => state.fonts) as any
    const updateFonts = useBoundStore((state) => state.updateFonts);

    return (
        <div className='border p-4 bg-gray-50'>
            {Object.keys(fonts).map((key) => <div className="grid grid-cols-4 gap-2 mb-2" key={key}>
                <div className='flex items-center'>{key}</div>
                <div className='flex justify-end col-span-3'>
                    <Combobox stateValue={fonts[key]} setStateValue={(val: string) => updateFonts(val, key)} values={fontsList} />
                </div>
            </div>
            )}
        </div>
    );
};

export default CaptiveFont;

