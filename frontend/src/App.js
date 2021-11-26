import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StreamingNavbar from './components/StreamingNavbar';
import Home from './Routes/Home';
import ContentView from './Routes/ContentView';

function App() {
    return (
        <Router>
            <StreamingNavbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/Series" element={<ContentView filter="series" title="Best Series" />} />
                <Route exact path="/Movies" element={<ContentView filter="movies" title="Popular Titles" />} />
            </Routes>
        </Router>
    );
}

export default App;
