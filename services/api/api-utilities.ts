import { ApiResponse } from 'apisauce';
import { getGeneralApiProblem, GeneralApiProblem } from './api-problem';

export type Response<T> = { kind: `ok`; result: T } | GeneralApiProblem;

export function returnResponse<T>(result: ApiResponse<T>): Response<T> {
  if (!result.ok || !result.data) {
    const problem = getGeneralApiProblem(result);
    if (problem) return problem;
  }

  try {
    if (result.data) {
      return {
        kind: `ok`,
        result: result.data,
      };
    }
    return { kind: `bad-data` };
  } catch {
    return { kind: `bad-data` };
  }
}
