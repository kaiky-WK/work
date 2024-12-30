import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { UserRole } from '../../types/auth';
import { Factory, Truck, Store, Building } from 'lucide-react';

const roleIcons = {
  manufacturer: Factory,
  supplier: Truck,
  distributor: Store,
  enterprise: Building,
};

export const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<UserRole>('manufacturer');

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role);
    // Automatically log in with the selected role
    login({
      id: crypto.randomUUID(),
      username: role,
      role: role,
      email: `${role}@example.com`,
    });
    navigate('/dashboard');
  };

  const roles: UserRole[] = ['manufacturer', 'supplier', 'distributor', 'enterprise'];
  const roleLabels = {
    manufacturer: '生产商',
    supplier: '供应商',
    distributor: '经销商',
    enterprise: '企业用户',
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-8">设备备件溯源系统</h2>
        <p className="text-center text-gray-600 mb-8">请选择您的角色以进入系统</p>
        
        <div className="grid grid-cols-2 gap-4">
          {roles.map((role) => {
            const Icon = roleIcons[role];
            return (
              <button
                key={role}
                onClick={() => handleRoleSelect(role)}
                className="p-6 rounded-lg border-2 flex flex-col items-center transition-all hover:border-blue-500 hover:bg-blue-50"
              >
                <Icon className="h-8 w-8 mb-3 text-blue-600" />
                <span className="text-sm font-medium">{roleLabels[role]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};