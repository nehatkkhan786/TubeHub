import { Box } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos]=useState([])


  const {id} = useParams()


  const fetchChannelDetails = async()=>{
    const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`, {
      headers: {
        'X-RapidAPI-Key': '3fcab545abmsh63e5ed823f231d7p1e2566jsn6d6cf3ab890e',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
      }
    })
    setChannelDetail(data.items[0])
  };

  const fetchChannelVideos = async ()=>{

    const options = {
      params: {
        part: 'snippet,id',
        order: 'date',
        maxResults: '50'
      },
      headers: {
        'X-RapidAPI-Key': '3fcab545abmsh63e5ed823f231d7p1e2566jsn6d6cf3ab890e',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
    };

    const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/search?channelId=${id}`, options)
    setVideos(data?.items)
  }

  useEffect(()=>{
      fetchChannelDetails();
      fetchChannelVideos()
  }, [id])

  return (
    <Box sx={{minHeight:'95vh'}}>
        <Box>
          <div style={{
            background:' linear-gradient(90deg, rgba(0,212,255,1) 19%, rgba(94,103,39,1) 45%, rgba(226,140,28,1) 76%)', 
            height:'300px',
            zIndex:10
          }}/>
          <ChannelCard channelDetail={channelDetail} marginTop='-110px'/>
        </Box>
        <Box display='flex' p={2}>
          <Box>
           <Videos videos={videos}/>
          </Box>
        </Box>
    </Box>
  )
}

export default ChannelDetail