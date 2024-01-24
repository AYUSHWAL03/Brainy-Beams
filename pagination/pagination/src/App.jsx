import React, { useEffect, useState } from 'react'
import TableComponent from './TableComponent'
import Pagination from './Pagination'
function App() {
    const [comment, setComment] = useState([])
    const [currentData, setCurrentData] = useState(1)
    const [postPerPage, setPostPerPage] = useState(15)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((json) => { setComment(json) })

    }, [])
    const lastDataIndex= currentData * postPerPage;
    const firstDataIndex = lastDataIndex - postPerPage;
    const currentDataPage = comment.slice(firstDataIndex, lastDataIndex)
    const totalNumberPosts = comment.length; 
    return (
        <>
          <TableComponent comment={currentDataPage}/>
          <Pagination totalNumberPosts={totalNumberPosts} postPerPage={postPerPage} setCurrentData={setCurrentData}/>  
        </>
    )
}

export default App