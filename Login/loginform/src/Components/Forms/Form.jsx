import { useForm } from "react-hook-form";
 import './Form.css'

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* register your input into the hook by invoking the "register" function */}
      <div className="first">
      <input defaultValue="" placeholder="FirstName" {...register("example")} /><br/>
      
      {/* include validation with required or other standard HTML validation rules */}
      <input defaultValue=""placeholder="LastName"{...register("exampleRequired", { required: true })} />

      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      <br/>

      <input type="submit" />
      </div>
    </form>
  );
}