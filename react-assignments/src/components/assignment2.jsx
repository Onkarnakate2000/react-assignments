import { useState, useMemo } from 'react';
const words = ["hi", "my", "name", "is", "for", "to", "random", "word" ];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
    let sentence = "";
    for (let j = 0; j < words.length; j++) {
        sentence += (words[Math.floor(words.length * Math.random())])
        sentence += " "
    }
    ALL_WORDS.push(sentence);
}


function Assignment2() {
  // const [input, setInput] = useState();
  const [sentence,setSentence] = useState(ALL_WORDS);
  const [filter,setFilter] = useState("");
    
 const filteredSentences = sentence.filter((item) => item.includes(filter));
  return (
    <>
    <input type="text" value={filter} placeholder='Enter the sentence' onChange={(e)=>{
      setFilter(e.target.value)
    }}></input>
    {filteredSentences.map((words)=>{
      return(
      <p>{words}</p>
      )})}
    </>
  );
}

export default Assignment2;
