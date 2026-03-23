import WhiteBlock from "../WhiteBlock";
import CheckoutInput from "./CheckoutInput";

interface CheckoutPersonalFormProps {
  className?: string;
}

const CheckoutPersonalForm = ({ className }: CheckoutPersonalFormProps) => {
  return (
    <WhiteBlock title="2. Персональные данные" className={className}>
      <div className="grid grid-cols-2 gap-5">
        <CheckoutInput name="firstName" placeholder="Имя" />
        <CheckoutInput name="lastName" placeholder="Фамилия" />
        <CheckoutInput name="email" type={"email"} placeholder="Email" />
        <CheckoutInput name="phone" type={"tel"} placeholder="Телефон" />
      </div>
    </WhiteBlock>
  );
};

export default CheckoutPersonalForm;
