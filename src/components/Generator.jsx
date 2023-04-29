import React, { useState } from "react";
import data from "../data";

function Generator() {
  const [numberOf, setNumberOf] = useState(1);
  const [paragraphs, setParagraphs] = useState([]);
  // console.log(data.length);
  console.log(numberOf);
  const handleSubmit = (e) => {
    e.preventDefault();
    let theParagraphs = data.slice(0, numberOf);
    console.log(theParagraphs);
    setParagraphs(theParagraphs);
  };

  return (
    <div className="section-center">
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">Para's to generate:</label>
        <input
          type="number"
          min="1"
          max="8"
          value={numberOf}
          id="count"
          name="amount"
          onChange={(e) => {
            setNumberOf(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((para, index) => {
          return <p key={index}>{para}</p>;
        })}
      </article>
      {/* <select name="count" id="count"> */}
      {/* {data.map((entry, index) => {
          const count = data.indexOf(entry) + 1;
          return (
            <option key={index} value={numberOf}>
              {count}
            </option>
          );
        })} */}
      {/* </select> */}
      {/* <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option> */}
    </div>
  );
}

export default Generator;
