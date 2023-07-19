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
                </Route>
                <Route path="counsellor" element={<CounsellorLayout />}>
                    <Route index element={<CounsellorDashboard />} />
                    <Route path="counsellorprofile" element={<CounsellorProfile />} /> 
                </Route>
                <Route path="login" element={<div>this is login page</div>}/>
                <Route path="logout" element={<div>this is logout page</div>} />
            </Routes>
        </Router>
    )
}

export default App