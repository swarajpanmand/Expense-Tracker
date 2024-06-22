import React, {useState} from 'react'
import './App.css'

const App = () => {

  const [input, setInput] = useState('');
  const [amount, setAmount] = useState('');
  const [expenses, setExpenses] = useState([]);
  const addExpense = () => {
    if(!input || !amount) return;
    const newExpense ={
      id:expenses.length + 1,
      title: input,
      amount: amount
    }
    setExpenses([...expenses, newExpense]);
    setInput('');
    setAmount(''); 
  }
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense)=> expense.id !== id))
  }

  return (
    <div>
      <h2>Expense Tracker</h2>
      <div>
        <input type='text' placeholder='Enter Expense' value={input} onChange={(e)=> setInput(e.target.value)}/>
        <input type='number' placeholder='Enter Amount'  value={amount} onChange={(e)=> setAmount(e.target.value)}/>
        <button onClick={addExpense}>Add Expense</button>
      </div>
      <ul className='expense-list'>
        {expenses.map((expense)=>(
          <div key={expense.id}>
            <li>
              <span>{expense.title}</span>
              <span>{expense.amount}</span>
            </li>
            <button onClick={()=>deleteExpense(expense.id)}>delete </button>
          </div>
        ))
        }
      </ul>
    </div>
  )
}

export default App
