import React, { Suspense, lazy, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import { ThemeProvider } from 'styled-components';
import { themeConfig } from "./Themes";
import { GlobalContext, GlobalContextType } from "./Providers/global-provider";

const Dashboard = lazy(() => import('./Pages/Dashboard'));
const SmartPhones = lazy(() => import('./Pages/SmartPhones'));
const CreateSmartPhone = lazy(() => import('./Pages/CreateSmartPhone'));

const App: React.FC = () => {
  const { theme } = useContext(GlobalContext) as GlobalContextType;
	return (
      <ThemeProvider theme={ themeConfig[theme] }>
        
        <Router>
          <Layout>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/SmartPhones"
                  element={<SmartPhones />}
                />
                <Route
                  path="/create-SmartPhone"
                  element={<CreateSmartPhone />}
                />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ThemeProvider>
	);
};

export default App;
