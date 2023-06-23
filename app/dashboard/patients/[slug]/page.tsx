"use client";
import { ConfirmModal } from "@/app/components/confirm-modal/ConfirmModal";
import { ACTIVE } from "@/app/utils/constants";
import { Avatar, Badge, Box, Grid, Stack, Typography } from "@mui/material";

export default function Page({ params }: { params: { slug: number } }) {
  const properties =[
    {title: "First Name", value:"Jeremy"}, 
    {title:"Last Name", value:"Munroe"}, 
    {title:"Phone Number", value:"0746363632"},
    {title:"Email", value:"munroe@gmail.com"}, 
    {title:"Age", value:"22"}, 
    {title:"Gender", value:"Male"},
    {title:"Status", value:"active"}, 
    {title:"Last Date Tested", value:"12 Mar 2023"}
  ]
    return (
      <>
      <Avatar alt={properties[0]?.value} src="/static/images/avatar/2.jpg" sx={{
        margin:"0 auto 2%",
        width:"100px",
        height:"100px"

      }} />
      <Grid container spacing={2}>
        {properties?.map((item)=>{
          return (
            <Grid item xs={4}>
              <Typography>
                {item?.title}
              </Typography>
            {item?.title==="Status" ? 
            <Badge badgeContent={item?.value} color={item?.value===ACTIVE?.name?"primary":"warning"} sx={{
            width:"fit-content",
            marginLeft:"4%",
            color:"text.primary"
          }} 
          className='!capitalize'/> : 
          <Typography sx={{
            color:"GrayText",
            fontSize:15
          }}>
            {item?.value}
          </Typography>
          }  
            </Grid>
          )
        })}

      </Grid>
        <ConfirmModal/>
      </>
    )
  }

