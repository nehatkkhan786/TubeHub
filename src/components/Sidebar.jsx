import React from 'react'
import {Stack} from '@mui/material'
import {useId} from 'react'

import {categories} from '../utils/Constants'

const Sidebar = ({selectedCategories,setSelectedCategories}) => {
    
  return (
        <Stack direction='row' sx={{overflowY:'auto', height:{xs:'auto', md:'95%'}, flexDirection:{md:'column'}}}>
            {categories.map((category)=>{
                return (
                    <button className='category-btn' style={{background:category.name === selectedCategories && 'orange'}} key={category.name} onClick={()=>setSelectedCategories(category.name)}>
                    <span style={{marginRight:'10px'}}>{category.icon}</span>
                    <span>{category.name}</span>
                </button>
                )
            })}
        </Stack>
  )
}

export default Sidebar