import { useState, useEffect } from 'react';
import * as C from './App.styles'; 
import {Item} from './types/Item'; 
import {Category} from './types/Category';
import {categories} from './data/categories'; 
import {items} from "./data/items" 
import {getCurrentMonth, filtrarlistadoMes } from "./helpers/filtrardorDados"
import { TableArea } from './componnets/TableArea';
import { InfoArea } from './componnets/InfoArea';
import { InputArea } from './componnets/inputArea';

const App = () => {

  const [list, setList] = useState(items); 
  const [listafiltrada, setListafiltrada ] = useState<Item[]>([]); 
  const [currentMonth, setCurrentMonth ] = useState(getCurrentMonth()); 
  const [income, setIncome]= useState(0); 
  const [expense, setExpense] = useState(0);

  useEffect (()=> {

      setListafiltrada(filtrarlistadoMes(list, currentMonth))

  }, [list, currentMonth]); 


  useEffect(()=> {

    let incomeCount = 0; 
    let expenseCount = 0; 

    for (let i in listafiltrada) {

      if (categories[listafiltrada[i].category].expense) {

        expenseCount += listafiltrada[i].value; 

      }else {

        incomeCount+= listafiltrada[i].value; 

      }
       
    }

    setIncome(incomeCount); 
    setExpense(expenseCount); 


  }, [listafiltrada]); 


  const handleMonthChange =(newMonth:string)=> {

    setCurrentMonth(newMonth); 

  }

  const handleAddItem =(item: Item)=> {

    let newList = [...list]; 
    newList.push(item); 
    setList(newList); 

  }

 return  (

   <C.Container>

    <C.Header>
       <C.HeaderText> Expense Tracker </C.HeaderText>
    </C.Header>

     <C.Body>

       <InfoArea 
       
         currentMonth={currentMonth}
         onMonthChange = {handleMonthChange}
         income={income}
         expense={expense}
       
       />

        <InputArea onAdd={handleAddItem}/>

       <TableArea list={listafiltrada}/>
    
     </C.Body>

   </C.Container>

 ); 

}

export default App; 
