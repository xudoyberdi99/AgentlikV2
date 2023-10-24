import axios from "./axios";

const AchievementsService= {
    achievements(){
        return axios.get('/achievements/allWithPage?page=0&size=5')
    },
    achievementsDetail(id){
        return axios.get(`/achievements/AchievementsById/${id}`)
    },
    
}

export default AchievementsService