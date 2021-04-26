import axios from "axios";

export default {
    // get HomePage
    home: () => {
        return axios.get("/");
    },
    portfolio: () => {
        return axios.get("/portfolio");
    },
    contact: () => {
        return axios.get("/contact");
    }
};