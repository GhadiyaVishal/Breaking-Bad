import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchData } from './services/api';
import Characters from './component/Characters';
import Header from './component/Header';

const App = () => {

    const [text, setText] = useState(""); //text string na form ma malse etle
    const [data, setData] = useState([]); // data JSON na form am malse  etle
    useEffect(() => {
        const getData = async() => {
            const result = await fetchData(text);
            setData(result.data);
            console.log(result);
        }
        getData();
    }, [text]);

    const getText = (text) => {
        setText(text);
        console.log(text);
    }

    return ( 
      <Box>
        <Header getText = { getText }/> 
        <Characters data = { data }/> 
        </Box>
    );
};

export default App;