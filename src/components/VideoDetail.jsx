import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'
import { useParams, Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import axios from 'axios'
import { useEffect } from 'react'

const VideoDetail = () => {
  const {id} = useParams()

  const fetchVideoDetails = async()=>{
    const options = {
      params: {
        maxResults: '50',
      },
      headers: {
        'X-RapidAPI-Key': '3fcab545abmsh63e5ed823f231d7p1e2566jsn6d6cf3ab890e',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
    };
    const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&id=${id}`, options)
    console.log(data)
  }
  
  useEffect(()=>{
      fetchVideoDetails();
  }, [])


  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', md:'row'}}>
        {/* for Video Player */}
          <Box flex={1}>
              <Box sx={{position:'sticky', top:'86px', width:'100%'}}>
                  <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className='react-player'/>
                  <Typography variant='h5' fontWeight='bold'>Title</Typography>
                  <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} py={1} px={2}>
                    <Link to='/'>
                        <Typography variant={{sm:'subtitle1', md:'h6'}} color='#fff'>
                          Channel Title
                          <CheckCircle fontSize='12px'/>
                        </Typography>
                    </Link>
                    <Stack direction='row' gap='20px' alignItems='center'>
                        <Typography variant='body1' sx={{opacity:0.7}}> views</Typography>
                        <Typography variant='body1' sx={{opacity:0.7}}> Likes</Typography>

                    </Stack>
                  </Stack>  
              </Box>
          </Box>
        {/* for Recommended videos */}
        <Box>
          
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail