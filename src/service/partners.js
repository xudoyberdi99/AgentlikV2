import axios from "./axios";

const PartnerService= {
    partners(){
        return axios.get('/partners/allWithPage?page=0&size=5')
    },
}

export default PartnerService