// import 'dotenv/config';
import { useState } from 'react';
// import { loadEnv } from 'react-dotenv';

// loadEnv();

const apiKey = 'AIzaSyDIICPDX-gLLq8s-wZz_S9TQj-9EQACpZU';
const contextKey = '9ec571f86697d07ac';

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${term}`)
            .then(res => res.json())
            .then(result => {
                setData(result);
            })
    }

    fetchData().then(res => {
        console.log(res);
    }).catch(err => {
        console.error(err);
    });

    return { data };
}

export default useGoogleSearch;