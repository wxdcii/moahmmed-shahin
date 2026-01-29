import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
// Services page removed
import Blog from './components/Blog';//
import BlogDetail from './components/BlogDetail';
import Layout from './components/Layout';
// Corrected imports for service detail pages
import DiabeticFootSurgery from './services/Diabetic Foot';
import GeneralSurgery from './services/General-Surgery';
import EmergencyWoundCare from './services/Emergency-care';
import MinorOPDProcedures from './services/Minor-OPD';
import PostSurgicalCare from './services/Post-surgical';
import DiabeticUlcerManagement from './services/Diabetic';
import AppointmentForm from './Email/AppointmentForm';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/appointment" element={<AppointmentForm />} />
          <Route path="/contact" element={<Contact />} />
          {/* Service detail routes */}
          <Route path="/services/diabetic-foot-surgery" element={<DiabeticFootSurgery />} />
          <Route path="/services/general-surgery" element={<GeneralSurgery />} />
          <Route path="/services/emergency-wound-care" element={<EmergencyWoundCare />} />
          <Route path="/services/minor-opd-procedures" element={<MinorOPDProcedures />} />
          <Route path="/services/post-surgical-care" element={<PostSurgicalCare />} />
          <Route path="/services/diabetic-foot-ulcer-management" element={<DiabeticUlcerManagement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
