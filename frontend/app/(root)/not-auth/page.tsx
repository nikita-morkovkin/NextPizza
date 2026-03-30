import InfoBlock from "@/shared/components/common/InfoBlock";

export default function NotAuthPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-40">
      <InfoBlock
        title="403"
        text="У вас нет доступа к этой странице"
        imageUrl="/not-auth.png"
      />
    </div>
  );
}
