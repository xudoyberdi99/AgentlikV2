import DocumentService from "../service/documents"

const state={
    data:null,
    isloading:false,
    error:null, 
}

const mutations ={
    getDocumentsStart(state){
        state.isloading=true
        state.data=null
        state.error=null
    },
    getDocumentsSuccess(state,payload){
        state.isloading=false
        state.data=payload
    },
    getDocumentsFailure(state){
        state.isloading=false
    },
 
}

const actions ={
    documents(context){
        return new Promise((resolve)=>{
            context.commit('getDocumentsStart')
            DocumentService.documents().then(response =>  {
                context.commit('getDocumentsSuccess', response.data)
                resolve(response.data)
            }).catch(error=>{context.commit('getDocumentsFailure',error)
                console.log(error)}
            ) 
        })
    },
   
    
}

export default {
    state,
    mutations,
    actions, 
}