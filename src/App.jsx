import {Input} from '@/shared/ui/Input/Input';
import {OutputList} from '@/shared/ui/OutputList/OutputList.jsx';
import { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button';

function App() {
  const [todos, setTodos]=useState([]);

const [inputTxt, setTxt] = useState('');

const setInput = (e)=>{
     setTxt(e.target.value);
}

const addTodo=()=>{
  
  if(!validTxt(inputTxt)) return

  let d = new Date();
  let id = d.getTime();
     let todo={id:id,txt:inputTxt,complete:false};
    setTodos((prevstate)=>{
      return [...prevstate,todo]
    })

    clearInput();
    
}

const clearInput = ()=>{
  setTxt((prevstate)=>{
    return '';
  });
}

const deleteTodo=(id)=>{
     setTodos((prevstate)=>{
      return prevstate.filter((todo)=>{
          return todo.id !=id;
      })
     }) 
} 

const completeTodo=(id)=>{
   let completeIndex=undefined;
   todos.forEach((el,index)=>{
    if(el.id == id) completeIndex=index;
    return
  })

  if(completeIndex !== undefined){
    const completedState = [...todos];
    completedState[completeIndex].complete=!completedState[completeIndex].complete;
    setTodos(completedState);
    
  }

   
}

const validTxt = (str)=>{
     let val=str.trim();
     let res =val.replace(/<[^>]*>?/gm,'');
     return res.length >0 ? true : false;
}

  return (
    <>
      {todos.length<=0 && <p>Список пустий</p> } 

      <div className="inputbutton">

        <Input onchange={setInput} className="input" value={inputTxt}/> 
        <Button child="Додати"  onclick={addTodo}/>
      </div>
      
      <OutputList todos={todos} buttons={
        {
          del:{child:'видалити',onClick:deleteTodo},
          complete:{child:'Готово',onClick:completeTodo}
          }
                                        }/> 


    </>
  )
}

export default App
