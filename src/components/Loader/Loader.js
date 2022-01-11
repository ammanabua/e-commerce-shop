import React from "react";

import { CircularProgress } from "@material-ui/core";
import "./style.css"

const Loader = () => (
    <div className="loader">
        <CircularProgress />
    </div>
)


export default Loader;