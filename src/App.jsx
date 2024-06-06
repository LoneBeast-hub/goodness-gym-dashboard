// components
import Layout from "./components/layout/layout.component"
// react
import { createContext, useState } from "react";
import TodoDeleteModal from "./components/todo_delete_modal/todo_delete_modal.component";

export const MyContext = createContext();

function App() {
  const [contextState, setContextState] = useState({
    showTodoDeleteModal: false,
    showNav: false,
  })
  return (
    <MyContext.Provider value={{contextState, setContextState}}>
      <Layout />
      {/* todo delete modal */}
      {contextState.showTodoDeleteModal? <TodoDeleteModal /> : ''}
    </MyContext.Provider>
  )
}

export default App
