import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionSample({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="typography">
                <AccordionTrigger>Typography</AccordionTrigger>
                <AccordionContent>
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
