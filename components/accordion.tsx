import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionSample({
    children,
    title,
    textSize = "text-sm"
}: {
    children: React.ReactNode;
    title: string;
    textSize?: string;
}) {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="typography">
                <AccordionTrigger className="py-2">
                    <h4 className={"font-bold " + textSize}>  {title}</h4>
                </AccordionTrigger>
                <AccordionContent>
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
