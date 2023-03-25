import React from 'react'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    //create a new prop
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,id: Math.random().toString()
      }
      console.log(expenseData);
      props.onAddExpense();
    }
  return (
    <div className=' p-4 rounded-lg  '>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    </div>
  )
}

export default NewExpense