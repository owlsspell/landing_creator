'use client';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useBoundStore } from '@/store/state';
import ComboboxContainer, { ComboboxContainerForColors } from '../../comboboxcontainer';
import { AccordionSample } from '../../accordion';
import { aligns, fonts, sizes, weightList, trackingList, marginList } from '@/store/data/typography';
import { objectPosition } from '@/store/data/objectposition';
import { gradientList, opacityList, roundedList } from '@/store/data/overlay';

const HeroTitle = () => {

    const heroTitle = useBoundStore((state) => state.heroTitle);
    const updateHeroTitleText = useBoundStore((state) => state.updateHeroTitleText);
    const updateHeroTitleClasses = useBoundStore((state) => state.updateHeroTitleClasses);

    const heroImage = useBoundStore((state) => state.heroImage);
    const updateHeroImageClasses = useBoundStore((state) => state.updateHeroImageClasses);

    const heroOverlay = useBoundStore((state) => state.heroOverlay);
    const updateHeroOverlay = useBoundStore((state) => state.updateHeroOverlay);

    const handleChange = (e) => {
        updateHeroTitleText(e.target.value)
    }

    return (
        <div className='border p-4 bg-gray-50'>
            <h4 className="text-xl font-bold mb-4">Hero section</h4>
            <Label>Text</Label>
            <Input value={heroTitle.text} onChange={handleChange} />
            <AccordionSample title="Typography">
                <div className='grid grid-cols-2 gap-2'>
                    <ComboboxContainer title="Align" stateValue={heroTitle.classes.align} setStateValue={(val) => updateHeroTitleClasses('align', val)} values={aligns} />
                    <ComboboxContainer title="Font" stateValue={heroTitle.classes.font} setStateValue={(val) => updateHeroTitleClasses('font', val)} values={fonts} />
                    <ComboboxContainer title="Size" stateValue={heroTitle.classes.size} setStateValue={(val) => updateHeroTitleClasses('size', val)} values={sizes} />
                    <ComboboxContainerForColors title="Color" stateValue={heroTitle.classes.color} setStateValue={(val) => updateHeroTitleClasses('color', val)} />
                    <ComboboxContainer title="Weight" stateValue={heroTitle.classes.weight} setStateValue={(val) => updateHeroTitleClasses('weight', val)} values={weightList} />
                    <ComboboxContainer title="Letter Spacing" stateValue={heroTitle.classes.tracking} setStateValue={(val) => updateHeroTitleClasses('tracking', val)} values={trackingList} />
                    <ComboboxContainer title="Margin Top" stateValue={heroTitle.classes['margin-top']} setStateValue={(val) => updateHeroTitleClasses('margin-top', val)} values={marginList} />
                    <ComboboxContainer title="Margin Bottom" stateValue={heroTitle.classes['margin-bottom']} setStateValue={(val) => updateHeroTitleClasses('margin-bottom', val)} values={marginList} />
                </div>
            </AccordionSample>
            <AccordionSample title="Image Settings">
                <div className='grid grid-cols-2 gap-2'>
                    <ComboboxContainer title="Image Position" stateValue={heroImage.classes.fit} setStateValue={(val) => updateHeroImageClasses('fit', val)} values={objectPosition} />
                </div>
            </AccordionSample>
            <AccordionSample title="Overlay">
                <div className='grid grid-cols-2 gap-2'>
                    <ComboboxContainerForColors title="Color From" stateValue={heroOverlay["color-from"]} setStateValue={(val) => updateHeroOverlay("color-from", val)} />
                    <ComboboxContainerForColors title="Color To" stateValue={heroOverlay["color-to"]} setStateValue={(val) => updateHeroOverlay("color-to", val)} />
                    <ComboboxContainer title="Opacity" stateValue={heroOverlay.opacity} setStateValue={(val) => updateHeroOverlay("opacity", val)} values={opacityList} />
                    <ComboboxContainer title="Gradient" stateValue={heroOverlay.gradient} setStateValue={(val) => updateHeroOverlay("gradient", val)} values={gradientList} />
                    <ComboboxContainer title="Rounded" stateValue={heroOverlay.rounded} setStateValue={(val) => updateHeroOverlay("rounded", val)} values={roundedList} />
                </div>


            </AccordionSample>

        </div>
    );
};

export default HeroTitle;

