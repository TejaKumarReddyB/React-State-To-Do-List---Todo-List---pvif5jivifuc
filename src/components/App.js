import React,{useState} from "react";
import "./../styles/App.css";

function App() {
const [lists,setLists]=useState();
const [item,setItem]=useState([]);
const [toggle,setToggle]=useState(true);
const [edit,setEdit]=useState();
const [update,setUpdate]=useState();
const click=()=>{
	if(!lists){

	}else{
		const allList={id:new Date().toTimeString()}
		setitems([...allList,lists])
		setLists(" ");
	}
}
const saved = () => {
    if (!update) {
    } 
     else if (update && !toggle) {
      setItem(() => {
        item.map((ele) => {
          if (ele.id === edit) {
            return {...ele, name: update};
          }
          return ele;
        });
      });
      setToggle(true);
      setUpdate("");
      setEdit(null);
    }
  };
const edits=(ind)=>{
	const edited=lists.find((ele)=>{
		return(<>
		ind===ele.id
		</>) 
	});
	setToggle(false);
	setUpdate(edited.name);
	setEdit(ind);
}

const del=(ind)=>{
const uplists=lists.filter((ele)=> ele.id!==ind)
   setLists([...uplists]);
}

	return ( 
	<div id="main">
	//Do not alter main div
	//Please do not alter the functional component as tests depend on the type of component.
	{ 
	toggle?
	<>
	<input id="task" type="text" placeholder="Add Task" onChange={(e)=>setLists(e.target.value)} value={lists} />
	<button id="btn" onClick={click}>ADD Task</button></>:<><input   className="editTask" type="text"
            onChange={(e) => setUpdate(e.target.value)}
            value={update}
          />
          <button className="saveTask" onClick={()=>saved()}>
            Save
          </button></>
    }
    {
		item.map((ele)=>{
			return(
				<ul key={ele.id}>
					<li className="list">{ele}</li>
					<button className="edit" onClick={()=>edits(ele.id)}>edit</button>
					<button className="delete" onClick={()=>del(ele.id)}>delete</button>
				</ul>
			)
		})
	}

	</div>
	);
}


export default App;
