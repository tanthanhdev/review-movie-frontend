
import axios from "axios";

export default axios.create({
  baseURL: "https://api-reviewmovie-dtu.herokuapp.com/api",//http://localhost:8000/
  headers: {
    "Content-type": "application/json"
  }
});