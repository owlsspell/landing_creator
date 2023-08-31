'use client';

import React from 'react';
import { useBoundStore } from '@/store/state';
import Comboboxes from '@/components/comboboxes';

const BackgroundSettings = () => {

    const backgroundOverlay = useBoundStore((state) => state.backgroundOverlay);
    const updateBackgroundOverlay = useBoundStore((state) => state.updateBackgroundOverlay);

    return (
        <div className='border p-4 bg-gray-50'>
            <Comboboxes title="Overlay" classes={backgroundOverlay} updateClasses={updateBackgroundOverlay} />
        </div>
    );
};

export default BackgroundSettings;

