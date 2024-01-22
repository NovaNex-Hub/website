import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ProfilePage } from "@/components/ProfilePage";

export default function Profile() {
  return (
    <MaxWidthWrapper>
      <div className="font-semibold m-6 text-2xl">Your Profile</div>
      <ProfilePage />
    </MaxWidthWrapper>
  );
}
