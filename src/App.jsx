import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import ClientProfile from './pages/client/ClientProfile'
import Dashboard from './pages/client/Dashboard'
import ClientCounsellors from './pages/client/ClientCounsellors';
import ClientRelaxation from './pages/client/ClientRelaxation';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="clientprofile" element={<ClientProfile />} />
                    <Route path="clientcounsellors" element={<ClientCounsellors />} />
                    <Route path='clientrelaxation' element={<ClientRelaxation />} />
                </Route>
                <Route path="login" element={<div>this is login page</div>}/>
                <Route path="logout" element={<div>this is logout page</div>} />
            </Routes>
        </Router>
    )
}

export default App