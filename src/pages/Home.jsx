import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

// importam componenta Layout, in loc sa importam si header-ul si footer-ul.
import Layout from '../layout/Layout';
import HomeCategory from '../components/HomeCategory'
import products from '../utils/products.json';


const Home = () => {

    const params = useParams();

    const [categories, setCategories] = useState([]);
    const [categoriesNames, setCategoriesNames] = useState([]);

    useEffect(() => {
        const categories = Object.values(products);
        const categoriesNames = Object.keys(products);
        setCategories(categories);
        setCategoriesNames(categoriesNames);
    }, [])

    const curentCategory = (Object.values(params)).toString();
    // this is like match from RRD5
    console.log(curentCategory)
    console.log(categories)
    console.log(categoriesNames)
    return (
        <div>
            <Layout>
                <div className="container-fluid container-min-max-width">
                    <div className="row">
                        <h1>Home</h1>
                        {
                            categories && categories.map((category, index) =>
                                <HomeCategory
                                    key={index}
                                    route={categoriesNames[index]}
                                    category={category}
                                />
                            )
                        }

                    </div>
                </div>
            </Layout>
        </div>
    );

}

export default Home;