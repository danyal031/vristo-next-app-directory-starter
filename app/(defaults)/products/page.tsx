import AddProducts from '@/components/products/AddProducts';
import Link from 'next/link';
import React from 'react';

const Products = () => {
    return (
        <div className="">
            {' '}
            <ul className="mb-6 flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="/products" className="text-primary hover:underline">
                        محصولات
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>محصولات</span>
                </li>
            </ul>
            <AddProducts />
        </div>
    );
};

export default Products;
