import axios from "./axios";

const CoursesService= {
    courses(){
        return axios.get('/course/all')
    },
    
}

export default CoursesService