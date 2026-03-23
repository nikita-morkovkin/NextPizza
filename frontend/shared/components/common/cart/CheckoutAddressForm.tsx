import WhiteBlock from "../WhiteBlock";
import AddressInput from "./AddressInput";
import CheckoutTextarea from "./CheckoutTextarea";

interface CheckoutAddressFormProps {
  className?: string;
}

const CheckoutAddressForm = ({ className }: CheckoutAddressFormProps) => {
  return (
    <WhiteBlock title="3. Адрес доставки" className={className}>
      <div className="flex-col flex gap-5">
        <AddressInput />

        <CheckoutTextarea placeholder="Комментарий к заказу" name="comment" />
      </div>
    </WhiteBlock>
  );
};

export default CheckoutAddressForm;
