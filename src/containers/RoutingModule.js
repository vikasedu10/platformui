import React from "react";
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { PNF } from "./PNF";
import { TopNavbar } from "./TopNavbar";
import "../static/css/custom.css";
import { Footer } from "./Footer";
import { Dashboard } from "../components/Dashboard";
import { SidenavParent } from "./SidenavParent";
import { SecuredPage } from "./SecuredPage";
import { Filter } from "./Filter";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "../helpers/PrivateRoute";
import { StudentMain } from "./StudentMain";
import { StudentDetail } from "./StudentDetail";
import { StudentsDetail } from "./StudentsDetail";
import { StudentUpdate } from "./StudentUpdate";

export const RoutingModule = () => {
  return (
    <>
      <Router>
        <div className="main">
          <div className="body">
            <TopNavbar />
            <Routes>
              <Route path="*" element={<PNF />} />
              <Route path="/" exact element={<Navigate replace to="/school" />} />
              <Route path="/school" element={<StudentsDetail />} />
              <Route path="/secured"
                element={
                  <PrivateRoute>
                    <SecuredPage />
                  </PrivateRoute>
                }
              />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/school/student" element={<StudentMain />} />
              <Route path="/school/student/edit/:student_id" element={<StudentUpdate />} />
              <Route path="/school/student/:student_id" element={<StudentDetail />} />
            </Routes>
            <SidenavParent />
            <Filter />
            {/* <Popup /> */}
            <Footer />
          </div>
        </div>
      </Router>
    </>
  )
}
