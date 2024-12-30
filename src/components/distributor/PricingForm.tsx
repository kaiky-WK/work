import React, { useState } from 'react';
import { DollarSign } from 'lucide-react';
import { blockchainService } from '../../services/BlockchainService';

interface PricingData {
  materialId: string;
  basePrice: number;
  markup: number;
  finalPrice: number;
  effectiveDate: string;
}

export const PricingForm = () => {
  const [pricing, setPricing] = useState<PricingData>({
    materialId: '',
    basePrice: 0,
    markup: 0,
    finalPrice: 0,
    effectiveDate: new Date().toISOString().split('T')[0],
  });

  const calculateFinalPrice = (basePrice: number, markup: number) => {
    return basePrice * (1 + markup / 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await blockchainService.recordTransaction({
      type: 'PRICE_UPDATED',
      data: pricing,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">原材料定价</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">原材料</label>
          <select
            value={pricing.materialId}
            onChange={(e) => setPricing({ ...pricing, materialId: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          >
            <option value="">选择原材料</option>
            {/* 这里应该从API获取可用的原材料列表 */}
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">基础价格</label>
            <input
              type="number"
              value={pricing.basePrice}
              onChange={(e) => {
                const basePrice = Number(e.target.value);
                setPricing({
                  ...pricing,
                  basePrice,
                  finalPrice: calculateFinalPrice(basePrice, pricing.markup),
                });
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">加价比例 (%)</label>
            <input
              type="number"
              value={pricing.markup}
              onChange={(e) => {
                const markup = Number(e.target.value);
                setPricing({
                  ...pricing,
                  markup,
                  finalPrice: calculateFinalPrice(pricing.basePrice, markup),
                });
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">最终价格</label>
          <input
            type="number"
            value={pricing.finalPrice.toFixed(2)}
            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm"
            disabled
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">生效日期</label>
          <input
            type="date"
            value={pricing.effectiveDate}
            onChange={(e) => setPricing({ ...pricing, effectiveDate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        
        <button
          type="submit"
          className="flex items-center justify-center w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <DollarSign className="w-5 h-5 mr-2" />
          更新价格
        </button>
      </form>
    </div>
  );
};