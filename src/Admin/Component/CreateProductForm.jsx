import React, { useState } from "react";
import { Typography } from "@mui/material";
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";

const initialSizes=[
    {name: "S", quantity: 0},
    {name: "M", quantity: 0},
    {name: "L", quantity: 0},
];

const CreateProductForm = () => {
    const [productData,setProductData] = useState({
        imageUrl:"  ",
        brand:"  ",
        title:"  ",
        color:"  ",
        description:"  ",
        price:"  ",
        discountedPrice:"  ",
        discountedPresent:"  ",
        quantity:"  ",
        sizes:initialSizes,
        topLavelCategory:"  ",
        secondLavelCategory:"  ",
        thirdLavelCategory:"  ",

    });



    return (
        <Fragment className="createProductContainer ">
            <Typography>
                
            </Typography>

        </Fragment>
    );
}

export default CreateProductForm;