import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  example: string
  exampleRequired: string
}

const CaptivePortalForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="flex flex-col text-left gap-y-4 w-96" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold">Form Editor</h1>
      {/* register your input into the hook by invoking the "register" function */}
      <label className="inline-block">
        <span className="font-bold">Not a required test field</span>
        <input
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 border-solid rounded"
          defaultValue="test"
          {...register('example')}
        />
      </label>

      {/* include validation with required or other standard HTML validation rules */}
      <label className="inline-block">
      <span className="font-bold">Required field</span>
        <input
          className="w-full px-4 py-2 text-gray-700 border border-gray-300 border-solid rounded"
          {...register('exampleRequired', { required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span className="text-red-700">This field is required</span>}
      </label>

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
