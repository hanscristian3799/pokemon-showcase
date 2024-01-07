import Card from "@/components/ui/Card";
import UserListItem from "@/components/user/UserListItem";
import { User } from "@/types/user";
import React from "react";

const getUsers = async () => {
    const response = await fetch("https://dummyjson.com/users?limit=20", {
        cache: "force-cache",
    });
    const data = await response.json();
    return data.users;
};

const Users = async () => {
    const users: User[] = await getUsers();

    if (users.length === 0) {
        return <div>No data found</div>;
    }

    return (
        <div className="p-8">
            <h1 className="mb-4 font-semibold text-xl text-center">
                Pokemon Users
            </h1>
            <div>
                {users.map((user) => (
                    <UserListItem
                        key={user.id}
                        id={user.id}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        maidenName={user.maidenName}
                        city={user.address.city}
                    />
                ))}
            </div>
        </div>
    );
};

export default Users;
