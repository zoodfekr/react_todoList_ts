import React from 'react'
import { useGetCategoriesQuery } from '../../../api/users/users';
import CustomTable from '../../../common/CustomTable';

const Category: React.FC = () => {


    const { data: categories, error, isLoading } = useGetCategoriesQuery();

    console.log('Category');

    if (isLoading) return <p>در حال بارگذاری...</p>;
    if (error) return <p>خطا در دریافت داده‌ها!</p>;

    return (
        <div>


            {/* {categories?.map(val => {
                return (
                    <p key={val.id}>{val.title}</p>
                )
            })} */}

            <CustomTable></CustomTable>

        </div>
    )
}

export default Category