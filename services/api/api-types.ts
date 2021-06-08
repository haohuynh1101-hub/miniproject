
import { Instance } from 'mobx-state-tree';
import { GeneralApiProblem } from './api-problem';

export type RequestResult =
  | {
      kind: `ok`;
      result: Record<string, unknown>;
    }
  | GeneralApiProblem;





