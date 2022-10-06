import React from 'react';
import { useFormik } from "formik";

const StockRecord = () => {
    const formik = useFormik({
        initialValues: {
            quarter: '', stock: '', date: '', open: '', high: '', low: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    return (
        <div>
            <h1 className="text-center text-4xl">Add New Stock</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="quarter">Quarter</label>
                <input
                    id="quarter"
                    name="quarter"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.quarter} />
                <label htmlFor="stock">Stock</label>
                <input
                    id="stock"
                    name="stock"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.stock} />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    name="date"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.date} />
                <label htmlFor="open">Open</label>
                <input
                    id="open"
                    name="open"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.open} />
                <label htmlFor="high">High</label>
                <input
                    id="high"
                    name="high"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.high} />
                <label htmlFor="low">Low</label>
                <input
                    id="low"
                    name="low"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.low} />
                <button type="submit" className="Button">Submit</button>
            </form>
        </div>
    );
};

export default StockRecord;
