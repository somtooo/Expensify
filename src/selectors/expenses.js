import moment from 'moment';
export default (expenses, {text, sortBy, startDate, endDate})=>{
    console.log(expenses);
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'):true;
        const endDateMatch = endDate ? endDate.isSameOrBefore(createdAtMoment,'day'):true;
        const textMatch = typeof text === 'string' && expense.description.toUpperCase().includes(text.toUpperCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if (sortBy === 'date'){
            return a.createdDate < b.createdDate ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
};