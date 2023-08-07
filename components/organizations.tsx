'use client';

import { useOrganizationList, useOrganization } from '@clerk/nextjs';

export default function Organizations() {
  const { organizationList } = useOrganizationList();
  const orgDetails = useOrganization();

  if (!organizationList) {
    return null;
  }

  return (
    <div>
      <div>
        <h1>
          Your organization details:
          id = { orgDetails.organization?.id },
          name = { orgDetails.organization?.name },
          membership name = { orgDetails.membership?.organization.name },
          membership list = { orgDetails.membership?.role } { orgDetails.membershipList?.join(', ') }
        </h1>
        <h2>Your organizations</h2>
        <ul>
          {organizationList.map((org) => (
            <li key={org.organization.id}>
              {org.organization.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
