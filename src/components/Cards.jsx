import React from 'react'
import ContainerReplies from './ContainerReplies'

const Cards = ({image , name, comment, date, score}) => {






  return (
    <div className='container p-4 col-md-4  '>
        <div className="card p-4 ">
            <div className="userheader ">
                <div className="contador " >
                    <button>+</button>
                    <p>{score}</p>
                    <button>-</button>
                </div>
                <div className="users">
                    <div className="user ">
                        <img className="img" src={image} alt={name} />
                        <p className="name">{name}</p>
                        <p className="date">{date}</p>
                    </div>
                    
                    <button className="reply">Reply</button>
                
                    <p className="comment row">{comment}</p>
                </div>
            
                
                    
            </div>
        </div>
        
        <ContainerReplies/>

    </div>
  )
}

export default Cards