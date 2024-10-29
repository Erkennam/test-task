import React, { FC } from "react";
import MainLayout from "../../layouts/mainLayout";
import Table from "../../components/table";
import { UseFetchData } from "../../hooks/useFetchData";
import { characterColumns } from "./columns";
import Pagination from "../../components/pagination";

const Characters:FC = ()=>{
    const { data, loading, pageCount } = UseFetchData('people'); 
    if (loading) {
        return <p>Загрузка...</p>; 
    }
    if(data.length === 0){
        return <p>Нет данных для отображения.</p>
    }
    return(
        <MainLayout>
            <div className=" h-[90%] w-full justify-between flex flex-col gap-10">
                <Table tableData={data} tableColumns={characterColumns}></Table>
                <Pagination pageCount={pageCount}></Pagination>
            </div>
        </MainLayout>
    )
}

export default Characters;