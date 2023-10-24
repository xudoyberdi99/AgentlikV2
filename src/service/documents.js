import axios from "./axios";

const DocumentService= {
    documents(){
        return axios.get('/document/all')
    },
    
}

export default DocumentService