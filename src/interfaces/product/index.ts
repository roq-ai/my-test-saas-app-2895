import { FeatureInterface } from 'interfaces/feature';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProductInterface {
  id?: string;
  name: string;
  status: string;
  company_id?: string;
  product_manager_id?: string;
  created_at?: any;
  updated_at?: any;
  feature?: FeatureInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    feature?: number;
  };
}

export interface ProductGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  company_id?: string;
  product_manager_id?: string;
}
