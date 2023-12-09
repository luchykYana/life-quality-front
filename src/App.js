import {Route, Routes} from 'react-router-dom';

import {ComparisonPage, LoginPage, ProfilePage, SurveysPage} from './pages';
import {Layout} from './components/layouts';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout />}>
                <Route index element={<LoginPage />}/>
                <Route path={'profile'} element={<ProfilePage />}/>
                <Route path={'surveys'} element={<SurveysPage />}/>
                <Route path={'comparison'} element={<ComparisonPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;
