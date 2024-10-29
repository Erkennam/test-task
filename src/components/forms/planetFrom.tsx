import React from "react";
import { useForm } from "react-hook-form";
import { Planet } from "../../types/feature";
import { UseFetchData } from "../../hooks/useFetchData";
import { useNavigate } from "react-router-dom";

interface PlanetFormProps {
    defaultValues: Planet;
    id: number;
}

const PlanetForm: React.FC<PlanetFormProps> = ({ defaultValues,id}) => {
    const navigate = useNavigate();
    const { register, handleSubmit,formState:{errors} } = useForm<Planet>({
        defaultValues
    });
    const {changeData} = UseFetchData('planets');
    const onSubmit = (data: Planet)=>{
        changeData(data,id);
        navigate('/planets');
    }
    return (
        <form className=" w-3/4 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className= "flex flex-col gap-2">
                <label>Название:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("name",{
                    required: 'это поле обязательно',
                    minLength: {
                        value: 4 ,
                        message: 'минимальное количество символов 4'
                    }}
                )} />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className= "flex flex-col gap-2">
                <label>Диаметр:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" type="number" {...register("diameter")} />
            </div>
            <div className= "flex flex-col gap-2">
                <label>Гравитация:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("gravity",{
                    required: 'это поле обязательно',
                    minLength: {
                        value: 4 ,
                        message: 'минимальное количество символов 4'
                    }}
                )} />
                {errors.gravity && <p className="text-red-500">{errors.gravity.message}</p>}
            </div>
            <div className= "flex flex-col gap-2">
                <label>Климат:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("climate",{
                    required: 'это поле обязательно',
                    minLength: {
                        value: 4 ,
                        message: 'минимальное количество символов 4'
                    }}
                )} />
                {errors.climate && <p className="text-red-500">{errors.climate.message}</p>}
            </div>
            <div className= "flex flex-col gap-2">
                <label>Население:</label>
                <input type="number" className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("population")} />
            </div>
            <div className= "flex flex-col gap-2">
                <label>Местность:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("terrain",{
                    required: 'это поле обязательно',
                    minLength: {
                        value: 4 ,
                        message: 'минимальное количество символов 4'
                    }}
                )} />
                {errors.terrain && <p className="text-red-500">{errors.terrain.message}</p>}
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">Сохранить изменения</button>
        </form>
    );
};

export default PlanetForm;
