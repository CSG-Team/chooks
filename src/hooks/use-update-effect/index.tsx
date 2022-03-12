import { useEffect } from "react";
import { createUpdateEffect } from '../create-update-effect'


const useUpdateEffect = createUpdateEffect(useEffect)

export { useUpdateEffect };