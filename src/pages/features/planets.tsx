import React, { FC } from "react";
import MainLayout from "../../layouts/mainLayout";
import Table from "../../components/table";
import { UseFetchData } from "../../hooks/useFetchData";
import { planetColumns } from "./columns";
import Pagination from "../../components/pagination";

const Planets:FC = ()=>{
    const {data,loading,pageCount} = UseFetchData('planets');
    if(loading){
        return <p>загрузка....</p>
    }
    if(data.length === 0){
        return <p>Нет данных для отображения.</p>
    }
    return(
        <MainLayout>
             <div className=" h-[90%] w-full justify-between flex flex-col gap-10 items-center">
                <Table tableData={data} tableColumns={planetColumns}></Table>
                <Pagination pageCount={pageCount}></Pagination>
            </div>
        </MainLayout>
    )
}

export default Planets;