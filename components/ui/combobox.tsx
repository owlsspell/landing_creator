"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

interface ComboboxType {
    stateValue: string | undefined
    // eslint-disable-next-line no-unused-vars
    setStateValue: (params: any) => void
    values?: string[]
}

export function Combobox({ stateValue, setStateValue, values }: ComboboxType) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState(stateValue)

    return (
        <Popover open={open} onOpenChange={setOpen} >
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="min-w-[100px] justify-between w-full"
                >
                    {value ? value : <span></span>}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="min-w-[200px] w-full p-0">
                <Command>
                    <CommandGroup className="max-h-64 overflow-y-scroll">
                        {values && values.map((val) => (
                            <CommandItem
                                key={val}
                                onSelect={(currentValue) => {
                                    const customCurrentValue = values.find(v => v.toUpperCase() === currentValue.toUpperCase())
                                    setValue((customCurrentValue === value || customCurrentValue === 'default') ? "" : customCurrentValue)

                                    setStateValue((customCurrentValue === 'default') ? "" : customCurrentValue === 'primary' ? 'sans' : customCurrentValue === 'secondary' ? 'serif' : customCurrentValue)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === val ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {val.length === 0 ? 'default' : val}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent >
        </Popover >
    )
}
