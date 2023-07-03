"use client";
import { useState, useEffect } from "react";
import { getPatient } from "@/app/api-handler/patient";
import { Patient } from "@/app/interfaces";
import { ACTIVE } from "@/app/utils/constants";
import { Avatar, Badge, Box, Grid, Typography } from "@mui/material";

export default function Page({ params }: { params: { slug: number } }) {
  const [patient, setPatient] = useState <Patient>()

  useEffect(() => {
    const getData = async () => {
      const data: Patient = await getPatient({id: params?.slug})
      setPatient(data)
    }
    getData();
    return () => {
      // here you can clean the effect in case the component gets unmonth before the async function ends
    }
  },[])
  const properties =[
    {title: "First Name", value: patient?.first_name }, 
    {title:"Last Name", value: patient?.last_name }, 
    {title:"Phone Number", value: patient?.phone },
    {title:"Email", value: patient?.email }, 
    {title:"Age", value: patient?.age }, 
    {title:"Gender", value: patient?.gender },
    {title:"Status", value: patient?.status }, 
    {title:"Last Date Tested", value: new Date(patient?.last_tested || new Date())?.toLocaleString() }
  ]
    return (
      <>
      <Avatar src="/static/images/avatar/2.jpg" sx={{
        margin:"0 auto 2%",
        width:"100px",
        height:"100px"

      }} />
      <Grid container spacing={2}>
        {properties?.map((item, index)=>{
          return (
            <Grid item xs={4} key={index}>
              <Typography>
                {item?.title}
              </Typography>
            {item?.title==="Status" ? 
            <Badge badgeContent={item?.value} color={item?.value?.toString()?.toLowerCase()===ACTIVE?.name?"primary":"warning"} sx={{
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
        {/* <ConfirmModal/> */}
      </>
    )
  }

