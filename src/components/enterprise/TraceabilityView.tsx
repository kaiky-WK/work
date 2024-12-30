import React, { useState } from 'react';
import { Search, History } from 'lucide-react';
import { blockchainService } from '../../services/BlockchainService';

export const TraceabilityView = () => {
  const [searchId, setSearchId] = useState('');
  const [traceData, setTraceData] = useState<any>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await blockchainService.verifyProduct(searchId);
    if (result) {
      setTraceData({
        // 模拟数据，实际应从区块链获取
        id: searchId,
        name: ' P80电极喷嘴',
        manufacturer: '任丘市丽辰焊接设备厂',
        productionDate: '2024-03-15',
        supplier: '供应商B',
        distributor: '经销商C',
        transactions: [
          { date: '2024-03-15', type: '生产', actor: '任丘市丽辰焊接设备厂' },
          { date: '2024-03-16', type: '采购', actor: '供应商B' },
          { date: '2024-03-17', type: '定价', actor: '经销商C' },
        ],
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">溯源查询</h2>
        <form onSubmit={handleSearch} className="flex gap-4">
          <input
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="输入产品ID或批次号"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Search className="w-5 h-5 mr-2" />
            查询
          </button>
        </form>
      </div>

      {traceData && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">溯源结果</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">产品名称</p>
                <p className="font-medium">{traceData.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">生产日期</p>
                <p className="font-medium">{traceData.productionDate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">生产商</p>
                <p className="font-medium">{traceData.manufacturer}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">供应商</p>
                <p className="font-medium">{traceData.supplier}</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-md font-semibold mb-3 flex items-center">
                <History className="w-5 h-5 mr-2" />
                交易记录
              </h4>
              <div className="border rounded-lg divide-y">
                {traceData.transactions.map((tx: any, index: number) => (
                  <div key={index} className="p-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{tx.type}</p>
                      <p className="text-sm text-gray-500">{tx.actor}</p>
                    </div>
                    <p className="text-sm text-gray-500">{tx.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};