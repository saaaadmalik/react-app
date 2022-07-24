import React from 'react'
import p1 from '../assets/img/p1.png'

// props = {
//   prod:{
//     title:"",
//     disc:"",
//     price:'',
//     stock:""
//   }
// }

//const {prod} = props   //destructuring

const Card = ({prod}) => {
  return (
    <div className='col-md-4'>
          <div class="card">
            <img src={p1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{prod.title}</h5>
              <p class="card-text">{prod.description}</p>
              <a href="#" class="btn btn-primary">Price: {prod.price}</a>
            </div>
         </div>
        </div>
  )
}

export default Card
//if we write props in argument then in code we have to write props.prod.title, props.prod.desc, props.prod.stock etc
//it is also correct