import { object, string } from 'yup';

export const authSchema = object().shape({
    login: string().required('логин обязателен'),
    password: string().min(6, 'Пароль должен содержать минимум 6 символов').required('Пароль обязателен'),
});
