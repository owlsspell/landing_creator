'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import ComboboxContainer, { ComboboxContainerForColors } from '../../comboboxcontainer';
import { AccordionSample } from '../../accordion';
import { objectPosition } from '@/store/data/objectposition';
import { allVariables, exclusionList } from '@/store/data/all';
import { widthList } from '@/store/data/widthList';

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

    const handleChange = (e) => {
        updateHeroTitleText(e.target.value)
    }

    return (
        <div className='border p-4 bg-gray-50'>
            <Label>Text</Label>
            <Input value={heroTitle.text} onChange={handleChange} />
            <AccordionSample title="Typography">
                <div className='grid grid-cols-2 gap-2'>
                    {Object.keys(heroTitle.classes).map((key) =>
                        exclusionList.includes(key) ?
                            <ComboboxContainerForColors key={key} title={key} stateValue={heroTitle.classes[key]} setStateValue={(val) => updateHeroTitleClasses(key, val)} values={allVariables[key]} />
                            :
                            <ComboboxContainer key={key} title={key} stateValue={heroTitle.classes[key]} setStateValue={(val) => updateHeroTitleClasses(key, val)} values={allVariables[key]} />
                    )}
                </div>
            </AccordionSample>
            <AccordionSample title="Image Settings">
                <div className='grid grid-cols-2 gap-2'>
                    <ComboboxContainer title="Image Position" stateValue={heroImage.classes.fit} setStateValue={(val) => updateHeroImageClasses('fit', val)} values={objectPosition} />
                </div>
            </AccordionSample>
            <AccordionSample title="Overlay">
                <div className='grid grid-cols-2 gap-2'>
                    {Object.keys(heroOverlay).map((key) =>
                        exclusionList.includes(key) ?
                            <ComboboxContainerForColors key={key} title={key} stateValue={heroOverlay[key]} setStateValue={(val) => updateHeroOverlay(key, val)} values={allVariables[key]} />
                            :
                            <ComboboxContainer key={key} title={key} stateValue={heroOverlay[key]} setStateValue={(val) => updateHeroOverlay(key, val)} values={allVariables[key]} />
                    )}
                </div>
            </AccordionSample>
            <AccordionSample title="Width">
                <div className='grid grid-cols-2 gap-2'>
                    <ComboboxContainer title="Width" stateValue={heroDiv.width} setStateValue={(val) => updateHeroDiv('width', val)} values={widthList} />
                </div>
            </AccordionSample>

        </div>
    );
};

export default HeroTitle;

