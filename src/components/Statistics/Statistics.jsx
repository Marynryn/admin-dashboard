import StatisticsItem from 'components/StatisticsItem/StatisticsItem';
import React from 'react'


const Statistics = ({ props }) => {


    const { totalProducts, totalCustomers, totalSuppliers } = props;

    const arr = [
        { name: "All Products", value: totalProducts, icon: "#icon-cash" },
        { name: "All Customers", value: totalCustomers, icon: "#icon-cash" },
        { name: "All Suppliers", value: totalSuppliers, icon: "#icon-users" }
    ];

    return (
        <div>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: 0, marginBottom: "40px" }}>{arr.map((el, index) => <li key={index}> <StatisticsItem {...el} /></li>)}


            </ul>
        </div>
    )
}
export default Statistics;