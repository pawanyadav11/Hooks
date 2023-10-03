// import {
//   useState,
//   createContext,
//   useContext,
//   useRef,
//   useEffect
// } from "react";

// const Sender = createContext();
//
// const Header = ()=>{
//   const userData = useContext(Sender);
//   const title = useRef();
//   const [color,setColor] = useState("red");
//
//    useEffect(()=>{
//      title.current.style.color = color;
//    });
//
//
//   const design = (
//     <>
//     <h1 ref={title}>My name is {userData.name}</h1>
//     <button onClick={()=>setColor("blue")}>Test</button>
//     </>
//   );
//   return design;
// }
//
// const Footer = ()=>{
//   const userData = useContext(Sender);
//   const design = (
//     <>
//     <h1>My roll is {userData.roll}</h1>
//     </>
//   );
//   return design;
// }

// import {
//   useReducer,
//   useState
// } from "react";
//
//
// const Hooks = () =>{
//   const controlReducer = (currentState,action)=>{
//     alert(currentState);
//     if(action === "password")
//     {
//       return "text";
//     }
//     else{
//       return "password";
//     }
//   }
//   const [type,setType] = useReducer(controlReducer,"password");
//   const design = (
//     <>
//    <input type={type} />
//    <button onClick={()=>setType(type)}>toggle</button>
//     </>
//   );
//   return design;
// }
//
// export default Hooks;

import {
  useEffect,
  useState
} from "react";

import $ from "jquery";

const Hooks = ()=>{
  const [data,setData] = useState([]);
  const [start,setStart] = useState(0);
  const [loader,setLoader] = useState(false);
  const getRequest = ()=>{
    $.ajax({
      type: "GET",
      url: `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=16`,
      beforeSend: function(){
        return setLoader(true);
      },
      success: function(response)
      {
        response.map((items)=>{
          return setData((oldData)=>{
            return[
              ...oldData,
              items
            ]
          });
        });
      },
      completed: function(){
        return setLoader(false);
      }
    });
  }

  const infiniteScroll =  ()=>{
    window.onscroll = ()=>{
      let windowS = (window.innerHeight+window.scrollY);
      let bodyHeight = (document.body.offsetHeight-80);
      if(windowS >= bodyHeight)
      {
        return setStart(start+16);
      }

    }
  }

  const Loader = ()=>{
    const loaderDesign = (
      <>
      <div className="d-flex justify-content-center my-5">
      <div className="spinner-grow text-muted" style={{marginRight:"8px"}}></div>
      <div className="spinner-grow text-primary" style={{marginRight:"8px"}}></div>
      <div className="spinner-grow text-success" style={{marginRight:"8px"}}></div>
      <div className="spinner-grow text-info" style={{marginRight:"8px"}}></div>
      <div className="spinner-grow text-warning" style={{marginRight:"8px"}}></div>
      <div className="spinner-grow text-danger" style={{marginRight:"8px"}}></div>
      <div className="spinner-grow text-secondary" style={{marginRight:"8px"}}></div>
      <div className="spinner-grow text-dark" style={{marginRight:"8px"}}></div>
      <div className="spinner-grow text-light"></div>
      </div>
      </>
    );
    return loaderDesign;
  }

useEffect(()=>{
  getRequest();
  infiniteScroll();
},[start]);


const downloadNow =(data)=>{
  const url = data.url;
  const a = document.createElement("a");
  a.href = url;
  a.download = "pic-"+data.id+".png";
  a.click();
  a.remove();
}

const Column = ({data})=>{
  console.log(data);
  const colDesign = (
    <>
    <div className="col-md-3 mb-3" >
    <div className="card">
    <img className="card-img-top" src={data.url} alt={data.title} width="100%"/>
    <div className="cadr-body">
    <p>{data.title}</p>
    <button className="btn btn-danger px-3 py-1" onClick={()=>downloadNow(data)}>Download now</button>
    </div>
    </div>
    </div>
    </>
  );
  return colDesign;
}

  const design = (
  <>
  <div className="container py-4">
  <h1>Infinite scroll</h1>
  <hr />
  <div className="row">
  {
    data.map((items)=>{
      return <Column key={items.id} data={items}/>
    })
  }
  </div>
  {
    loader ? <Loader /> : null
  }
  <Loader />
  </div>
  </>
);
  return design;
}

export default Hooks;
