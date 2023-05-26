import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IProduct } from '../models/Product';
import {Link ,useNavigate } from 'react-router-dom'
import ProductsDetail from './ProductsDetail';

const Product = () => {
    const [productsList, setProductsList] = useState<IProduct[]>([]);
    const navigate = useNavigate();
    
  //  const [id, setId] = useState(0);
    //const { id } = useParams<{ id: string }>(); // Extract the "id" parameter from the URL


    const loadData = () => {

        axios.get('https://northwind.vercel.app/api/products')
            .then(res => {
                setProductsList(res.data);
            })
    }
    useEffect(() => {
        loadData();
    }, [])
    
  return (
    <div>
        <ul>
            {
                productsList && productsList.map(item => <li ><Link to={`/products/${item.id}`}>{item.name}</Link></li>)
            }

        </ul>
     

    </div>
  )
}

export default Product