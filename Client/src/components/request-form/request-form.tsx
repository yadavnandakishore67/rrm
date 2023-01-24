import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function RequestForm() {
    const navigate = useNavigate();
    const routeUrl = () =>{
        navigate('/requestList')
    }
    return (
        <>
            <Button variant="outlined" onClick={routeUrl} >
                Back
            </Button>
            <p>hello iam form</p>
        </>
    )
}