"use client"

import { Button } from "@mui/material"

// import { Button } from "@mui/material";

const GoBackBtn = () => {
   return <Button onClick={() => window.history.back()}>Go Back</Button>
}

export default GoBackBtn
