'use client';

import React from 'react';
import { useBoundStore } from '@/store/state';
import ComboboxContainer, { ComboboxContainerForColors } from '../../comboboxcontainer';
import { AccordionSample } from '../../accordion';
import { allVariables, exclusionList } from '@/store/data/all';

const BackgroundSettings = () => {

    const backgroundOverlay = useBoundStore((state) => state.backgroundOverlay);
    const updateBackgroundOverlay = useBoundStore((state) => state.updateBackgroundOverlay);
    console.log('backgroundOverlay', Object.keys(backgroundOverlay));
    return (
        <div className='border p-4 bg-gray-50'>
            <h4 className="text-xl font-bold mb-4">Background settings</h4>
            <AccordionSample title="Overlay">
                <div className='grid grid-cols-2 gap-2'>
                    {Object.keys(backgroundOverlay).map((key) =>
                        exclusionList.includes(key) ?
                            <ComboboxContainerForColors key={key} title={key} stateValue={backgroundOverlay[key]} setStateValue={(val) => updateBackgroundOverlay(key, val)} values={allVariables[key]} />
                            :
                            <ComboboxContainer key={key} title={key} stateValue={backgroundOverlay[key]} setStateValue={(val) => updateBackgroundOverlay(key, val)} values={allVariables[key]} />
                    )}
                </div>
            </AccordionSample>

        </div>
    );
};

export default BackgroundSettings;

