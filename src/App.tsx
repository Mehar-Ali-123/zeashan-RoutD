import Layout from "./infrastructure/layout/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/css/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import "./assets/css/theme.css"
import ExpenseRequest from "./pages/Expense/ExpenseRequest";
import ExpenseTask from "./pages/Expense/ExpenseTask";
import LeaveRequest from "./pages/Leave/LeaveRequest";
import LeaveTask from "./pages/Leave/LeaveTask";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/expense-request" element={<ExpenseRequest />} />
          <Route path="/expense-task" element={<ExpenseTask />} />
          <Route path="/leave-request" element={<LeaveRequest />} />
          <Route path="/leave-task" element={<LeaveTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
