import Card from "@mui/material/Card";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function steudent() {
    return(
        <div>
            <h1>Student</h1>
            <Box sx={{display:'flex', justifyContent:'center'}}>
                <Card sx={{ maxWidth: 345 , padding:2}}>
                    <TextField sx={{margin:1}} fullWidth  label="Name" variant="outlined" />
                    <TextField sx={{margin:1}} fullWidth  label="Adderss" variant="outlined" />
                    <TextField sx={{margin:1}} fullWidth  label="Age" variant="outlined" />
                    <TextField sx={{margin:1}} fullWidth  label="School" variant="outlined" />
                    <Button variant="outlined" color="error" onClick={() => PostData()}>
                        Save
                    </Button>
                </Card>
            </Box>
            <Box sx={{backgroundColor:'#df9b9b', borderRadius:2 , display:'flex',justifyContent:'center',marginTop:3}}>
                <h1>sahan</h1>
            </Box>

        </div>
    )
}