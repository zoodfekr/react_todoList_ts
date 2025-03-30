import React from 'react'
import { useGetCategoriesQuery } from '../../../api/users/users';
import CustomTable from '../../../common/CustomTable';

const Category: React.FC = () => {


    const { data: categories, error, isLoading } = useGetCategoriesQuery();

    console.log('Category');

    if (isLoading) return <p>در حال بارگذاری...</p>;
    if (error) return <p>خطا در دریافت داده‌ها!</p>;


    const table_data = [
        { id: 1, name: "first", value: "ramin" }
    ]

    return (
        <div className='p-2'>


            {/* {categories?.map(val => {
                return (
                    <p key={val.id}>{val.title}</p>
                )
            })} */}

            <CustomTable data={table_data}></CustomTable>

        </div>
    )
}

export default Category