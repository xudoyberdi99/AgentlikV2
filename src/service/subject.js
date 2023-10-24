import axios from "./axios";

const SubjectService= { 
    subjectList(courseid){
        return axios.get(`/subject/subjectListCourseId/${courseid}`)
    },  
}

export default SubjectService