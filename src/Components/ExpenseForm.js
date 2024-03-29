import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            description: this.props.expense ? this.props.expense.description: '',
            note:this.props.expense ? this.props.expense.note : '',
            amount:this.props.expense ? (this.props.expense.amount).toString(): '',
            createdDate: this.props.expense ? moment(this.props.expense.createdDate): moment(),
            focused:false,
            error:''
        };
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}));
        console.log(this.props)
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(()=>({note}));
    };
    onAmountChange = (e) =>{
      const amount = e.target.value;
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
          this.setState(()=>({amount}))
      }
    };

    onSubmit = (e)=>{
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
            this.setState(()=>({error: 'Please provide description and amount'}))
        }else{
            this.setState(()=>({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount),
                createdDate:this.state.createdDate.valueOf(),
                note: this.state.note
            })
        }
    };
    render(){
        return(
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
                    <SingleDatePicker
                        date={this.state.createdDate} // momentPropTypes.momentObj or null
                        onDateChange={createdDate => this.setState(()=>({ createdAt: createdDate }))} // PropTypes.func.isRequired
                        focused={this.state.focused} // PropTypes.bool
                        onFocusChange={({ focused }) => this.setState(()=>({ focused }))} // PropTypes.func.isRequired
                        id="your_unique_id" // PropTypes.string.isRequired,
                        numberOfMonths = {1}
                        isOutsideRange={() => false}
                    />
                    <textarea placeholder="add a note for your expense (optional)" value={this.state.note} onChange={this.onNoteChange}/>
                    <button>Add Expense</button>
                </form>
            </div>
    )
    }
}