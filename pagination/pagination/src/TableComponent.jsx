import React, { useEffect, useState } from 'react'
function TableComponent({comment}) {
    
    return (
        <>
            <div className='text-2xl m-5 font-bold flex justify-center'>data from dummy comment data</div>
            <table className="table-fixed  border-separate border border-slate-400 border-spacing-1">
                {console.log(comment)}
                <thead>
                    <tr>
                        <th className='border border-teal-300 p-2 '>name</th>
                        <th className='border border-teal-300 p-2 '>email</th>
                        <th className='border border-teal-300 p-2 '>body</th>
                    </tr>
                </thead>
                <tbody>

                    {comment.map((data) => (
                        <tr key={data.id}>
                            <td className='border border-teal-300 p-2'>{data.name}</td>
                            <td className='border border-teal-300 p-2'>{data.email}</td>
                            <td className='border border-teal-300 p-2'>{data.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>



           
        </>
    )
}

export default TableComponent