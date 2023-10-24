import AchievementsService from "../service/achievements"

const state={
    data:null,
    isloading:false,
    error:null,
    achievementsDetail: null,
    
}

const mutations ={

    getAchievementsStart(state){
        state.isloading=true
        state.data=null
        state.error=null
        state.achievementsDetail=null
    },
    getAchievementsSuccess(state,payload){
        state.isloading=false
        state.data=payload
    },
    getAchievementsFailure(state){
        state.isloading=false
    },

    getAchievementsDetailStart(state){
        state.isloading=true
        state.achievementsDetail=null
        state.error=null
    },
    getAchievementsDetailSuccess(state,payload){
        state.isloading=false
        state.achievementsDetail=payload
    },
    getAchievementsDetailFailure(state){
        state.isloading=false 
    },
 
}

const actions ={
    achievements(context){
        return new Promise((resolve)=>{
            context.commit('getAchievementsStart')
            AchievementsService.achievements().then(response =>  {
                context.commit('getAchievementsSuccess', response.data.content)
                resolve(response.data.content)
            }).catch(error=>{context.commit('getAchievementsFailure',error)
                console.log(error)}) 
        })
    },
    achievementsDetail(context, id){
        return new Promise((resolve) =>{
            context.commit('getAchievementsDetailStart')
            AchievementsService.achievementsDetail(id).then(response =>{
                context.commit('getAchievementsDetailSuccess',response.data)
                resolve(response.data)
            }).catch(()=>context.commit('getAchievementsDetailFailure'))
        })
    },
   
    
}

export default {
    state,
    mutations,
    actions, 
}