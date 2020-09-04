import { reqUrl } from '../constants/api-url';
import { fetchData } from '../utilities/fetchData';

// app.get("/employees/:id",

export const getRecords = () => {
    const url = reqUrl + '/employees'
    return fetchData(url, 'GET');
}