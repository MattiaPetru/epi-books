import axios from "axios";

let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNmNmYjBiM2IyNTAwMTUxYjU1NmQiLCJpYXQiOjE3MTgyNjYwOTgsImV4cCI6MTcxOTQ3NTY5OH0.lph45VZosQi9DbHtKFXNRLq73lMqVduY26jdIsQ3_88';

export default axios.create({
  baseURL: `https://striveschool-api.herokuapp.com/api`,
  headers: { 'Authorization': `Bearer ${token}` }
});