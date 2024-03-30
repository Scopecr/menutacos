
function Food(){

  const food1 = "Burrito";
  const food2 = "Tacos";
  const food3 = "Nachos";
  const food4 = "Quesadilla";
  const carnesB = "Carne Molida, Cordero, Pollo, Mixto, Cliche.";
  const carnesT = "Carne Molida, Cordero, Pollo.";
  let priceB = "$3.75, $4.00, $5.00, $7.00 + ivu.";
  let priceT = "$2.50, $3.00 + ivu.";
  let priceQ = "$3.50 (solo queso), $8.00, $10.00 + ivu.";
  let priceN = "$3.50 (solo), $8.00 (supreme), $15.00 (med) +ivu.";

  return(
  <div className="menu">
    <ul>
      <li>{food1}</li> 
      <ul>
        <li>{carnesB}</li>
      </ul>
      <ul>
        {priceB}
      </ul>
      <li>{food4}</li>
      <ul>
        <li>{carnesB}</li>
      </ul>
      <ul>
        {priceQ}
      </ul>
      <li>{food2}</li>
      <ul>
        <li>{carnesB}</li>
      </ul>
      <ul>
        {priceT}
      </ul>
      <li>{food3}</li>
      <ul>
        <li>{carnesT}</li>
      </ul>
      <ul>
        {priceN}
      </ul>
    </ul>
  </div>
  );
}

export default Food