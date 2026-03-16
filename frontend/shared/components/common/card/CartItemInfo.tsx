interface CartItemInfoProps {
  name: string;
  details: string;
  className?: string;
}

const CartItemInfo = ({ name, details, className }: CartItemInfoProps) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>

      <p className="text-xs text-gray-400">{details}</p>
    </div>
  );
};

export default CartItemInfo;
