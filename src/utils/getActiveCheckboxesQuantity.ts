import { CheckboxState } from "@/src/types.ts";

export const getActiveCheckboxesQuantity = (checkboxesRules: CheckboxState) => {
  return Object.values(checkboxesRules).filter((item: boolean) => item).length;
};
