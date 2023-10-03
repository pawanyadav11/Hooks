import $ from "jquery";
import {
  useState,
  useEffect
} from "react";
const test = (type)=>{
//  const d = new Date();
//  const date = d.toLocaleDateString();
//  const time = d.toLocaleTimeString();
//  if(type === "T")
// {
//   return time;
// }
// else if(type === "D") {
//   return date;
//  }
//  else {
//    return "Not found !"
//  }
}

const useHttp = (request)=>{
  useEffect(()=>{
    request.success = function(r)
    {

    }
    $.ajax(request);
  },[request]);

}

export default useHttp;
