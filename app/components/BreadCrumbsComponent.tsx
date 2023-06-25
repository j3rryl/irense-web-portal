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
          MUI
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
          Core
        </Link>,
        <Typography key="3" color="primary">
          Breadcrumb
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