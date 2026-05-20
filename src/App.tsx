import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { MarkAttendance } from './components/MarkAttendance';
import { Profile } from './components/Profile';
import { ProfessorProfile } from './components/ProfessorProfile';
import { Settings } from './components/Settings';
import { Students } from './components/Students';
import { Notifications } from './components/Notifications';
import { Reports } from './components/Reports';
import { ManageProfessors } from './components/ManageProfessors';
import { PlaceholderPage } from './components/PlaceholderPage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ProtectedRoute, RoleRoute } from './routes';

export default function App() {
  return (
    <AuthProvider>
      <ErrorBoundary>
        <Router>
          <Routes>
          <Route path="/login" element={<Login />} />
          
          {/* Admin & Professor Shared Routes */}
          <Route
            path="/mark-attendance"
            element={
              <ProtectedRoute>
                <MarkAttendance />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/professor-profile"
            element={
              <RoleRoute allowedRoles={['Professor']}>
                <ProfessorProfile />
              </RoleRoute>
            }
          />

          {/* Admin Only Routes */}
          <Route
            path="/dashboard"
            element={
              <RoleRoute allowedRoles={['Admin']}>
                <Dashboard />
              </RoleRoute>
            }
          />
          <Route
            path="/manage-professors"
            element={
              <RoleRoute allowedRoles={['Admin']}>
                <ManageProfessors />
              </RoleRoute>
            }
          />

          {/* Routes restricted for Professors (redirect to /mark-attendance) */}
          <Route
            path="/students"
            element={
              <RoleRoute allowedRoles={['Admin']}>
                <Students />
              </RoleRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <RoleRoute allowedRoles={['Admin']}>
                <Settings />
              </RoleRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <RoleRoute allowedRoles={['Admin']}>
                <Reports />
              </RoleRoute>
            }
          />

          {/* Professor Specific Routes */}
          <Route
            path="/my-students"
            element={
              <RoleRoute allowedRoles={['Professor']}>
                <PlaceholderPage title="My Students" />
              </RoleRoute>
            }
          />
          <Route
            path="/my-reports"
            element={
              <RoleRoute allowedRoles={['Professor']}>
                <PlaceholderPage title="My Reports" />
              </RoleRoute>
            }
          />

          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  </AuthProvider>
);
}
