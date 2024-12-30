import React from 'react';
import { Menu, Bell, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from './layout/Dropdown';

const roleLabels = {
  manufacturer: '生产商',
  supplier: '供应商',
  distributor: '经销商',
  enterprise: '企业用户',
};

export const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Menu className="h-6 w-6 text-gray-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">设备备件溯源系统</span>
            </div>
            <div className="ml-6">
              <Dropdown />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user && (
              <span className="text-sm text-gray-600">
                当前角色：{roleLabels[user.role]}
              </span>
            )}
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900">
              <Bell className="h-6 w-6" />
            </button>
            <button
              onClick={handleLogout}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900"
              title="退出登录"
            >
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};