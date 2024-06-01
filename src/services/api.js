import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getDoors = () => axios.get(`${API_URL}/door`);
export const updateDoorStatus = (status) => axios.put(`${API_URL}/door`, { status });
export const getEmergencies = () => axios.get(`${API_URL}/emergencies`);
