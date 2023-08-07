// eslint-disable-next-line import/no-extraneous-dependencies
import { UserProfile, auth } from '@clerk/nextjs';
import OrganizationList from '../../../components/organizations';

export default function Page() {
  const { userId } = auth();

  return (
    <div>
      userId:
      { userId }
      Organizations you belong to:
      <OrganizationList />
      <UserProfile />
    </div>
  );
}
