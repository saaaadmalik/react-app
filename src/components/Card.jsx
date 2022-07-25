import React from 'react'
import { Link } from 'react-router-dom'
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
      <Link to= {`/product/${prod.id}`}>
        <div class="card" >
              <img src={p1} class="card-img-top" alt="..." />
              <div class="card-body" id='Card'>
                <h5 class="card-title">{prod.title}</h5>
                <p class="card-text">{prod.description}</p>
                <a href="#" class="btn btn-primary">Price: {prod.price}</a>
              </div>
          </div>
      </Link>
          
    </div>
  )
}

export default Card
//if we write props in argument then in code we have to write props.prod.title, props.prod.desc, props.prod.stock etc
//it is also correct

//*****String literal***** */

//Normal JavaScript
//let a =5;
// let x =  `I am ` + a +`years old`
//But we can also write 
// let x = `I am ${a} years old`     //this $ sign and {} are used to render a dynamic value
//string written in backticks is called string literlal