import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-clone-c4f41.cloudfunctions.net/api",
  // "http://localhost:5001/clone-c4f41/us-central1/api",
});

export default instance;
