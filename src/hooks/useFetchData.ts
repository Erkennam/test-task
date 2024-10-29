import { useEffect, useState } from "react";
import axios from 'axios';
import { useSelector,useDispatch } from "react-redux";
import { featureData } from "../types/feature";
import {setData} from '../store/slice';
import { RootState } from "../store/store";

export const UseFetchData = (path:string)=>{
    const dispatch = useDispatch();
    const data = useSelector((state:RootState)=> state.slice.data);
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<boolean>(false);
    const [pageCount, setPageCount] = useState<number>(0);
    const page = useSelector((state: RootState)=> state.slice.page);
    const fetchData = async ()=>{
        setLoading(true);
        try{
            const resp = await axios.get(`https://swapi.dev/api/${path}?page=${page}`);
            dispatch(setData(resp.data.results));
            setPageCount(Math.ceil(resp.data.count / 10));
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }
    const changeData = (featureData:featureData,id:number)=>{
        const changedData = data.map((el:featureData,i:number)=>{
            if(id === (i + 1)) {
                return featureData;
            }
            return el;
        })
        dispatch(setData(changedData));
    }
    useEffect(()=>{
        fetchData();
    },[path,page]);
    return {data,loading,error,pageCount,changeData};
}