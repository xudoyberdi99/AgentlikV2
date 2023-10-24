import BamService from "../service/bams"

const state={
    data:null,
    isloading:false,
    error:null, 
}

const mutations ={
    getBamsStart(state){
        state.isloading=true
        state.data=null
        state.error=null
    },
    getBamsSuccess(state,payload){
        state.isloading=false
        state.data=payload
    },
    getBamsFailure(state){
        state.isloading=false
    },
 
}

const actions ={
    bams(context){
        return new Promise((resolve)=>{
            context.commit('getBamsStart')
            BamService.bams().then(response =>  {
                context.commit('getBamsSuccess', response.data)
                resolve(response.data)
                console.log('DATA',response)
            }).catch(error=>{context.commit('getBamsFailure',error)
                console.log('ERR',error)}
            ) 
        })
    },
   
    
}

export default {
    state,
    mutations,
    actions, 
}