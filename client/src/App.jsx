import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Home/index.jsx";

import ForgotPassword from "./pages/Credentials/ForgotPasswordPage.jsx";
import ResetPassword from "./pages/Credentials/ResetPassword.jsx";
import Team from "./pages/Team/team.jsx";
import CulravCarousel from "./pages/Home/culrav/Rangmanch/rangmanchCarousel.jsx";
import Page from "./pages/Home/Avishkar/Event/Page.jsx";
import AvishkarPage from "./pages/Home/Avishkar/Event/AvishkarPage.jsx";

import Carousel2 from "./pages/Home/Avishkar/TemplateComponents/Carousel2.jsx";
import Sponsors from "./pages/Home/Avishkar/TemplateComponents/Sponsors.jsx";
import User from "./pages/user/User.jsx";
import AdminPanel from "./pages/AdminDashboard/AdminPanel.jsx";
import SignUp from "./pages/Credentials/signup.jsx";
import Culrav from "./pages/Home/culrav/index.jsx";
import Login from "./pages/Credentials/login.jsx";
import CulravOpening from "./pages/Home/culrav/CulravOpening.jsx";
import CulravLanding from "./pages/Home/culrav/CulravLanding.jsx";
import Rules from "./pages/Home/culrav/Rules.jsx";
import AwishkarRules from "./pages/Home/Avishkar/AwishkarRules.jsx";
import AvishkarLanding from "./pages/Home/Avishkar/AvishkarLanding.jsx";
import AvishkarIndex from "./pages/Home/Avishkar/AvishkarIndex.jsx";
import VerifyUser from "./pages/Credentials/VerifyUser.jsx";
import Accomodation from "./pages/Home/Accomodation.jsx";
import Page404 from "./pages/Home/Page404.jsx";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/profile" element={<User />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/team" element={<Team />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword/:token" element={<ResetPassword />} />
          <Route path="/AvishkarEvent/:data" element={<Carousel2 />} />
          <Route path="/page/:data" element={<Page />} />
          <Route path="/avishkarpage/:data" element={<AvishkarPage />} />
          <Route path="/culravEvent/:data" element={<CulravCarousel />} />
          <Route path="/culravOpening" element={<CulravOpening />} />
          <Route path="/culravLanding" element={<CulravLanding />} />
          <Route path="/avishkar-landing" element={<AvishkarLanding />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/culrav" element={<Culrav />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/AvishkarRules" element={<AwishkarRules />} />
          <Route path="/avishkar" element={<AvishkarIndex />} />
          <Route path="/verify/:id" element={<VerifyUser />} />
          <Route path="/accommodation" element={<Accomodation />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
