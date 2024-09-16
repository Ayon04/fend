'use client'
import { useForm } from 'react-hook-form';
import TitleBar from '../components/titlebar';
import Header from '../components/header';

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <>
    <TitleBar title="Home"/>
<Header/>
    <form onSubmit={handleSubmit(onSubmit)}>
     Full Name: <input {...register("fullname", { required: true })} />
      {errors.fullname && <span>fullname is required</span>}
      <br/>
      ID: <input {...register("id", { required: true })} />
      {errors.id && <span>id is required</span>}
      <br/>
      Email: <input {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
      {errors.email && <span>Invalid email</span>}
      <br/>
      Password: <input type="password" {...register("password", { required: true })} />
      {errors.password && <span>password is required</span>}
      <br/>
      <input type="submit" value="Submit" />
    </form>
    </>
  );
}