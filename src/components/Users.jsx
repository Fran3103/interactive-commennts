import React, { useState } from 'react'


const Users = ({image, username}) => {

    const [comment , setcomment] = useState('')
    
    const commnentChange = e => {
        setcomment(e.target.value)
    }


    const send = e =>{
        e.preventDefault();

        const newComment = {
            id: 22 ,
            texto: comment,

        }

        prompt.onSubmit(newComment)
    }
   


  return (
    <div className='card p-4 col-md-4'>

        <div className="coments">
            <img className='img' src={image} alt={username} />
            <form action="#" onSubmit={send}>
                <input type='text' className='text' name="comment" id="textarea"  placeholder='Add a comment...' onChange={commnentChange}/>
                <button className='btn ' >SEND</button>
            </form>
        </div>
    </div>
  )
}

export default Users