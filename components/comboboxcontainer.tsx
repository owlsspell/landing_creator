import { tailwindColorsType } from "@/store/data/all"
import { ColorPicker } from "./colorpicker"
import { Combobox } from "./ui/combobox"

type TypeComboboxContainer = {
    title?: string
    stateValue: string
    values?: string[]
    // eslint-disable-next-line no-unused-vars
    setStateValue: (value: string) => void
}
type TypeComboboxContainerForColors = {
    title?: string
    stateValue: string
    values?: tailwindColorsType
    // eslint-disable-next-line no-unused-vars
    setStateValue: (value: string) => void
}

const ComboboxContainer = ({ title, ...props }: TypeComboboxContainer) => <>
    <div className='flex items-center'>{title}</div>
    <div className='flex justify-end col-span-2 md:col-span-1'>
        <Combobox {...props} />
    </div>
</>

export const ComboboxContainerForColors = ({ title, stateValue, ...props }: TypeComboboxContainerForColors) => <>
    <div className='flex items-center'>{title}</div>
    <div className='flex justify-end'>
        <ColorPicker value={stateValue ? stateValue : 'black'}  {...props} />
    </div>
</>

export default ComboboxContainer 