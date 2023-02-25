import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const goodDay = () => {
  const [userInput, setUserInput] = useState("");
  const [result, setResult] = useState("");
  const submit = async() => {
    const url = '/api/hello';
    const res = await axios.post(url, {
      userInput: userInput
    });
    setResult(res.data.result);

    return;
  }

  return(
    <>
    <input onChange={e => setUserInput(e.target.value)}></input>
    <button onClick={e => submit()}>Send</button>
    Result: {result}
    </>
  );
}

export default goodDay;