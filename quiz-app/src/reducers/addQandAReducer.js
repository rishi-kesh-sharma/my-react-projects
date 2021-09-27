import { ADD_Q_AND_A } from "../actions/actionVariables";

const addQandAReducer=(state,action)=>{


             const {type}=action;

             switch(type)
             {
                 case ADD_Q_AND_A:
                     console.log(action.data);
                     {
                        return action.data;
                        break;
                     }
                     default :return []
             }
}
export default addQandAReducer;