/* eslint-disable react/prop-types */

const Aarrayvalue = (props) => {
  
  const ans=props.data;

  return (
    <>
      <ul>
      {ans.map((item,index)=>(
        <li key={index}>{item.age}</li>
      ))
      }
      </ul>
    </>
  );
}

export default Aarrayvalue;
