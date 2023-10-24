import CoursesService from "../service/courses"

const state={
    data:null,
    isloading:false,
    error:null, 
}

const mutations ={
    getCoursesStart(state){
        state.isloading=true
        state.data=null
        state.error=null
    },
    getCoursesSuccess(state,payload){
        state.isloading=false
        state.data=payload
    },
    getCoursesFailure(state){
        state.isloading=false
    },
 
}

const actions ={
    courses(context){
        return new Promise((resolve)=>{
            context.commit('getCoursesStart')
            CoursesService.courses().then(response =>  {
                context.commit('getCoursesSuccess', response.data)
                resolve(response.data)
            }).catch(error=>{context.commit('getCoursesFailure',error)
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