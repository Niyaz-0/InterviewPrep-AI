import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Dashboard from "./pages/Home/Dashboard"
import InterviewPrep from "./pages/InterviewPrepPage/InterviewPrep"
import LandingPage from "./pages/LandingPage"
 
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage /> } />
          <Route path="/dashboard" element={<Dashboard /> } />
          <Route path="/interview-prep/:sessionId" element={<InterviewPrep /> } />

        </Routes>
      </BrowserRouter>

      <Toaster 
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          }
        }} />
    </div>
  )
}
