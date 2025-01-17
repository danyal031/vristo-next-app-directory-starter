'use client';
import React from 'react';

const AddProducts = () => {
    const renderForm = () => {
        return (
            <div className="grid grid-cols-12 gap-4">
                <input placeholder="نام محصول" type="text" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="دسته بندی محصول" type="text" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="واحد اندازه گیری" type="text" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="موجودی اولیه" type="number" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="موجودی فعلی" type="number" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="قیمت خرید" type="number" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="قیمت فروش" type="number" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="حداقل موجودی" type="number" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="تاریخ انقضا" type="date" className="col-span-3 rounded-lg border border-gray-300 p-2" />
                <input placeholder="تامین کننده" type="text" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="محل ذخیره سازی" type="text" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="بارکد" type="text" className="col-span-3 rounded-lg border border-gray-300 p-2" />
                <textarea placeholder="توضیحات اضافی" className="col-span-6 rounded-lg border border-gray-300 p-2" minLength={30} maxLength={35} />
            </div>
        );
    };
    return;

    <>{renderForm()}</>;
};

export default AddProducts;
