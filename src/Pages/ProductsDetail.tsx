import React, { useEffect, useState } from 'react'
import {Link ,useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IProduct } from '../models/Product';


const ProductsDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);

    console.log(id)

    const loadData = () => {

        axios.get(`https://northwind.vercel.app/api/products/${id}`)
            .then(res => {
                setProduct(res.data);
            })
    }
    useEffect(() => {
        loadData();
    }, [id])

  return (
    <div>
    <h3>{product?.name}</h3>
    <p>Category: {product?.unitPrice}</p>
    <p>Price: ${product?.quantityPerUnit}</p>
  </div>
  )
}

export default ProductsDetail