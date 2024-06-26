import {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import SearchBar from "../../components/searchbar/SearchBar";

export default function ResultPage () {
    const {q} = useParams();
    const API = process.env.VITE_API_URL;

    useEffect(() => {
        const fetchData = async () => {
            axios.get(`${API}/videos/q/${q}`).then((response) => console.info(response.data));
        }
        fetchData();
    }, [API, q])

    return ( 
    <>
        <h1>search page</h1>
        <SearchBar/>
    </>
    )

}