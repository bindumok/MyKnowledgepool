import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <div className='logoblock'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT0b0E1-76b5DiNRopxHr3sjba5kIyvOUZ3w&usqp=CAU' />
            <h1 className='tracking-in-expand'>KnowledgePool</h1>
        </div>
        <div class='menublock'>
        <ol>
            <li>
                <Link to={"/books"}>Books</Link>
            </li>
            <li>
              <Link to={"/bookscart"}>Bookscart</Link>
              </li>
              


        </ol>
    </div>
        

    </nav>
  )
}

export default Nav