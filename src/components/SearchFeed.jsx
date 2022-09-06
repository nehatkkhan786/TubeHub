import { Box, Typography } from '@mui/material'
import Videos from './Videos'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [videos, setVideos] = useState([])

  const fetchSearchResults = async()=>{
    const options = {
      params: {
        maxResults: '50',
      },
      headers: {
        'X-RapidAPI-Key': '3fcab545abmsh63e5ed823f231d7p1e2566jsn6d6cf3ab890e',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
    };
    const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${searchTerm}`, options);
   setVideos(data?.items)
  };

  useEffect(()=>{
      fetchSearchResults();
  },[searchTerm] )


  return (
    <Box p={2} minHeight='95vh'>
       <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display='flex'>
          <Box sx={{ mr: { sm: '100px' } }}>
            <Videos videos={videos}/>
          </Box>
      </Box>
    </Box>
  )
}

export default SearchFeed