// eslint-disable-next-line import/no-extraneous-dependencies
import { UserProfile, auth } from '@clerk/nextjs';

export default function Page() {
  const { userId } = auth();

  return (
    <div>
      userId:
      { userId }
      <UserProfile />
    </div>
  );
}
