import React from 'react'

const Users = ({image, username}) => {
  return (
    <div className='card p-4 col-md-4'>

        <div className="coments">
            <img className='img' src={image} alt={username} />
            <form action="#">
                <textarea className='text' name="comment" id="textarea"  placeholder='Add a comment...'></textarea>
                <button className='btn ' type="submit">SEND</button>
            </form>
        </div>
    </div>
  )
}

export default Users