import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, EDIT_TASK } from "../Constants/actions-type";

const intialState = {
    tasks : [
        {
            id:0,
            desc:'sport',
            isEdited : false
        },
        {
            id:1,
            desc:'todo list homework',
            isEdited : false
        },
        {
            id:2,
            desc:'sport',
            isEdited : false
        }
    ]
};
const taskReducer = (state = intialState, {type, payload}) => {
    switch (type) {
        case  ADD_TASK :
            return {
            ...state,
            tasks:[...state.tasks, {id:Date.now(), desc:payload}]
            }

        case DELETE_TASK :
            return {
                
                ...state,
                tasks:state.tasks.filter((el)=>el.id !== payload),
            }
        case TOGGLE_TASK :
            return {
                
                ...state,
                tasks:state.tasks.map((el)=>el.id === payload ? {...el,isEdited:true}: el),
            }  
        
        case EDIT_TASK :
            return {
                
                ...state,
                tasks:state.tasks.map((el)=>el.id === payload.id ? payload : el),
            }     
        default:
            return state;
    }
};

export default taskReducer;