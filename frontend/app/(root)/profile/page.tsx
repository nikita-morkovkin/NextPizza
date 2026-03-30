import ProfileForm from "@/shared/components/common/forms/ProfileForm";
import { API } from "@/shared/services/api-client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session) {
    return redirect("/not-auth");
  }

  const user = await API.auth.getMe(session.user?.email as string);

  if (!user) {
    return redirect("/not-auth");
  }

  return <ProfileForm user={user} />;
}
