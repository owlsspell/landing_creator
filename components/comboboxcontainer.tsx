import { ColorPicker } from "./colorpicker"
import { Combobox } from "./ui/combobox"

type TypeComboboxContainer = {
    title?: string
    stateValue: string
    values?: string[]
    setStateValue: (value: string) => void
}

const ComboboxContainer = ({ title, ...props }: TypeComboboxContainer) => <>
    <div className='flex items-center'>{title}</div>
    <div className='flex justify-end'>
        <Combobox {...props} />
    </div>
</>

export const ComboboxContainerForColors = ({ title, stateValue, ...props }: TypeComboboxContainer) => <>
    <div className='flex items-center'>{title}</div>
    <div className='flex justify-end'>
        <ColorPicker value={stateValue ? stateValue : 'black'}  {...props} />
    </div>
</>

export default ComboboxContainer 