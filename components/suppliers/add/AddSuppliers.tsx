import React from 'react';

const AddSuppliers = () => {
    const renderForm = () => {
        return (
            <div className="grid grid-cols-12 gap-4">
                <input placeholder="نام تامین کننده" type="text" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="کدمالیاتی" type="number" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="تلفن" type="tel" className="col-span-3 rounded-lg border border-gray-300 p-2" required />
                <input placeholder="ایمیل" type="email" className="col-span-3 rounded-lg border border-gray-300 p-2" />
                <textarea placeholder="آدرس" minLength={20} maxLength={25} className="col-span-6 rounded-lg border border-gray-300 p-2" required />
            </div>
        );
    };
    return (
        <>
            <div className="grid grid-cols-1 gap-3">
                {renderForm()}
                <div className="flex items-center justify-end">
                    <button className="rounded-xl bg-yellow-600 p-2 px-4">اضافه کردن</button>{' '}
                </div>
            </div>
        </>
    );
};

export default AddSuppliers;
