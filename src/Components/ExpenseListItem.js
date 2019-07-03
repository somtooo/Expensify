import React from 'react'


const ExpenseListItem = ({description,amount,createdDate})=>(
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdDate}</p>
    </div>

);

export default ExpenseListItem