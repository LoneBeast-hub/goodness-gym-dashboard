// components
import Layout from "./components/layout/layout.component"
// react
import { createContext, useState } from "react";
import TodoDeleteModal from "./components/todo_delete_modal/todo_delete_modal.component";
import TodoAddModal from "./components/todo_add_modal/todo_add_modal.component";

export const MyContext = createContext();

function App() {
  const [contextState, setContextState] = useState({
    showTodoDeleteModal: false,
    showTodoAddModal: false,
    showNav: false,
    toDoListData: [
      {
        id: 1,
        description: 'Yoga',
        progress: 50,
        due_date: '04/03/23 - 10pm'
      },
      {
        id: 2,
        description: 'Yoga',
        progress: 10,
        due_date: '04/03/23 - 10pm'
      },
      {
        id: 3,
        description: 'Yoga',
        progress: 100,
        due_date: '04/03/23 - 10pm'
      },
      {
        id: 4,
        description: 'Yoga',
        progress: 10,
        due_date: '04/03/23 - 10pm'
      },
      {
        id: 5,
        description: 'Yoga',
        progress: 50,
        due_date: '04/03/23 - 10pm'
      },
      {
        id: 6,
        description: 'Yoga',
        progress: 100,
        due_date: '04/03/23 - 10pm'
      }
    ]
  })
  return (
    <MyContext.Provider value={{contextState, setContextState}}>
      <Layout />
      {/* todo delete modal */}
      {contextState.showTodoDeleteModal? <TodoDeleteModal /> : ''}
      {/* todo add modal */}
      {contextState.showTodoAddModal? <TodoAddModal /> : ''}
    </MyContext.Provider>
  )
}

export default App
