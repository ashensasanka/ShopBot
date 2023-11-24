import React from "react";
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import SignUp from "pages/signup.component";
import UserDetails from "pages/userDetails";
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<DesktopOne />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
