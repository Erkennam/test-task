import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UseFetchData } from "../../hooks/useFetchData";
import { Character } from "../../types/feature";

interface CharacterFormProps {
    defaultValues: Character;
    id: number;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ defaultValues,id }) => {
    const navigate = useNavigate();
    const { register, handleSubmit,formState:{errors} } = useForm<Character>({
        defaultValues
    });
    const {changeData} = UseFetchData('people');
    const onSubmit = (data: Character)=>{
        changeData(data,id);
        navigate('/characters');
    }
    return (
        <form className=" w-3/4 flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-2">
                <label>Имя:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("name",{
                    required: 'это поле обязательно',
                    minLength: {
                        value: 4 ,
                        message: 'минимальное количество символов 4'
                    }}
                )} />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="flex flex-col gap-2">
                <label>Рост:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" type="number" {...register("height")} />
            </div>
            <div className="flex flex-col gap-2">
                <label>Масса:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" type="number" {...register("mass")} />
            </div>
            <div className="flex flex-col gap-2">
                <label>Цвет волос:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("hair_color" ,{
                    required: 'это поле обязательно',
                    minLength: {
                        value: 4 ,
                        message: 'минимальное количество символов 4'
                    }}
                )} />
                {errors.hair_color && <p className="text-red-500">{errors.hair_color.message}</p>}
            </div>
            <div  className="flex flex-col gap-2">
                <label>Пол:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("gender" ,{
                    required: 'это поле обязательно',
                    minLength: {
                        value: 4 ,
                        message: 'минимальное количество символов 4'
                    }}
                )} />
                {errors.gender && <p className="text-red-500" >{errors.gender.message}</p>}
            </div>
            <div  className="flex flex-col gap-2">
                <label>Цвет глаз:</label>
                <input className="w-full border-2 border-[#e8e8e8] p-2 rounded-md" {...register("eye_color" ,{
                    required: 'это поле обязательно',
                    minLength: {
                        value: 4 ,
                        message: 'минимальное количество символов 4'
                    }}
                )} />
                {errors.eye_color && <p className="text-red-500" >{errors.eye_color.message}</p>}
            </div>
            <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">Сохранить изменения</button>
        </form>
    );
};

export default CharacterForm;
