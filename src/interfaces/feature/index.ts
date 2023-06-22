import { ProductInterface } from 'interfaces/product';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FeatureInterface {
  id?: string;
  name: string;
  status: string;
  product_id?: string;
  team_member_id?: string;
  created_at?: any;
  updated_at?: any;

  product?: ProductInterface;
  user?: UserInterface;
  _count?: {};
}

export interface FeatureGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  product_id?: string;
  team_member_id?: string;
}
