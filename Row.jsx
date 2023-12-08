import React from 'react'

const Row = ({title, fetchURL}) => {
    const [movies, setMovie] = useState([])


  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center'>
        <div id='{slider}'>

        </div>
    </div>
    </>
  )
}

export default Row