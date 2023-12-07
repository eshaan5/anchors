import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const EarningPage = React.lazy(() => import("pages/EarningPage"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
const ProjectRoutes = ({ video, setVideoId }) => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage setVideoId={setVideoId} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/earnings" element={<EarningPage video={video} />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
