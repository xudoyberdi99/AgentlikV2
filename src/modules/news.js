import NewsService from "../service/news"

const state={
    data:null,
    isloading:false,
    error:null,
    newsDetail: null,
    
}

const mutations ={

    getNewsStart(state){
        state.isloading=true
        state.data=null
        state.error=null
        state.newsDetail=null
    },
    getNewsSuccess(state,payload){
        state.isloading=false
        state.data=payload
    },
    getNewsFailure(state){
        state.isloading=false
    },

    getNewsDetailStart(state){
        state.isloading=true
        state.newsDetail=null
        state.error=null
    },
    getNewsDetailSuccess(state,payload){
        state.isloading=false
        state.newsDetail=payload
    },
    getNewsDetailFailure(state){
        state.isloading=false 
    },
 
}

const actions ={
    news(context){
        return new Promise((resolve,reject)=>{
            context.commit('getNewsStart')
            NewsService.news().then(response =>  {
                context.commit('getNewsSuccess', response.data.content)
                resolve(response.data.content)
            }).catch(error=>{context.commit('getNewsFailure',error)
                console.log(error)}
            ) 
        })
    },
    newsDetail(context, id){
        return new Promise((resolve,reject) =>{
            context.commit('getNewsDetailStart')
            NewsService.newsDetail(id).then(response =>{
                context.commit('getNewsDetailSuccess',response.data)
                resolve(response.data)
            }).catch(()=>context.commit('getNewsDetailFailure'))
        })
    },
   
    
}

export default {
    state,
    mutations,
    actions, 
}