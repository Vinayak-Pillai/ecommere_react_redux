import todoServices from "../Services/todoService";
import { GET_TODO } from "./actionTypes";

export function addTodoData(payload) {
  console.log({ payload });
  return {
    type: GET_TODO,
    payload,
  };
}

// export function getTodoData(){
//   async (dispatch)=>{

//   }
// }

export const getTodoData = () => async (dispatch) => {
  try {
    const response = await todoServices.getTodo();
    const { data } = response;
    dispatch(addTodoData(response.data.todos));
  } catch (error) {
    console.log(error);
  }
};
