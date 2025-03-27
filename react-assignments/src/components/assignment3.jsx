import { useState,useMemo } from 'react';

function Assignment3() {
  const [items, setItems] = useState([
    { name: 'Chocolates', value: 10 },
    { name: 'Chips', value: 20 },
    { name: 'Onion', value: 30 },
    { name: 'Tomato', value: 30 },
    // Add more items as needed
  ]);

  const totalValue1 = useMemo(()=>{
     let totalValue = 0;
     for(let i=0;i<items.length;i++){
        totalValue = totalValue + items[i].value;
     }
     return totalValue;
  },[items])

  console.log("totalValue : ",totalValue1);

  return (
    <>
      {items.map((item, index) => {
        return <Grosarylist key={index} name={item.name} value={item.value} />;
      })}

      <TotalGrosaryValue value={totalValue1}/>
    </>
  );
}

function Grosarylist({ name, value }) {
  return (
    <>
      <ul>
        <li>{name} - {value}</li>
      </ul>
    </>
  );
}

function TotalGrosaryValue({value}){
    return(
        <>
        <p>TotalGrosaryValue - {value}</p>
        </>
    )
}
export default Assignment3;
