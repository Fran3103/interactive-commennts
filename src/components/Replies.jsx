import React from 'react'
const Replies = ({image, name, comment,date, score ,reply}) => {




  return (
    <div className='card card2 p-4 col-l'>
        <div className="userheader userheader2 ">
            <div className="contador " >
                <button>+</button>
                <p>{score}</p>
                <button>-</button>
            </div>
            <div className="users users2">
                <div className="user ">
                    <img className="img" src={image} alt={name} />
                    <p className="name">{name}</p>
                    <p className="date">{date}</p>
                </div>
                
                <button className="reply">Reply</button>
               
                <p className="comment "><b>@{reply}</b>   {comment}</p>
            </div>
          
            
                
        </div>

    </div>
  )
}

export default Replies