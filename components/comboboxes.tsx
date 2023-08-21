import { allVariables, exclusionList } from "@/store/data/all"
import { AccordionSample } from "./accordion"
import ComboboxContainer, { ComboboxContainerForColors } from "./comboboxcontainer"

type ComboboxTypes = {
    title: string,
    classes: any
    // eslint-disable-next-line no-unused-vars
    updateClasses: (content: string, field: string, index: number) => void
    index?: number
}

const Comboboxes = ({ title, classes, updateClasses, index }: ComboboxTypes) =>
    <AccordionSample title={title}>
        <div className='grid grid-cols-2 gap-2'>
            {Object.keys(classes).map((key) =>
                exclusionList.includes(key) ?
                    <ComboboxContainerForColors key={key} title={key} stateValue={classes[key]} setStateValue={(val) => updateClasses(val, key, index as number)} values={allVariables[key]} />
                    :
                    <ComboboxContainer key={key} title={key} stateValue={classes[key]} setStateValue={(val) => updateClasses(val, key, index as number)} values={allVariables[key]} />
            )}
        </div>
    </AccordionSample>


export default Comboboxes