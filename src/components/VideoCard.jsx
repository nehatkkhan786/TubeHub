import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

const VideoCard = ({video:{id:{videoId}, snippet} }) => {
  return (
    <Card sx={{width:{xs:'100%', sm:'358px', md:'320px'}, boxShadow:'none', borderRadius:'0'}}>
            <Link to='/'>
                <CardMedia  image={snippet?.thumbnails?.high?.url} alt={snippet?.title}
                sx={{width:{xs:'100%', sm:'358px'}, height:180}}
                />
            </Link>
            <CardContent sx={{background:'#1e1e1e', height:'106px'}}>
              <Link to='/'>
                <Typography variant='subtitle1' fontWeight='bold' color='#fff'>{snippet?.title.slice(0,60)}</Typography>
              </Link>
              <Link to='/'>
                <Typography variant='subtitel2' color='gray'>
                  {snippet?.channelTitle}
                  <CheckCircle sx={{fontSize:'12px', color:'gray', ml:5}}/>
                </Typography>
              </Link>
            </CardContent>
    </Card>
  )
}

export default VideoCard