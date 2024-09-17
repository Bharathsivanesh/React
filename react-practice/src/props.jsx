import Aarrayvalue from "./nav";

const Pro=()=>{

//    const arrayvalue=[
//     "bharath","sivanesh","kumar"
//    ]

   const obj=[
    {
        name:"bharath",
        age:21,
    },
    {
        name:"sivanesh",
        age:22,
    }
   ]
    return(
        <>
           < Aarrayvalue data={obj}/>
        </>
    )

}
export default Pro;