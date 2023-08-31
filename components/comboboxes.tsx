import { allVariables, exclusionList, exclusionListForTypography } from "@/store/data/all"
import { AccordionSample } from "./accordion"
import ComboboxContainer, { ComboboxContainerForColors } from "./comboboxcontainer"
import { FontBold, FontItalic, FontSize, TextPosition, TextUppercase } from '@/components/icons';
import { TypographyBox } from "./ui/typographybox";
import { ColorPickerTypography } from "./colorpickertypography";
import { useState } from "react";

type ComboboxTypes = {
    title: string,
    classes: any
    // eslint-disable-next-line no-unused-vars
    updateClasses: (content: string, field: string, index: number) => void
    index?: number
}

type ComboboxTypographyTypes = {
    classes: any
    // eslint-disable-next-line no-unused-vars
    updateClasses: (content: string, field: string, index: number) => void
    index?: number
    value: string
    // eslint-disable-next-line no-unused-vars
    updateValue: (val: string) => void
}

export const ComboboxesTypography = ({ value, updateValue, classes, updateClasses, index }: ComboboxTypographyTypes) => {

    const [isUppercase, setUppercase] = useState(false)

    function handleWeight() {
        classes.weight === 'bold' ?
            updateClasses("normal", 'weight', index as number) :
            updateClasses("bold", 'weight', index as number)
    }
    function handleItalic() {
        classes.italic === 'italic' ?
            updateClasses("not-italic", 'italic', index as number) :
            updateClasses("italic", 'italic', index as number)
    }

    function handleUppercase() {
        if (isUppercase) {
            setUppercase(false)
            updateValue(value.toLowerCase())
        } else {
            setUppercase(true)
            updateValue(value.toUpperCase())
        }
    }

    return <div className='flex gap-1 mt-2 flex-wrap lg:flex-nowrap'>
        <TypographyBox stateValue={classes.size} setStateValue={(val) => updateClasses(val, 'size', index as number)} values={allVariables.size}
            icon={<FontSize />}
        />
        <TypographyBox stateValue={classes.align} setStateValue={(val) => updateClasses(val, 'align', index as number)} values={allVariables.align}
            icon={<TextPosition />}
        />
        <ColorPickerTypography value={classes.color ? classes.color : 'black'} setStateValue={(val) => updateClasses(val, 'color', index as number)} />
        <div className={"flex flex-row justify-start px-1 py-1 border-1 rounded-md min-w-fit gap-x-2 cursor-pointer" + (classes.weight === 'bold' ? ' bg-gray-200' : " bg-white")} onClick={handleWeight}>  <FontBold /></div>
        <div className={"flex flex-row justify-start px-1 py-1 border-1 rounded-md min-w-fit gap-x-2 cursor-pointer" + (classes.italic === 'italic' ? ' bg-gray-200' : " bg-white")} onClick={handleItalic}>  <FontItalic /></div>
        <div className={"flex flex-row justify-start px-1 py-1 border-1 rounded-md min-w-fit gap-x-2 cursor-pointer" + (isUppercase ? ' bg-gray-200' : " bg-white")} onClick={handleUppercase}>  <TextUppercase /></div>
    </div>

}

const Comboboxes = ({ title, classes, updateClasses, index }: ComboboxTypes) =>
    <AccordionSample title={title}>
        <div className='grid grid-cols-2 gap-2 '>
            {/* <div className='grid grid-cols-1 gap-2 sm:grid-cols-2'> */}
            {Object.keys(classes).map((key) =>
                exclusionListForTypography.includes(key) ? "" :
                    exclusionList.includes(key) ?
                        <ComboboxContainerForColors key={key} title={key} stateValue={classes[key]} setStateValue={(val) => updateClasses(val, key, index as number)} values={allVariables[key]} />
                        :
                        <ComboboxContainer key={key} title={key} stateValue={classes[key] === 'sans' ? 'primary' : classes[key] === 'serif' ? 'secondary' : classes[key]} setStateValue={(val) => updateClasses(val, key, index as number)} values={allVariables[key]} />
            )}
        </div>
    </AccordionSample>


export default Comboboxes