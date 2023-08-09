import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { usePortalsStore } from '@/store/state';
import values from "@/app/captiveportal/examples/json/slowpokes.json"
import { PortalInputs } from '@/store/types';
import CaptiveInputs from '@/components/captiveportal/captiveinputs';
import CaptiveSubmitButton from '@/components/captiveportal/captivesubmitbutton';
import CaptiveTitles from '@/components/captiveportal/captivetitles';


const CaptivePortalForm = () => {

  const portals = usePortalsStore((state) => state.portals)
  const updatePortals = usePortalsStore((state) => state.updatePortals)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors }
  } = useForm<PortalInputs>({ defaultValues: values });

  const onSubmit: SubmitHandler<PortalInputs> = (data) => console.log(data);

  // console.log(watch()); // watch input value by passing the name of it

  // watch((data) => {
  //   // updatePortals(data)
  //   console.log(data);
  //   // updateField(updateField)
  // })
  // watch("form.submit.content", (data) => {
  //   console.log('form', data);

  // })

  React.useEffect(() => {
    const subscription = watch((data, { name, type }) => {

      console.log(data, name, type)
      updatePortals(data)
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="flex flex-col text-left gap-y-4 w-96 overflow-y-scroll px-1" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold">Form Editor</h1>

      <CaptiveTitles register={register} getValues={getValues} />
      <CaptiveInputs register={register} getValues={getValues} />
      <CaptiveSubmitButton register={register} setValue={setValue} />

      {/* include validation with required or other standard HTML validation rules */}
      {/* <label className="inline-block">
        <span className="font-bold">Required field</span>
        <input
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 border-solid rounded"
          {...register('exampleRequired', { required: true })}
        />
        {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span className="text-red-700">This field is required</span>} */}


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

