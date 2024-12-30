export interface Material {
  id: string;
  name: string;
  description: string;
  specification: string;
  manufacturer: string;
  batchNumber: string;
  productionDate: string;
  expiryDate?: string;
  price?: number;
  quantity: number;
  unit: string;
  status: 'available' | 'low' | 'out_of_stock';
}

export interface Purchase {
  id: string;
  materialId: string;
  quantity: number;
  price: number;
  supplier: string;
  purchaseDate: string;
  deliveryDate?: string;
  status: 'pending' | 'completed' | 'cancelled';
}

export interface Distribution {
  id: string;
  materialId: string;
  quantity: number;
  price: number;
  distributor: string;
  distributionDate: string;
  destination: string;
  status: 'processing' | 'shipped' | 'delivered';
}