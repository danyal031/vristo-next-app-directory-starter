import AddCategories from '@/components/Warehouse-Management/products/categories/AddCategories';
import Link from 'next/link';
import React from 'react';

const ProductsCategories = () => {
    return (
        <div className="">
            {' '}
            <ul className="mb-6 flex space-x-2 rtl:space-x-reverse">
                <li>
                    <span>محصولات</span>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>دسته بندی محصولات</span>
                </li>
            </ul>
            <AddCategories />
        </div>
    );
};

export default ProductsCategories;
