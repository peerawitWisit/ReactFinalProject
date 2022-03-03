import React from 'react';
import { addToCart } from '../redux/actions/cartAction';
import { useSelector, useDispatch} from 'react-redux'
import {Table} from "react-bootstrap"
import { InnerLayout, MainLayout } from '../styles/Layout';
import Title from '../Components/Title';
import { motion } from 'framer-motion';

const Cart = () => {

    const cart = useSelector((state) => state.cartReducer.cart)

  return (
    <motion.div initial={{opacity: 0}}
    animate={{opacity:1}}
    exit={{opacity:0}}>
    <MainLayout>
        <InnerLayout>
        <Title title={"Cart"} span={"Cart"}/></InnerLayout>
        <div className="row">
            <div className="col-md-12 mt-2">
                <Table className='Table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ProductID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((c,index) => {
                                return(
                                    <tr key={c.id}>
                                        <td>{index+1}</td>
                                        <td>{c.id}</td>
                                        <td>{c.name}</td>
                                        <td>{c.price}</td>
                                        <td>{c.qty}</td>
                                        <td>{c.price*c.qty}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
        
    </MainLayout>
    </motion.div>
  )
};



export default Cart;
