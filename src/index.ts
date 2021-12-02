import { useDevDemo, IOurInfo } from './hooks/use-dev-demo';
import { useMount, useMountCallbackFun } from './hooks/use-mount';
import { useUnmount, useUnmountCallbackFun } from './hooks/use-unmount';
import { useIsUnmounted } from './hooks/use-is-unmounted';
import { useSetState, UseSetStateHook } from './hooks/use-set-state';
import { useForceUpdate } from './hooks/use-force-update';

export {
  // hooks
  useDevDemo,
  useMount,
  useUnmount,
  useIsUnmounted,
  useSetState,
  useForceUpdate,
  // necessary types
  IOurInfo,
  useMountCallbackFun,
  useUnmountCallbackFun,
  UseSetStateHook,
}
