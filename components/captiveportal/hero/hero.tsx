'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import ComboboxContainer from '../../comboboxcontainer';
import { AccordionSample } from '../../accordion';
import { objectPosition } from '@/store/data/objectposition';
import { widthList } from '@/store/data/widthList';
import Comboboxes, { ComboboxesTypography } from '@/components/comboboxes';

const HeroTitle = () => {

    const heroTitle = useBoundStore((state) => state.heroTitle);
    const updateHeroTitleText = useBoundStore((state) => state.updateHeroTitleText);
    const updateHeroTitleClasses = useBoundStore((state) => state.updateHeroTitleClasses);

    const heroImage = useBoundStore((state) => state.heroImage);
    const updateHeroImageClasses = useBoundStore((state) => state.updateHeroImageClasses);

    const heroOverlay = useBoundStore((state) => state.heroOverlay);
    const updateHeroOverlay = useBoundStore((state) => state.updateHeroOverlay);

    const heroDiv = useBoundStore((state) => state.heroDiv);
    const updateHeroDiv = useBoundStore((state) => state.updateHeroDiv);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateHeroTitleText(e.target.value)
    }

    return (
        <div className='border p-4 bg-gray-50'>
            <Label>Text</Label>
            <Input value={heroTitle.text} onChange={handleChange} />
            {/* <Comboboxes title="Typography" classes={heroTitle.classes} updateClasses={updateHeroTitleClasses} /> */}
            <ComboboxesTypography value={heroTitle.text} updateValue={(val) => updateHeroTitleText(val)} classes={heroTitle.classes} updateClasses={updateHeroTitleClasses} />
            <Comboboxes title="Typography" classes={heroTitle.classes} updateClasses={updateHeroTitleClasses} />

            <AccordionSample title="Image Settings">
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
                    <ComboboxContainer title="Image Position" stateValue={heroImage.classes.fit} setStateValue={(val) => updateHeroImageClasses(val, 'fit')} values={objectPosition} />
                </div>
            </AccordionSample>

            <Comboboxes title="Overlay" classes={heroOverlay} updateClasses={updateHeroOverlay} />

            <AccordionSample title="Width">
                <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'>
                    <ComboboxContainer title="Width" stateValue={heroDiv.width} setStateValue={(val) => updateHeroDiv(val, 'width')} values={widthList} />
                </div>
            </AccordionSample>

        </div>
    );
};

export default HeroTitle;

