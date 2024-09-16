

const Aarrayvalue = (props) => {
  return (
    <>
      <ul>
        {props.ans.map((item,index)=>(
            <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Aarrayvalue;
