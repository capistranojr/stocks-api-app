import React from 'react';

const Table = ({ data }) => {
    return (
        <table>
            <tbody>
                <tr className="alignCenter">
                    <th>QUARTER</th>
                    <th>STOCK</th>
                    <th>DATE</th>
                    <th>OPEN</th>
                    <th>HIGH</th>
                    <th>LOW</th>
                    <th>CLOSE</th>
                    <th>VOLUME</th>
                    <th>% CHANGE PRICE</th>
                    <th>% CHANGE VOL OVR LST WK</th>
                    <th>PREV WK VOL</th>
                    <th>NXT WK OPEN</th>
                    <th>NXT WK CLOSE</th>
                    <th>% CHANGE NXT WK PRICE</th>
                    <th>DAYS TO NXT DIVIDEND</th>
                    <th>% RTN NXT DIVIDEND</th>
                </tr>
                {data.map((item, index) => (
                    <tr key={index + 1} className="alignCenter">
                        <td>{item.quarter}</td>
                        <td>{item.stock}</td>
                        <td>{item.date}</td>
                        <td>{item.open}</td>
                        <td>{item.high}</td>
                        <td>{item.low}</td>
                        <td>{item.close}</td>
                        <td>{item.volume}</td>
                        <td>{item.percent_change_price}</td>
                        <td>{item.percent_change_volume_over_last_wk}</td>
                        <td>{item.previous_weeks_volume}</td>
                        <td>{item.next_weeks_open}</td>
                        <td>{item.next_weeks_close}</td>
                        <td>{item.percent_change_next_weeks_price}</td>
                        <td>{item.days_to_next_dividend}</td>
                        <td>{item.percent_return_next_dividend}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
