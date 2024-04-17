import React, { forwardRef } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { clsx } from "clsx";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useFormContext } from "react-hook-form";

interface CheckboxProps {
  defaultChecked?: boolean;
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ defaultChecked }, ref) => {
    const { setValue } = useFormContext(); // Obtém a função setValue do react-hook-form

    const handleCheckboxChange = () => {
      setValue("isCompany", !defaultChecked); // Atualiza o valor do campo "isCompany" no formulário
    };
    return (
        
      <div className="flex items-center"> {/* Mudança de <form> para <div> */}
        <CheckboxPrimitive.Root
          defaultChecked={defaultChecked}
          className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
          ref={ref as React.RefObject<HTMLButtonElement>}
          onClick={handleCheckboxChange}
        >
          <CheckboxPrimitive.Indicator className="text-violet11">
            <CheckIcon  />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>

        <LabelPrimitive.Label
          className="ml-3 select-none text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          I am a company
        </LabelPrimitive.Label>
      </div>
    );
  }
);

export { Checkbox };