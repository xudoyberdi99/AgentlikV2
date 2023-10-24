import axios from "./axios";

const BamService= {
    bams(){
        return axios.get('/bams/all')
    },
    
}

export default BamService