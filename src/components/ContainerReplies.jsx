import React from 'react'
import data from '../data/data.json'
import Replies from './Replies'

const ContainerReplies = () => {
  return (
    <div>
        {
            data.comments.map(replys => 
                replys.replies.map(reply =>
                    <Replies
                    key={reply.id}
                    image={reply.user.image.png}
                    name={reply.user.username}
                    comment={reply.content}
                    date={reply.createdAt}
                    score={reply.score}
                    reply={reply.replyingTo}
                    
                    
                    />))
        }
    </div>
  )
}

export default ContainerReplies