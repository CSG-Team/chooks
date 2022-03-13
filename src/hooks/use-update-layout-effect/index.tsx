import { useLayoutEffect } from "react";
import { createUpdateEffect } from '../create-update-effect'


const useUpdateLayoutEffect = createUpdateEffect(useLayoutEffect)

export { useUpdateLayoutEffect };