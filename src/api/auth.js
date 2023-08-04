import axios from "axios";

export const login = async (inputs) => {
    await axios.post("http://localhost:3000/api/auth/login", inputs)
    .then((res) => {
        console.log("data");
        localStorage.setItem('token', res.data.token)
    })
};
