import React from 'react';
import CaptiveInputs from '@/components/captiveportal/captiveinputs';
import CaptiveSubmitButton from '@/components/captiveportal/captivesubmitbutton';
import CaptiveTitles from '@/components/captiveportal/captivetitles';

const CaptivePortalForm = () => {

  return (
    <form className="flex flex-col text-left gap-y-4 w-96 overflow-y-scroll px-1" onSubmit={(e) => console.log(e)}>
      <h1 className="text-2xl font-bold">Form Editor</h1>
      <CaptiveTitles />
      <CaptiveInputs />
      <CaptiveSubmitButton />
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

