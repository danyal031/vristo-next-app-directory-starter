import AddSuppliers from '@/components/suppliers/add/AddSuppliers';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className="">
            {' '}
            <ul className="mb-6 flex space-x-2 rtl:space-x-reverse">
                <li>
                    <span>تامین کنندگان</span>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>ایجاد تامین کننده</span>
                </li>
            </ul>
            <AddSuppliers />
        </div>
    );
};

export default page;
