import {Route, Routes} from 'react-router-dom';

import {ComparisonPage, LoginPage, PatientsPage, ProfilePage, SurveysPage} from './pages';
import {Layout} from './components/layouts';
import ResultsPage from './pages/ResultsPage';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<LoginPage />}/>
                <Route path={'profile'} element={<ProfilePage />}/>
                <Route path={'patients'} element={<PatientsPage />}/>
                <Route path={'surveys'} element={<SurveysPage />}/>
                <Route path={'comparison'} element={<ComparisonPage/>}/>
                <Route path={'surveys/:id'} element={<ResultsPage />}/>
            </Route>
        </Routes>
    );
};

export default App;
