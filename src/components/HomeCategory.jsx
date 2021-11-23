import React from 'react';
import { Link } from 'react-router-dom';

import "./HomeCategory.css"

const HomeCategory = props => {

  console.log(props)
  const { name, description, image } = props.category
  const { route } = props;
  console.log(route)

  return (
    // <div className="col">
    //   <div className="card">
    //     <img src="..." className="card-img-top" alt="..."/>
    //     <div className="card-body">
    //       <h5 className="card-title">Card title</h5>
    //       <p className="card-text">This is a lonittle bit longer.</p>
    //     </div>
    //   </div>
    // </div>
    <div className="col">
      <Link to={`/category/${route}`} className="category-card">
        <div className="card">
          <div className="image-container">
            <img src={image} alt={name} />
          </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
        {/* <h2 className="h4 my-1"><strong>{name}:</strong></h2>
        <div className="w-100">
          <img src={image} alt={name} className="w-50" />
        </div>
        <p className="m-0">{description}</p> */}
      </Link>
    </div>
  )
}

export default HomeCategory;