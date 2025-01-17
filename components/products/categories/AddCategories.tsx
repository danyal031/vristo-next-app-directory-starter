'use client';
import React from 'react';

const AddCategories = () => {
    const renderForm = () => {
        return (
            <>
                <div className="grid grid-cols-12 gap-4">
                    <input placeholder="نام دسته بندی" type="text" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                    <textarea placeholder="توضیحات" className="col-span-12 rounded-lg border border-gray-300 p-2" />
                </div>
            </>
        );
    };
    return (
        <div className="grid grid-cols-1 gap-3">
            {renderForm()}{' '}
            <div className="flex items-center justify-end">
                <button className="rounded-xl bg-yellow-600 p-2 px-4">اضافه کردن</button>{' '}
            </div>
        </div>
    );
};

export default AddCategories;
