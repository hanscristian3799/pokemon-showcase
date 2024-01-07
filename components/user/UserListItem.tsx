"use client";

import React from "react";
import Card from "../ui/Card";
import { useRouter } from "next/navigation";

interface Props {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    city: string;
}

const UserListItem = ({ id, firstName, lastName, maidenName, city }: Props) => {
    const router = useRouter();

    return (
        <Card
            key={id}
            containerStyle="w-full p-4 mb-3 cursor-pointer"
            onClick={() => {
                router.push(`/users/${id}`);
            }}
        >
            <div>
                <p>
                    {firstName} {lastName} {maidenName} - {city}
                </p>
            </div>
        </Card>
    );
};

export default UserListItem;
