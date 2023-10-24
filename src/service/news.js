import axios from "./axios";

const NewsService= {
    news(){
        return axios.get('/news/allNewsWithPage?page=0&size=5')
    },
    newsDetail(id){
        return axios.get(`/news/NewsById/${id}`)
    },
    
}

export default NewsService