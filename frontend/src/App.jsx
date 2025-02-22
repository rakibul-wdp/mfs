import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import SendMoney from "./components/User/SendMoney";
import CashOut from "./components/User/CashOut";
import Balance from "./components/User/Balance";
import CashIn from "./components/Agent/CashIn";
import BalanceRequest from "./components/Agent/BalanceRequest";
import Transactions from "./components/Agent/Transactions";
import ManageUsers from "./components/Admin/ManageUsers";
import ManageAgents from "./components/Admin/ManageAgents";
import RechargeRequests from "./components/Admin/RechargeRequests";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/send-money" element={<SendMoney />} />
        <Route path="/cash-out" element={<CashOut />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/cash-in" element={<CashIn />} />
        <Route path="/balance-request" element={<BalanceRequest />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-agents" element={<ManageAgents />} />
        <Route path="/recharge-requests" element={<RechargeRequests />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
