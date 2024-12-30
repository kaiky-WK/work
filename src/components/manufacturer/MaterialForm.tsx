import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Material } from '../../types/materials';
import { blockchainService } from '../../services/BlockchainService';

export const MaterialForm = () => {
  const [material, setMaterial] = useState<Partial<Material>>({
    name: '',
    description: '',
    specification: '',
    quantity: 0,
    unit: 'kg',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newMaterial = {
      ...material,
      id: crypto.randomUUID(),
      manufacturer: 'Current Manufacturer',
      batchNumber: `BATCH-${Date.now()}`,
      productionDate: new Date().toISOString(),
      status: 'available' as const,
    };
    
    await blockchainService.recordTransaction({
      type: 'MATERIAL_ADDED',
      data: newMaterial,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">添加新原材料</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">名称</label>
          <input
            type="text"
            value={material.name}
            onChange={(e) => setMaterial({ ...material, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">规格</label>
          <input
            type="text"
            value={material.specification}
            onChange={(e) => setMaterial({ ...material, specification: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">数量</label>
            <input
              type="number"
              value={material.quantity}
              onChange={(e) => setMaterial({ ...material, quantity: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">单位</label>
            <select
              value={material.unit}
              onChange={(e) => setMaterial({ ...material, unit: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="kg">千克 (kg)</option>
              <option value="l">升 (l)</option>
              <option value="piece">件</option>
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">描述</label>
          <textarea
            value={material.description}
            onChange={(e) => setMaterial({ ...material, description: e.target.value })}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          添加原材料
        </button>
      </form>
    </div>
  );
};