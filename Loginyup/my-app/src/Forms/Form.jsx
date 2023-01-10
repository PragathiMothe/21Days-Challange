// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from "yup";
// import './Form.css'

// const schema = yup.object({
//   firstName: yup.string().required(),
//   age: yup.number().positive().integer().required(),
// }).required();

// export default function App() {
//   const { register, handleSubmit, formState:{ errors } } = useForm({
//     resolver: yupResolver(schema)
//   });
//   const onSubmit = data => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//         <label>Username:</label>
//       <input {...register("firstName")} />
//       <p>{errors.firstName?.message}</p>
//         <label>Age:</label>
//       <input {...register("age")} />
//       <p>{errors.age?.message}</p>
      
//       <input type="submit" />
//     </form>
//   );
// }


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Form.css'


const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    age: yup.number().required(),
  })
  .required();

const Form = () => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((d) => console.log(d))}>
        <label>Username:</label>
      <input {...register('name')} />
      <br/>
      <label>Age:</label>
      <input type="number" {...register('age')} />
      <br></br>
      <input type="submit"/>
    </form>
  );
};
export default Form;
