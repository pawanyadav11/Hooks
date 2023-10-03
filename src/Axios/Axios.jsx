import axios from "axios";
import {
  useEffect
} from "react";

const Axios= ()=>{

const getRequest = async ()=>{
  try {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
  }
  catch (err){
    console.log(err);
  }
}

useEffect(()=>{
  const fetchData = async ()=>{
    await getRequest();
  }
  fetchData();
},[]);

const postRequest = async (e)=>{
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  try {
    const {data} = await axios.post("http://localhost:3232",formData);
    console.log(data);
  }
  catch(err){
    console.log(err);
  }
}

const putRequest = async (e)=>{
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
try{
  const {data} = await axios.put("http://localhost:3232/5",formData);
  console.log(data);
}
catch(err) {
  console.log(err);
}
}

const deleteRequest = async ()=>{
  try {
    const {data} = await axios.delete("http://localhost:3232/5");
    console.log(data);
  }

  catch(err) {
    console.log(err);
  }

}

  const design = (
    <>
    <h1>Axios</h1>
    <button onClick={getRequest}>Get request</button>
    <form onSubmit={putRequest}>
    <input name="title" />
    <textarea name="body"></textarea>
    <button>Post request</button>
    </form>
    <button onClick={deleteRequest}>Delete request</button>
    </>
  );
  return design;
}

export default Axios
