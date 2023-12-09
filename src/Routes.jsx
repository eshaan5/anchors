import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
const EarningPage = React.lazy(() => import("pages/EarningPage"));
const Landingpage = React.lazy(() => import("pages/Landingpage"));
import { CustomLoader } from "components/Loader";

const ProjectRoutes = ({ setVideoId, videos }) => {
  return (
    <CustomLoader>
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage setVideoId={setVideoId} />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/earnings" element={<EarningPage videos={videos} />} />
        </Routes>
      </Router>
    </CustomLoader>
  );
};
export default ProjectRoutes;
