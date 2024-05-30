import {Item} from '../types/Item'; 

export const getCurrentMonth = ( ) =>{

    let now = new Date(); 

    return `${now.getFullYear()}-${now.getMonth() +1}`; 
}

// Função filtradora baseando numa lista 

export const filtrarlistadoMes = (list:Item[], date: string ): Item[]=> {

    let novalist: Item[] = []
    let [year, month] = date.split('-'); 


    for (let i in list) {

        if (

            list [i].date.getFullYear () === parseInt(year) && 
            list [i].date.getMonth() +1 === parseInt(month)

        ) {

            novalist.push(list[i]); 

        }
        
    }

    return novalist; 

}
   // Formating date by function 

  export const formatdate  = (date: Date): string => {

    let year  = date.getFullYear(); 
    let month = date.getMonth() +1 
    let day = date.getDate(); 

    return `${AddzerotoDate(day)}/${AddzerotoDate(month)}/${year}`; 

 }

    const AddzerotoDate = (n: number): string => n < 10 ? `0${n}` :  `${n} `;   
 
    export const formatcurrentMonth = (currentMonth: string): string => {

    let [year, month] = currentMonth.split('-'); 

    let months = [

        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August2",
        "September",
        "October",
        "November",
        "December"]; 

    return `${months[parseInt(month) - 1 ]} of ${year}`; 

 }

 export const newDateAdjusted = (dateField: string) => {
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
  }