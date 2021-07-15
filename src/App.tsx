import React from 'react';
import logo from './logo.svg';
//comp
import Item from './item/Item'
import {useState} from 'react'
import {useQuery} from 'react-query'
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
//styles
import { Wrapper } from './App.styles';
//types
export type CartItemType={
  id:number;
  category:string;
  description:string;
  image:string;
  price:number;
  title:string;
  amount:number;

}
const getProducts= async() : Promise<CartItemType[]>=>{
 return  await (await fetch('https://fakestoreapi.com/products')).json();
}
function App() {
  const {data,isLoading,error} =useQuery<CartItemType[]>('products',getProducts)
  console.log(data)

  const getTotalItems= ()=> null;
  const handleAddToCart =(clickedItem:CartItemType)=> null;
  const handleRemoveFromCart=()=> null;

  if(isLoading) return <LinearProgress/>
  if (error) return <div>Sometime went wrong...</div>
  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item:CartItemType)=>(
          <Grid item key={item.id} xs={12} sm={4}>

            <Item item={item} handleAddToCart={handleAddToCart}/>
             </Grid>
           
        ))}
     </Grid>
     
    </Wrapper>
  );
}

export default App;
