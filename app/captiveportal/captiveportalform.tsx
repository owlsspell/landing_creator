import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { usePortalsStore } from '@/store/state';
import values from "@/app/captiveportal/examples/json/slowpokes.json"
import { ColorPicker } from '@/components/colorpicker';
import { useTheme } from 'next-themes';
import { PortalInputs } from '@/store/types';


const CaptivePortalForm = () => {

  const portals = usePortalsStore((state) => state.portals)
  const updatePortals = usePortalsStore((state) => state.updatePortals)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors }
  } = useForm<PortalInputs>({ defaultValues: values });

  const { theme } = useTheme()

  const onSubmit: SubmitHandler<PortalInputs> = (data) => console.log(data);

  // console.log(watch()); // watch input value by passing the name of it

  watch((data) => {
    updatePortals(data)
  })
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="flex flex-col text-left gap-y-4 w-96" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold">Form Editor</h1>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="name">Full name</Label>
        <Input  {...register('name')} />
      </div> */}
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label>Submit button</Label>
        <Input  {...register('form.submit.content')} />
      </div>
      <ColorPicker theme={theme} value={"#15803d"} setValue={setValue} />
      {/* <label className="inline-block">
        <span className="font-bold">Not a required test field</span>
        <input
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 border-solid rounded"
          defaultValue="test"
          {...register('example')}
        />
      </label> */}

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

