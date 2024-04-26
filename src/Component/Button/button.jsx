import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function ColorButtons() {

    const navigate = useNavigate();

    function handleCounter (){
        navigate("/counterpage");
    }


    function handleSuccess(){
        navigate("/formdata");
    }

    return (
        <Stack direction="row" spacing={3}>
            <div className='flex gap-10 border p-20 mt-[50%!important] bg-red-100 rounded-xl'>
                <Button onClick={handleCounter} color="secondary"> Counter Component</Button>
                <Button onClick={handleSuccess} variant="contained" color="success">
                 Data Form
                </Button>
            </div>
        </Stack>
    );
}