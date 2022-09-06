import { Stack, Typography, Box, Paper, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { SearchOutlined } from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')


  const handleSubmit =(e)=>{
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }
  }
  return (
   <Stack direction="row"
    alignItems='center'
    p={2}
    sx={{position:'sticky', background:'#000', top:0, justifyContent:'space-between'}}
    >

      <Box onClick={()=>navigate('/')} sx={{display:{xs:'none',md:'flex' }, alignItems:'center', justifyContent:'center', cursor:'pointer',}}>
         <PlayCircleFilledIcon sx={{fontSize:40, color:'orange', display:'flex'}} /> 
         <Typography sx={{color:'white', ml:1}}>TubeHub</Typography>
      </Box>
      
      <Paper component='form'
      sx={{borderRadius:20, border:'1px solid #e3e3e3', pl:2, boxShadow:'none'}}
      onSubmit={handleSubmit}
      >
          <input
          className="search-bar"
          placeholder="Search...."
        
          value= {searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          />
          <IconButton type='submit'>
            <SearchOutlined sx={{color:'orange', p:'10px'}}/>
          </IconButton>
      </Paper>
   </Stack>
  )
}

export default Navbar;