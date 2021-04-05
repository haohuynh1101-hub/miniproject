import { observable, IObservableValue } from 'mobx';
import { IAnyStateTreeNode } from 'mobx-state-tree';

export type StatusType = `idle` | `pending` | `done` | `error`;

export const withStatus = (): IAnyStateTreeNode => {
  const status: IObservableValue<string> = observable.box(`idle`);

  return {
    views: {
      get status() {
        return status.get() as StatusType;
      },
      set status(value: StatusType) {
        status.set(value);
      },
    },
    actions: {
      setStatus(value: StatusType) {
        status.set(value);
      },
    },
  };
};
