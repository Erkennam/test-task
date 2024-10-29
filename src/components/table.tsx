import React, { FC } from "react";
import { featureData } from "../types/feature";
import { column } from "../pages/features/columns";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getFeature } from "../store/slice";
import {
    useTable,
} from 'react-table';

interface Props {
    tableData: featureData[],
    tableColumns: () => column[];
}

const Table: FC<Props> = ({ tableData, tableColumns }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const data = React.useMemo<featureData[]>(
        () => tableData,
        [tableData]
    );

    const columns:column[] | any = React.useMemo(
        () => tableColumns(),
        [tableColumns]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable<featureData>({ columns, data });

    const redirect = async (id: number,url:string) => {
        await dispatch(getFeature(url));
        navigate(`${id}`);
    };

    return (
        <table {...getTableProps()} className="min-w-full border-collapse border border-gray-200">
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()} className="border border-gray-200 p-2" key={column.id}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} key={row.id}>
                            {row.cells.map((cell,i:number) => (
                                <td
                                    {...cell.getCellProps()}
                                    className="border border-gray-200 p-2"
                                    onClick={() => redirect(i + 1,row.original.url)}
                                    key={cell.column.id}
                                >
                                    {cell.render('Cell')}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;
