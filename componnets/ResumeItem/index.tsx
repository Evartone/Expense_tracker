import * as C from './styles'; 

type props = {

    title: string; 
    value: number; 
    color?:string; 
}

export const ResumeItem = ({title, value, color}: props) =>{

    return(

        <C.Container>

            <C.Title>{title}</C.Title>
            <C.Info color={color}> $ {value}</C.Info>

        </C.Container>

    ); 
}