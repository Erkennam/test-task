import { Character,Planet,Starship } from "../../types/feature";

export interface column {
    Header: string,
    accessor: string,
}

export const characterColumns = ():column[] => [
    {
        Header: 'Имя',
        accessor: 'name', 
    },
    {
        Header: 'Рост',
        accessor: 'height', 
    },
    {
        Header: 'Масса',
        accessor: 'mass', 
    },
    {
        Header: 'Цвет волос',
        accessor: 'hair_color', 
    },
    {
        Header: 'Пол',
        accessor: 'gender', 
    },
    {
        Header: 'Год рождения',
        accessor: 'birth_year',
    },
    {
        Header: 'цвет глаз',
        accessor: 'eye_color',
    },
    {
        Header: 'цвет кожи',
        accessor: 'skin_color',
    },
];

export const planetColumns = ():column[] => [
    {
        Header: 'Название',
        accessor: 'name', 
    },
    {
        Header: 'Период вращения',
        accessor: 'rotation_period', 
    },
    {
        Header: 'Диаметр',
        accessor: 'diameter', 
    },
    {
        Header: 'Климат',
        accessor: 'climate',
    },
    {
        Header: 'Население',
        accessor: 'population', 
    },
    {
        Header: 'Местность',
        accessor: 'terrain', 
    },
];

export const starshipColumns = ():column[] => [
    {
        Header: 'Название',
        accessor: 'name', 
    },
    {
        Header: 'Модель',
        accessor: 'model', 
    },
    {
        Header: 'Производитель',
        accessor: 'manufacturer', 
    },
    {
        Header: 'Макс. скорость',
        accessor: 'max_atmosphering_speed', 
    },
    {
        Header: 'Класс',
        accessor: 'starship_class', 
    },
];

