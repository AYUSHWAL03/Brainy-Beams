import React from 'react'

function Pagination({totalNumberPosts,postPerPage,setCurrentData}) {
    let pages = [];
    for(let i=1;i<=Math.ceil(totalNumberPosts/postPerPage);i++){
        pages.push(i);
    } 
  return (
    <div>
        
        {/* {console.log(totalNumberPosts)} */}
        <div className="w-100 flex justify-center">

        {pages.map((num,index)=>{
            return <button key={index} className='border p-1 m-2 border-sky-950' onClick={()=>setCurrentData(num)}>{num}</button>
        })}
        </div>
    </div>
  );
}

export default Pagination