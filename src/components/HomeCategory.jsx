import React from 'react';
import { Link } from 'react-router-dom';

import "./HomeCategory.css"

const HomeCategory = props => {

  console.log(props)
  const { name, description, image } = props.category
  const { route } = props;
  console.log(route)

  return (
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
      </Link>
    </div>
  )
}

export default HomeCategory;