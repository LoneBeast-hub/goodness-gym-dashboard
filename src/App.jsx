// components
import Layout from "./components/layout/layout.component"
// react
import { createContext, useState } from "react";
import TodoDeleteModal from "./components/todo_delete_modal/todo_delete_modal.component";
import TodoAddModal from "./components/todo_add_modal/todo_add_modal.component";
import TodoEditModal from "./components/todo_edit_modal/todo_edit_modal.component";
import { Routes, Route, useLocation } from "react-router-dom";
import DummyAuth from "./pages/dummy_auth/dummy_auth.page";
import ConfirmPostNotificationModal from "./components/confirm_post_notification_modal/confirm_post_notification_modal.component";
import SuccessModal from "./components/success_modal/succes_modal.component";

export const MyContext = createContext();

function App() {
  const [contextState, setContextState] = useState({
    showTodoDeleteModal: false,
    showTodoAddModal: false,
    showTodoEditModal: false,
    showConfirmPostNotificationModal: false,
    successMessage: '',
    showNav: false,
    showSuccessModal: false,
    handleAnnouncementSubmit: null,
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
  const location = useLocation();
  return (
    <MyContext.Provider value={{contextState, setContextState}}>
      {
        location.pathname === '/'? 
          <Routes>
            <Route path="/" exact element={<DummyAuth />} />
          </Routes>
        :
          <>
            <Layout />
            {/* todo delete modal */}
            {contextState.showTodoDeleteModal? <TodoDeleteModal /> : ''}
            {/* todo add modal */}
            {contextState.showTodoAddModal? <TodoAddModal /> : ''}
            {/* todo edit modal */}
            {contextState.showTodoEditModal? <TodoEditModal /> : ''}
            {/* Send post confirmation modal */}
            {contextState.showConfirmPostNotificationModal? <ConfirmPostNotificationModal /> : ''}
            {/* Success Modal */}
            {contextState.showSuccessModal? <SuccessModal successMsg={contextState.successMessage} /> : ''}
          </>
      }
    </MyContext.Provider>
  )
}

export default App
