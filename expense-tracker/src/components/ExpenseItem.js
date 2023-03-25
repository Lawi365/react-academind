import React,{useState} from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // define variables that will be passed.
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  //create set state.
  const [title, setTitle] = useState(props.title);

  //create arrow function that will react to buttons

  const clickHandler = () => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    // creating the component template.
    <div
      className="flex justify-between font-bold text-[16px] items-center
    p-2 m-2  w-full bg-[#ffffff42] "
    >
      <div className="expense_date w-[54px] mx-2 text-[13px] bg-[#946969] ">
        <div className="font-bold">{month}</div>
        <div className="font-normal">{year}</div>
        <div className="font-extrabold text-4xl">{day}</div>
      </div>
      <h2 className="title flex-grow-0 text-left w-2/4">{title}</h2>
      <div className="amount mx-2 rounded-md outline-none bg-blue-400 px-2 text-white ">
        ${props.amount}
      </div>
      <button
        onClick={clickHandler}
        className="bg-yellow-700 rounded-md text-sm p-1"
      >
        Change Title
      </button>
    </div>
  );
}

export default ExpenseItem;
