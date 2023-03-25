import './App.css';
import ExpenseItem from './components/ExpenseItem';
import Card from './components/Card'
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const expenses = [{
        title:'Car Insuarance',amount:200,date : new Date(2021,2,28)},
        {title:'Repairs & Servicing and Maintenance',amount:354,date : new Date(2021,3,14)},
        {title:'Milk 24 pcs',amount:353,date : new Date(2021,12,28)},
        {title:'Groceries',amount:123,date : new Date(2021,6,28)},
        {title:'Water',amount:60,date : new Date(2021,3,28)},
        {title:'LG Oled Tv set 4k',amount:1000,date : new Date(2021,7,28)},
    ]

    const addExpenseHandler = (expense) => {
      console.log('in app.js');
      console.log(expense)
    }

  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
          {expenses.map((expense) => (
            <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
          ))}
          
        </Card>
      </header>
    </div>
  );
}

export default App;
