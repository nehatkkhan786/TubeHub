import { Stack, Typography, Box, Paper, IconButton } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { SearchOutlined } from '@mui/icons-material';

const Navbar = () => {
  return (
   <Stack direction="row"
    alignItems='center'
    p={2}
    sx={{position:'sticky', background:'#000', top:0, justifyContent:'space-between'}}
    >

      <Box sx={{display:{xs:'none',md:'flex' }, alignItems:'center', justifyContent:'center', cursor:'pointer',}}>
         <PlayCircleFilledIcon sx={{fontSize:40, color:'orange', display:'flex'}} /> 
         <Typography sx={{color:'white', ml:1}}>TubeHub</Typography>
      </Box>
      
      <Paper component='form'
      sx={{borderRadius:20, border:'1px solid #e3e3e3', pl:2, boxShadow:'none'}}
      >
          <input
          className="search-bar"
          placeholder="Search...."
          />
          <IconButton>
            <SearchOutlined sx={{color:'orange', p:'10px'}}/>
          </IconButton>
      </Paper>
   </Stack>
  )
}

export default Navbar