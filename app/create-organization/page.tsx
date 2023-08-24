'use client'

import { CreateOrganization, useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreateOrganizationPage() {
    const { orgId } = useAuth();
    const router = useRouter()

    useEffect(() => {
        if (orgId) router.push("/captiveportal")
    }, [])

    return <CreateOrganization afterCreateOrganizationUrl="/captiveportal" />;
}