import { getEnv, IStateTreeNode } from 'mobx-state-tree';
import { Environment } from '../environment';

/**
 * Adds a environment property to the node for accessing our
 * Environment in strongly typed.
 */
//eslint-disable-next-line
export const withEnvironment = (self: IStateTreeNode) => ({
  views: {
    get environment() {
      return getEnv<Environment>(self);
    },
  },
});
