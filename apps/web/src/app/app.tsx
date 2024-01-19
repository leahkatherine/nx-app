import { Toast, RequireAuth } from '@react-monorepo/design-system';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '@react-monorepo/feat-auth';
// import { WebDesignSystem } from '@react-monorepo/design-system';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<AuthRoutes />} />

        <Route
          path="/"
          element={
            <RequireAuth>
              <div>dash</div>
            </RequireAuth>
          }
        />
      </Routes>

      {/* END: routes */}
      <Toast />
    </>
  );
}

export default App;
