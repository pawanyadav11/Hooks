import useHttp from "../custom-hooks/useHttp";
const Test = ()=>{

    const request = {
      type: "GET",
      url: "https://jsonplaceholder.typicode.com/posts"
    }
    useHttp(request);

    const design = (
    <>
    <h1>Test</h1>
    </>
  );
  return design;
}

export default Test;
