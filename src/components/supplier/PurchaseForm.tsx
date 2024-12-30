import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Purchase } from '../../types/materials';
import { blockchainService } from '../../services/BlockchainService';

export const PurchaseForm = () => {
  const [purchase, setPurchase] = useState<Partial<Purchase>>({
    quantity: 0,
    price: 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPurchase = {
      ...purchase,
      id: crypto.randomUUID(),
      purchaseDate: new Date().toISOString(),
      status: 'pending' as const,
    };
    
    await blockchainService.recordTransaction({
      type: 'PURCHASE_CREATED',
      data: newPurchase,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">采购信息登记</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">原材料</label>
          <select
            onChange={(e) => setPurchase({ ...purchase, materialId: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">选择原材料</option>
            {/* 这里应该从API获取可用的原材料列表 */}
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">数量</label>
            <input
              type="number"
              value={purchase.quantity}
              onChange={(e) => setPurchase({ ...purchase, quantity: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">单价</label>
            <input
              type="number"
              value={purchase.price}
              onChange={(e) => setPurchase({ ...purchase, price: Number(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          提交采购信息
        </button>
      </form>
    </div>
  );
};