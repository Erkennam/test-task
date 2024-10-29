import React, { FC } from "react";
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authSchema } from "./schema";
import { auth } from "../../types/auth";
import { setAuth } from "../../store/slice";
import {useDispatch} from 'react-redux';
import {toast} from 'react-toastify';

const Login:FC = ()=>{
    const dispatch = useDispatch();
    const {register,handleSubmit,formState: {
        errors
    }} = useForm<auth>({resolver: yupResolver(authSchema),});
    const authSubmit = (data:auth)=>{
        dispatch(setAuth(data));
        toast.success('Вы успешно авторизовались')
    }
    return(
        <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
            <h1 className="text-2xl">Авторизоваться</h1>
            <form onSubmit={handleSubmit(authSubmit)} className=" w-1/5 min-w-[200px] flex flex-col gap-6">
                <input 
                    {...register('login')} 
                    className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" 
                    type="text" 
                    placeholder="Введите логин">
                </input>
                {errors.login && <p className="text-red-500">{errors.login.message}</p>}
                <input 
                    {...register('password')} 
                    className="w-full border-2 border-[#e8e8e8] p-2 rounded-md"  
                    type="text" 
                    placeholder="Введите пароль">
                </input>
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                <button className=" bg-blue-500 text-white p-2 rounded-md">Авторизоваться</button>
            </form>
        </div>
    )
}

export default Login