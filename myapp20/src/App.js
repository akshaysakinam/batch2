import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard.jsx";
import Classroom from "./pages/Classroom";
import Assessment from "./pages/Assessment";
import Store from "./pages/Store";
import Calendar from "./pages/Calendar";
import Blog from "./pages/Blog";
import News from "./pages/News";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import MySettings from "./pages/MySettings.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/store" element={<Store />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="myaccount" element={<MyAccount />} />
          <Route path="mysettings" element={<MySettings />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
