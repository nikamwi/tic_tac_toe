import { Box, styled } from "@mui/material";

// REACT Style ------------------

const mainDiviStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingTop:"50px",
};

const headerRestartStyle = {
    color:"#1F3641",
    width:"42px",
    height:"42px",
    backgroundColor:"#A8BFC9",
    borderRadius:"10px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    cursor:"pointer",
};

// MUI Styled-----------------------------

const StyledBoxXO = styled(Box)(() => ({
    borderRadius:"20px", 
    width:"100px",
    height:"100px",
    cursor:"pointer",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#1F3641",
    boxShadow:"inset 5px -8px 0px #10212A",
    color:"#ffffff",
}));

const StyledXOImage = styled(Box)(() => ({
    width:"64px", 
    height:"32px",
    display:"flex", 
}));

const StyledHeder = styled(Box)(() => ({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    width:"318px",
    color:"#ffffff",
}));

export {
    mainDiviStyle, 
    headerRestartStyle, 
    StyledBoxXO,
    StyledXOImage,
    StyledHeder,
};