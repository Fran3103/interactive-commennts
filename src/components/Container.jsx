
import data from '../data/data.json'
import Cards from './Cards'
import Replies from './Replies'

import Users from './Users'


const Container = () => {


  return (
    <div>
        <div >
        {
            data.comments.map( cards => 
                <Cards
                key={cards.id}
                name={cards.user.username}
                comment={cards.content}
                date={cards.createdAt}
                image={cards.user.image.png}
                score={cards.score}

               

               
                />)

              
        }
        <div className="reply">
        {
            data.comments.map(replys=> 
                replys.replies.map(reply=>
                    
                    <Replies
                    key={reply.id}
                    name={reply.user.username}
                    image={reply.user.image.png}
                    comment={reply.content}
                    date={reply.createdAt}
                    score={reply.score}
                    reply={reply.replyingTo}

                    
                    />)
                
               
                
                )
        }
        </div>
        
        </div>
        

        {
         
            <Users
             
            image={data.currentUser.image.png}
            username={data.currentUser.username}
            
            />
        }

       

        
    </div>
  )
}

export default Container