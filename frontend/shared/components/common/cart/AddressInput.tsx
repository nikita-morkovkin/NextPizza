"use client";

import { useState } from "react";
import {
  AddressSuggestions,
  DaDataAddress,
  DaDataSuggestion,
} from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { useFormContext } from "react-hook-form";

const AddressInput = () => {
  const { register } = useFormContext();
  const [value, setValue] = useState<DaDataSuggestion<DaDataAddress>>();

  return (
    <AddressSuggestions
      {...register("address")}
      token="API_KEY"
      value={value}
      onChange={setValue}
    />
  );
};

export default AddressInput;
