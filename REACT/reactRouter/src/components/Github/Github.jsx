import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-sm'>Github followers: {data.followers}</div>
    <div className='flex items-center justify-center'>
    <img className='align-middle w-50 h-50 bg-blue-500 rounded-full'
      src={data.avatar_url} alt="Git picture" width={300} />
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/garud-1')
    return response.json()
}