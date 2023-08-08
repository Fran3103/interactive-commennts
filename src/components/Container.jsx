
import { useState } from 'react'
import data from '../data/data.json'
import Cards from './Cards'

import Users from './Users'


const Container = () => {

  const [comentario, setComentario] = useState('') 

  const agregar = newComment => {

    if(newComment.texto.trim()){
      newComment.texto = newComment.texto.trim();
      const actualizar = [newComment, ...newComment]
      setComentario(actualizar)
    }
    

}


  return (
    <div>
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

        {
         
            <Users
            onSubmit={agregar}
            image={data.currentUser.image.png}
            username={data.currentUser.username}
            
            />
        }

        
    </div>
  )
}

export default Container