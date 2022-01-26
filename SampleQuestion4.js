import React, {useEffect} from "react";

function Banner(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Count is updated");
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>State: {count}</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>
        {props.title}
      </h1>
    </div>
  );
}


function page (){

  return(
    <Banner
      title={'hello world'}
    />
  )
}