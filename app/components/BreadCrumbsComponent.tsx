"use client";
import { NavigateNextOutlined } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const BreadCrumbsComponent = () => {
  const pathname = usePathname()
  // console.log(pathname?.split('/').slice(1));
  useEffect(()=>{

  },[pathname])
  const paths = pathname?.split('/')?.filter(item=>item?.length>2||item==='')
  const breadcrumbs = paths?.map((item, index)=>{
  const isLastItem = index === paths.length - 1;
    return (
      <div key={index+1}>  
        {
        isLastItem?
        <Typography color="primary" 
        className="!capitalize">
          {item}
        </Typography>
        :
        <Link underline="hover" href={
          index===0
          ?
          '/'
          :
          `${(pathname?.split('/').slice(0, index + 1))?.join('/')}`
        } sx={{
          color:"gray"
          }}
          className="!capitalize"
        >
          {item===''?'Home':item}
        </Link>
        }
      </div>

    )
  })
 
    // const breadcrumbs = [
    //     <Link underline="hover" key="1" href="/" sx={{
    //         color:"gray"
    //     }}
    //     // onClick={handleClick}
    //     >
    //       Home
    //     </Link>,
    //     <Link
    //       underline="hover"
    //       key="2"
    //       href="/"
    //       sx={{
    //         color:"gray"
    //     }}
    //     //   onClick={handleClick}
    //     >
    //       Dashboard
    //     </Link>,
    //     <Typography key="3" color="primary">
    //       Patients
    //     </Typography>,
    //   ];
  return (
    <Breadcrumbs
        separator={<NavigateNextOutlined fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
        margin:"1% 0"
        }}
      >
        {breadcrumbs}
      </Breadcrumbs>
  )
}

export default BreadCrumbsComponent