const Pro = () => {
  const arr = [
    {
      name: "bharath",
      age: 21,
    },
    {
      name: "siva",
      age: 33,
    },
    {
      name: "balaji",
      age: 90,
    },
    {
      name: "hans",
      age: 23,
    },
  ];
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        {arr.map((data, index) => (
          <div
            key={index}
            className="bg-black text-white  ml-20 w-96 h-96 mt-10 flex flex-col items-center justify-center"
          >
            <h1>{data.name}</h1>
            <h1>{data.age} </h1>
          </div>
        ))}
      </div>
    </>
  );
};
export default Pro;
