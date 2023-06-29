"use client";
import { NavigateNextOutlined } from "@mui/icons-material";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const BreadCrumbsComponent = () => {
    const breadcrumbs = [
        <Link underline="hover" key="1" href="/" sx={{
            color:"gray"
        }}
        // onClick={handleClick}
        >
          Home
        </Link>,
        <Link
          underline="hover"
          key="2"
          href="/"
          sx={{
            color:"gray"
        }}
        //   onClick={handleClick}
        >
          Dashboard
        </Link>,
        <Typography key="3" color="primary">
          Patients
        </Typography>,
      ];
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