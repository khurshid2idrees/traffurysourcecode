import React from 'react';



 
// const testdata = [


//   {id:1, name: 'Harry', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },
//   {id:2, name: 'peter', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },
//   {id:3, name: 'laddo', img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },
//   {id:4, name:'kachori',img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80', description:'this is the description' },

// ]



export default function Test({testdata}) {

    const alldata = testdata;
    console.log(alldata)
  return (

    
    
<>
     {/* <div className="mt-12  md:gap-8 border-black"> */}


     

 
        

     {alldata.map(data => (
  <blockquote key={data.id} className="bg-hero-pattern p-8 bg-no-repeat">
    <div className="flex items-center gap-4">
      <div className="w-14 h-14">
        <img
          alt="Man"
          src={data.img}
          className="rounded-full object-cover"
        />
      </div>
      <div>
        <p className="mt-1 text-lg font-medium text-gray-700">{data.name}</p>
      </div>
    </div>
    <p className="line-clamp-2 text-sm sm:line-clamp-none mt-4 text-gray-500 py-8">
     {data.description}
    </p>
  </blockquote>
))}



    {/* </div> */}
</>
  ) 
}
