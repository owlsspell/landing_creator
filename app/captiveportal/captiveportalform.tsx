import React from 'react';
import CaptiveInputs from '@/components/captiveportal/form/captiveinputs';
import CaptiveSubmitButton from '@/components/captiveportal/form/captivesubmitbutton';
import CaptiveTitles from '@/components/captiveportal/form/captivetitles';
import HeroTitle from '@/components/captiveportal/hero/hero';
import BackgroundSettings from '@/components/captiveportal/background/captiveoverlay';
import CaptiveFont from '@/components/captiveportal/font/captivefont';
import { AccordionSample } from '@/components/accordion';

const CaptivePortalForm = () => {

  return (
    <form className="flex flex-col text-left gap-y-4 w-96 overflow-y-scroll px-1" onSubmit={(e) => console.log(e)}>
      <h1 className="text-2xl font-bold">Form Editor</h1>
      <AccordionSample title="Fonts" textSize="text-xl">
        <CaptiveFont />
      </AccordionSample>
      <AccordionSample title="Headings" textSize="text-xl">
        <CaptiveTitles />
      </AccordionSample>
      <AccordionSample title="Inputs" textSize="text-xl">
        <CaptiveInputs />
      </AccordionSample>
      <AccordionSample title="Submit button" textSize="text-xl">
        <CaptiveSubmitButton />
      </AccordionSample>
      <AccordionSample title="Hero section" textSize="text-xl">
        <HeroTitle />
      </AccordionSample>
      <AccordionSample title="Background settings" textSize="text-xl">
        <BackgroundSettings />
      </AccordionSample>





      <button
        className="w-3/5 px-6 py-3 mt-4 font-bold text-green-100 bg-green-400 border rounded hover:bg-green-600 text-md"
        type="submit"
      >
        Submit Form
      </button>
    </form>
  );
};

export default CaptivePortalForm;

