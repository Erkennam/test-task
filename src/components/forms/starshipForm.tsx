import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Starship } from "../../types/feature"; 
import { UseFetchData } from "../../hooks/useFetchData";

interface StarshipFormProps {
    defaultValues: Starship;
    id: number;
}

const StarshipForm: React.FC<StarshipFormProps> = ({ defaultValues,id }) => {
    const navigate = useNavigate();
    const { register, handleSubmit,formState: {errors} } = useForm<Starship>({
        defaultValues
    });
    const {changeData} = UseFetchData('starships');
    const onSubmit = (data: Starship)=>{
        changeData(data,id);
        navigate('/space-ships');
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
                    }
                })} />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className= "flex flex-col gap-2">
                <label>Модель:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("model",{
                    required: 'это поле обязательно',
                    minLength: {
                        value: 4 ,
                        message: 'минимальное количество символов 4'
                    }}
                )} />
                {errors.model && <p className="text-red-500">{errors.model.message}</p>}
            </div>
            <div className= "flex flex-col gap-2">
                <label>Производитель:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("manufacturer",{
                    required: 'это поле обязательно',
                    minLength: {
                        value: 4 ,
                        message: 'минимальное количество символов 4'
                    }}
                )} />
                {errors.manufacturer && <p className="text-red-500">{errors.manufacturer.message}</p>}
            </div>
            <div className= "flex flex-col gap-2">
                <label>Максимальная скорость:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" type="number" {...register("max_atmosphering_speed")} />
            </div>
            <div className= "flex flex-col gap-2">
                <label>Класс:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("starship_class",{
                    required: 'это поле обязательно',
                    minLength: {
                        value: 4 ,
                        message: 'минимальное количество символов 4'
                    }}
                )} />
                {errors.starship_class && <p className="text-red-500">{errors.starship_class.message}</p>}
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">Сохранить изменения</button>
        </form>
    );
};

export default StarshipForm;
