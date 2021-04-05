import { MetaDataModel } from '@models/root-store/metadata-store';
import { ServiceModel, TagServiceModel } from '@models/root-store/sale-store';
import { ProductModel } from '@models/root-store/sale-store/product-model';
import { Instance } from 'mobx-state-tree';
import { GeneralApiProblem } from './api-problem';

export type RequestResult =
  | {
      kind: `ok`;
      result: Record<string, unknown>;
    }
  | GeneralApiProblem;

export type ProductResult = {
  status: number;
  data: {
    items: Instance<typeof ProductModel>[];
    current_page: number;
    item_per_page: number;
    total: number;
  };
};

export type ServiceResult = {
  status: number;
  data: {
    items: Instance<typeof ServiceModel>[];
    current_page: number;
    item_per_page: number;
    total: number;
  };
};

export type TagServiceResult = {
  status: number;
  data: {
    items: Instance<typeof TagServiceModel>[];
    current_page: number;
    item_per_page: number;
    total: number;
  };
};

export type RequestProductsResult =
  | {
      kind: `ok`;
      result: ProductResult;
    }
  | GeneralApiProblem;

export type RequestServiceResult =
  | {
      kind: `ok`;
      result: ServiceResult;
    }
  | GeneralApiProblem;

export type RequestTagServiceResult =
  | {
      kind: `ok`;
      result: TagServiceResult;
    }
  | GeneralApiProblem;

export type MetadataResponse = {
  status: number;
  data: Instance<typeof MetaDataModel>;
};

export type RequestMetadataResult =
  | {
      kind: `ok`;
      result: MetadataResponse;
    }
  | GeneralApiProblem;
