import React from 'react';
// import Login1 from './pages/Login1';
import Login from './pages/Login';
import AccountTypeSelection from './pages/AccountTypeSelection';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignUp from './pages/SignUp';
import EmailVerificationStep from './pages/EmailVerificationStep';
import EmailVerification from './pages/EmailVerification';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<AccountTypeSelection/> }/>
        <Route path="/signup/individual" element={<SignUp accountType={"individual"}/> }/>
        <Route path="/signup/business" element={<SignUp accountType={"business"}/> }/>
        <Route path="/signup/otp" element={<EmailVerificationStep/> }/>
        <Route path="/signup/otp-confirmed" element={<EmailVerification/> }/>
      </Routes>
    </Router>
  );
};

export default App;
