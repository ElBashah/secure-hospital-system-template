import { auth } from "firebase";
import * as React from "react";
import {
  Routes,
  Route,
  // Link,
  useNavigate,
  // useLocation,
  // Navigate,
  Outlet
} from "react-router-dom";
import { ROUTES } from "./js/constants";
// import Appointments from "./Views/appointments/Appointments";
import Dashboard from "./Views/dashboard/Dashboard";
import Patients from "./Views/patients/patients";
// import Diagnosis from "./Views/diagnosis/Diagnosis";
// import Transactions from "./Views/transactions/Transactions";
import Welcome from "./welcome";
import Patient from "./Views/patients/patient";
import CreatePrescription from "./Views/perscriptions/create-prescriptions";
// import Login_here from "./Views/login/login";
// import Signinout from "./Views/login/login_signup";
// import CreateTransaction from "./Views/transactions/CreateTransaction";
// import CreateTransaction_PatientsTable from "./Views/transactions/CreateTransaction-PatientsTable";
import Employees from "./Views/employees/employees";
import CreateEmployees from "./Views/employees/create-employee";
import {store, persistor} from './redux/store';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { log } from "./js/utils";
// import CreateAppointments from "./Views/appointments/create-appointment";
export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <AuthProvider> */}
          <Routes>
            <Route element={<Layout />}>
              <Route path={ROUTES.HOME} element={<Welcome />} />
              {/* <Route path={ROUTES.LOGIN} element={<Layout2 />} /> */}
              {/* <Route path={ROUTES.DASHBOARD} element={AuthRoute(<Dashboard />)} />
              <Route path={ROUTES.APPOINTMENTS} element={AuthRoute(<Appointments />)} /> */}
              {/* <Route path={ROUTES.APPOINTMENTS} element={AuthenticateRoute(<Appointments />)} />
              <Route path={ROUTES.CREATE_APPOINTMENT} element={AuthenticateRoute(<CreateAppointments />)} /> */}
              {/* <Route path={ROUTES.DIAGNOSIS} element={AuthenticateRoute(<Diagnosis />)} />
              <Route path={ROUTES.TRANSACTIONS} element={AuthenticateRoute(<Transactions />)} /> */}
              {/* <Route path={ROUTES.LOGIN} element={AuthenticateRoute(<Login_here />)} /> */}
              <Route path={ROUTES.PATIENTS} element={AuthenticateRoute(<Patients />, true)} />
              <Route path={ROUTES.PATIENT} element={AuthenticateRoute(<Patient />, false)} />
              <Route path={ROUTES.EMPLOYEES} element={AuthenticateRoute(<Employees />, false)} />
              <Route path={ROUTES.CREATE_PRESCRIPTION} element={AuthenticateRoute(<CreatePrescription />, false)} />
              <Route path={ROUTES.CREATE_EMPLOYEE} element={AuthenticateRoute(<CreateEmployees />, false)} />
              {/* <Route path={ROUTES.CREATE_TRANSACTION} element={AuthenticateRoute(<CreateTransaction />)} />
              <Route path={ROUTES.CREATE_TRANSACTION_PATIENTS_TABLE} element={AuthenticateRoute(<CreateTransaction_PatientsTable />)} /> */}
            </Route>
          </Routes>
        {/* </AuthProvider> */}
      </PersistGate>
    </Provider>
  );
}

function Layout() {
  const navigate = useNavigate();
  React.useEffect(() => setTimeout(() => navigate(ROUTES.PATIENTS), 200), [])
  return (<div> <Outlet /> </div>);
}
const AuthContext = React.createContext({user: null});
const AuthProvider = ({ children }) => <AuthContext.Provider value={{user: auth().currentUser || {user: null}}}>{children}</AuthContext.Provider>;
const useAuth = () => React.useContext(AuthContext);
const AuthenticateRoute = ( children, main ) => {
  // const user = auth().currentUser
  // const navigate = useNavigate();

  // if(user) return <Dashboard>{children}</Dashboard>
  // else navigate(ROUTES.LOGIN_SIGNUP)
  return <Dashboard {...{main}}>{children}</Dashboard>
}

