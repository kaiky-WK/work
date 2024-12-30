import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LoginForm } from './components/auth/LoginForm';
import { PrivateRoute } from './components/layout/PrivateRoute';
import { Header } from './components/Header';
import { Stats } from './components/Stats';
import { DataVisualization } from './components/DataVisualization';
import { MaterialForm } from './components/manufacturer/MaterialForm';
import { PurchaseForm } from './components/supplier/PurchaseForm';
import { PricingForm } from './components/distributor/PricingForm';
import { TraceabilityView } from './components/enterprise/TraceabilityView';
import { DigitalTwin } from './components/digital-twin/DigitalTwin';
import { useAuth } from './contexts/AuthContext';

function DashboardContent() {
  const { user } = useAuth();

  const renderRoleContent = () => {
    switch (user?.role) {
      case 'manufacturer':
        return <MaterialForm />;
      case 'supplier':
        return <PurchaseForm />;
      case 'distributor':
        return <PricingForm />;
      case 'enterprise':
        return <TraceabilityView />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Stats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <DataVisualization />
          {renderRoleContent()}
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardContent />
              </PrivateRoute>
            }
          />
          <Route
            path="/digital-twin"
            element={
              <PrivateRoute>
                <div className="min-h-screen bg-gray-100">
                  <Header />
                  <DigitalTwin />
                </div>
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;