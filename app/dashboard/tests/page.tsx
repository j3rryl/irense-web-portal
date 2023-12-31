"use client";
import { Typography } from "@mui/material"

const Page = () => {
  return (
    <>
    <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          fontSize:10,
          letterSpacing: '.1rem',
          color: 'text.primary',
          textDecoration: 'none',
          margin:".8rem 0"
        }}
      >
        This is the Tests Page
      </Typography> 
    </>
  )
}

export default Page