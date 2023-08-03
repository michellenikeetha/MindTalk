import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import ClientProfile from './pages/client/ClientProfile'
import Dashboard from './pages/client/Dashboard'
import ClientCounsellors from './pages/client/ClientCounsellors';
import ClientMusic from './pages/client/ClientMusic';
import ClientMeditation from './pages/client/ClientMeditation';
import CounsellorLayout from "./components/shared/CounsellorLayout";
import CounsellorDashboard from "./pages/counsellor/CounsellorDashboard"
import CounsellorProfile from "./pages/counsellor/CounsellorProfile"
import ClientCounsellorProfile from './pages/client/ClientCounsellorProfile';
import CounsellorDoctors from './pages/counsellor/CounsellorDoctors';
import CounsellorClients from './pages/counsellor/CounsellorClients';
import CounsellorClientProfile from './pages/counsellor/CounsellorClientProfile';
import ClientAppointments from './pages/client/ClientAppointments';
import CounsellorAppointments from './pages/counsellor/CounsellorAppointments';
import ClientCounsellorAppointments from './pages/client/ClientCounsellorAppointments';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="clientprofile" element={<ClientProfile />} />
                    <Route path="clientcounsellors" element={<ClientCounsellors />} />
                    <Route path='clientmusic' element={<ClientMusic />} />
                    <Route path='clientmeditation' element={<ClientMeditation />} />
                    <Route path='clientcounsellors/profile' element={<ClientCounsellorProfile/>} />
                    <Route path='clientappointments' element={<ClientAppointments/>} />
                    <Route path='clientcounsellors/appointments' element={<ClientCounsellorAppointments/>} />
                </Route>
                <Route path="/counsellor" element={<CounsellorLayout />}>
                    <Route index element={<CounsellorDashboard />} />
                    <Route path="counsellorprofile" element={<CounsellorProfile />} />
                    <Route path='counsellordoctors' element={<CounsellorDoctors/>} />
                    <Route path="counsellorclients" element={<CounsellorClients/>} />
                    <Route path="counsellorclients/profile" element={<CounsellorClientProfile/>} />
                    <Route path="counsellorappointments" element={<CounsellorAppointments/>} />
                </Route>
                <Route path="login" element={<div>this is login page</div>}/>
                <Route path="logout" element={<div>this is logout page</div>} />
            </Routes>
        </Router>
    )
}

export default App