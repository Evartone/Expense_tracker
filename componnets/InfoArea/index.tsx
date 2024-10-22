import * as C from "./styles"; 
import { formatcurrentMonth } from "../../helpers/filtrardorDados";
import { ResumeItem } from "../ResumeItem";

type props = {

    currentMonth: string; 
    onMonthChange: (newMonth: string)=> void; 
    income: number ;
    expense: number; 
}

export const InfoArea = ({ currentMonth, onMonthChange, income, expense }:props) => {

    const handlePrevMonth =()=> {

        let [year, month] = currentMonth.split('-'); 
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1); 
        currentDate.setMonth(currentDate.getMonth()-1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1 } `);

    }

     const handleNextMonth =()=> {

        let [year, month] = currentMonth.split('-'); 
        let currentDate = new Date(parseInt(year), parseInt(month) -1, 1); 
        currentDate.setMonth(currentDate.getMonth()+1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() +1 } `);

     }
      
    return (

        <C.Container>

            <C.MonthArea>

                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatcurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>

            </C.MonthArea>

            <C.ResumeArea>

                <ResumeItem title= 'Revenue' value={income} />
                <ResumeItem title= 'Expenses' value ={expense} />
                <ResumeItem title= 'Balance' value={income-expense}
                 color={(income-expense) < 0 ? "red" : "green"}
                
                />

            </C.ResumeArea>
            
        </C.Container>
    ); 
}