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
import DisableMemberModal from "./components/disable_member_modal/disable_member_modal.component";
import DeleteMemberModal from "./components/delete_member_modal/delete_member_modal.component";
import MemberDetailsModal from "./components/member_details_modal/member_details_modal.component";
import AdminMemberAddModal from "./components/admin_member_add_modal/admin_member_add_modal.component";

export const MyContext = createContext();

function App() {
  const [contextState, setContextState] = useState({
    showTodoDeleteModal: false,
    showTodoAddModal: false,
    showTodoEditModal: false,
    showDisableMemberModal: false,
    showMemberDetailsModal: null,
    showDeleteMemberModal: false,
    showConfirmPostNotificationModal: false,
    successMessage: '',
    showNav: false,
    showDateRangePicker: false,
    showSuccessModal: false,
    handleAnnouncementSubmit: null,
    showActionsModal: null,
    showMemberAddModal: false,
    currentTodoData: null,
    todoIdToDelete: '',
    memberIdToDelete: '',
    filters: {
      search: '',
      fromDate: '',
      toDate: '',
      status: 'All',
    },
    toDoListData: [
      {
        id: 1,
        description: 'Yoga',
        progress: 50,
        due_date: '2022-12-24',
        reminder: 'A day before'
      },
      {
        id: 2,
        description: 'Yoga',
        progress: 10,
        due_date: '2022-12-24',
        reminder: 'A day before'
      },
      {
        id: 3,
        description: 'Yoga',
        progress: 100,
        due_date: '2022-12-24',
        reminder: 'A day before'
      },
      {
        id: 4,
        description: 'Yoga',
        progress: 10,
        due_date: '2022-12-24',
        reminder: 'A day before'
      },
      {
        id: 5,
        description: 'Yoga',
        progress: 50,
        due_date: '2022-12-24',
        reminder: 'A day before'
      },
      {
        id: 6,
        description: 'Yoga',
        progress: 100,
        due_date: '2022-12-24',
        reminder: 'A day before'
      }
    ],
    membersData: [
      {
        id: 1,
        name: 'John Doe',
        username: 'john_doe',
        phone: '0123456789',
        email: 'john_doe@gmail.com',
        status: true,
        date_of_registration: '2023-10-06',
        plan: 'Classical - N22k per month'
      },
      {
        id: 2,
        name: 'Steve Doe',
        username: 'steve_doe',
        phone: '0987654321',
        email: 'steve_doe@gmail.com',
        status: false,
        date_of_registration: '2024-03-06',
        plan: 'Classical - N22k per month'
      },
      {
        id: 3,
        name: 'Albert',
        username: 'king_albert',
        phone: '0987654321',
        email: 'king.albert@gmail.com',
        status: false,
        date_of_registration: '2023-05-09',
        plan: 'Classical - N22k per month'
      },
      {
        id: 4,
        name: 'Luffytaro',
        username: 'luffy_kun',
        phone: '0987654321',
        email: 'luffy@gmail.com',
        status: true,
        date_of_registration: '2023-12-09',
        plan: 'Classical - N22k per month'
      },
      {
        id: 5,
        name: 'Roronoa Zoro',
        username: 'zorojuro',
        phone: '0987654321',
        email: 'santoryou@gmail.com',
        status: true,
        date_of_registration: '2024-6-09',
        plan: 'Classical - N22k per month'
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
            {/* Disable member Modal */}
            {contextState.showDisableMemberModal? <DisableMemberModal /> : ''}
            {/* Delete member Modal */}
            {contextState.showDeleteMemberModal? <DeleteMemberModal /> : ''}
            {/* view member details Modal */}
            {contextState.showMemberDetailsModal? <MemberDetailsModal showMemberDetailsModal={contextState.showMemberDetailsModal} /> : ''}
            {/* Add member Modal */}
            {contextState.showMemberAddModal? <AdminMemberAddModal /> : ''}
          </>
      }
    </MyContext.Provider>
  )
}

export default App
