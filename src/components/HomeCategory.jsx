import React from 'react';
import { Link } from 'react-router-dom';

import "./HomeCategory.css"

const HomeCategory = props => {
  
  console.log(props)
  const { name, description, image } = props.category
  const { route } = props;
  console.log(route)

  return (
    <div className="col-6 mb-3 card">
      <Link to={`/category/${route}`} className="category-card">
        <h2 className="h4 my-1"><strong>{name}:</strong></h2>
        <div className="w-100">
          <img src={image} alt={name} className="w-50" />
        </div>
        <p className="m-0">{description}</p>
      </Link>
    </div>
  )
}

export default HomeCategory;