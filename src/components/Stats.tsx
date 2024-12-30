import React from 'react';
import { Activity, Box, RefreshCcw, Shield } from 'lucide-react';

export const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <Activity className="h-8 w-8 text-blue-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">今日交易</p>
            <p className="text-2xl font-semibold text-gray-900">2,345</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <Box className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">追踪产品</p>
            <p className="text-2xl font-semibold text-gray-900">12,789</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <RefreshCcw className="h-8 w-8 text-purple-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">溯源请求</p>
            <p className="text-2xl font-semibold text-gray-900">891</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-red-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">安全认证</p>
            <p className="text-2xl font-semibold text-gray-900">99.9%</p>
          </div>
        </div>
      </div>
    </div>
  );
};