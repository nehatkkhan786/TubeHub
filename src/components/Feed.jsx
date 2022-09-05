import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import axios from 'axios'

const Feed = () => {

    const [videos, setVideos] = useState([])
    const [selectedCategories, setSelectedCategories] = useState('new')
    const fetchVideos = async ()=>{
      const options = {
        params: {
          maxResults: '50',
        },
        headers: {
          'X-RapidAPI-Key': '3fcab545abmsh63e5ed823f231d7p1e2566jsn6d6cf3ab890e',
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        },
      };
      const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategories}`, options);
      setVideos(data.items)
    }

  useEffect(()=>{
      fetchVideos()
  },[selectedCategories])


  return (
    <Stack sx={{flexDirection:{xs:'column', md:'row'}}}>
      <Box sx={{height:{xs:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{xs:0, md:2}}}>
        {/* Sidebar Component */}
        <Sidebar selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}/>
        <Typography sx={{color:'white'}}>
          Copyright © 2022 TubeHub
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:'auto', height:'90vh', flex:2}}>
        <Typography variant='h4' fontWeight='bold' sx={{color:'white', mb:2}}>
          {selectedCategories} <span style={{color:'orange'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed