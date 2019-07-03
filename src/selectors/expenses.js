export default (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !=='number' || expense.createdDate >= startDate;
        const endDateMatch = typeof endDate !=='number' || expense.createdDate <= endDate;
        const textMatch = typeof text === 'string' && expense.description.toUpperCase().includes(text.toUpperCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return a.createdDate > b.createdDate ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
};