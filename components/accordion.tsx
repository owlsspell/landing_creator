import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionSample({
    children,
    title
}: {
    children: React.ReactNode;
    title: string
}) {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="typography">
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
