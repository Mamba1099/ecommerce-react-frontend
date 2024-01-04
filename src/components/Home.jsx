import React, {useState, useEffect} from 'react'
function Home () {
    const [data, SetData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => SetData(json))
    }
    , [])

 return (
    <>
    <h1>Home</h1>
    <ul>
        {data.map((item => (
            <li key={item.id}>{item.title}</li>
        )))}
    </ul>


    </>
 )
}

export default Home
