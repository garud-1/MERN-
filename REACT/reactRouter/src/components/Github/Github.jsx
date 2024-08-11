import React, { useEffect,useState } from 'react'
 
// why we use this 
// useParams is a hook that allows you to access the URL parameters of the current route.

function Github() {
  const [data, setData] = useState([])
  useEffect(
    ()=>{
      fetch('https://api.github.com/users/garud-1')
      .then(response=> response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
       
    }
    ,[])
   
  return (
    <div className='bg-gray-700 text-white text-3xl p-4 text-center m-4'>
         Github Followers : {data.followers}
         </div>
  )
}

export default Github