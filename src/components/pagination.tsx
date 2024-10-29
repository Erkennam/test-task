import React, { FC } from "react";
import { useSelector,useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setPage } from "../store/slice";
interface props{
    pageCount: number,
}

const Pagination:FC<props> = ({pageCount})=>{
    const dispatch = useDispatch();
    const pages = Array.from({length: pageCount},(_,i:number)=> i + 1);
    const currentPage = useSelector((state:RootState)=> state.slice.page);
    const changePage = (el:number)=>{
        dispatch(setPage(el));
    }
    return(
        <div className="w-full h-[10%] flex justify-center gap-6">
            {pages.map((el:number)=>{
                return(
                    <div 
                        key={el} 
                        className={currentPage === el ? 'text-blue-500' : ''} 
                        onClick={()=>{changePage(el)}}>
                        {el}
                    </div>
                )
            })}
        </div>
    )
}

export default Pagination;