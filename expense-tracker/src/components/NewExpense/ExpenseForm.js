import React , {useState} from "react";
export default function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  //    const [userInput, setUserInput] =  useState({
  //         enteredAmount: '',
  //         enteredDate: '',
  //         enteredTitle: ''
  //     });

  //     //modern approach (2)
  //      const titleChangeHandler = (event) => {
  //         //old approach (not recommended)
  //         // setUserInput({
  //         //     ...userInput,
  //         //     enteredTitle: event.target.value,
  //         // }
  //         //     )
  //         // new app recommended
  //         setUserInput((prevState) => {
  //           return { ...prevState, enteredTitle: event.target.value};
  //         });
  //     };
  //      const dateChangeHandler = (event) => {
  //         // setUserInput({
  //         //     ...userInput,
  //         //     enteredDate: event.target.value,
  //         // }
  //         //     )
  //         setUserInput((prevState) => {
  //           return {...prevState, enteredDate: event.target.value};
  //         })
  //     };
  //      const amountChangeHandler = (event) => {
  //         // setUserInput({
  //         //     ...userInput,
  //         //     enteredAmount: event.target.value,
  //         // }
  //         //     )
  //         setUserInput((prevState) => {
  //           return { ...prevState, enteredAmount: event.target.value};
  //         })
  //     };
  // //create titlechangeHandler
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  // create amount change Handler.
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  // create a date change Handler.
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) =>{
    event.preventDefault();

    // create expense data object.
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date : new Date(enteredDate)
    };
    console.log(expenseData);
    
    props.onSaveExpenseData();
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
  }

  return (
    <form onSubmit={submitHandler} className="items-start flex  flex-col">
      <div className="new-expense_controls ">
        <div className="new-expense__control  flex">
          <label className="mr-8 py-4">Title</label>
          <input
            onChange={titleChangeHandler}
            className="peer  min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            type="text" value={enteredTitle}
            placeholder="Enter Title"
          />
        </div>
        <div className="new-expense__control flex">
          <label className="mr-8 py-4">Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            className="peer min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control flex">
          <label className="mr-8 py-4">Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            type="date"
            min="2017-01-01"
            step="2023-03-24"
          />
        </div>
      </div>
      <div className="new-expense__actions w-full  mt-2">
        <button
          className="bg-green-400 rounded-lg p-2 text-4 font-bold w-full"
          type="submit"

        >
          Add Expense
        </button>
      </div>
    </form>
  );
}
