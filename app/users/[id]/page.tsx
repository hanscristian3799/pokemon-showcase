import { User } from "@/types/user";
import Image from "next/image";
import React, { use } from "react";
import { FaMars, FaVenus } from "react-icons/fa6/";

export const dynamicParams = true;

export async function generateStaticParams() {
    return [{id: '1'}, {id: '2'}];
}
 
type Props = {
    params: {
        id: string;
    };
};

const getUser = async (id: string) => {
    const response = await fetch(`https://dummyjson.com/user/${id}`, {
        cache: "force-cache",
    });
    const data = await response.json();
    return data;
};

const UserDetail = async ({ params: { id } }: Props) => {
    const user: User = await getUser(id);

    return (
        <div className="p-8">
            <div className="flex flex-col items-center mb-4">
                <Image
                    src={user.image}
                    width={150}
                    height={150}
                    alt={user.firstName || "user image"}
                />
                <div className="flex flex-row items-center gap-2 mt-4">
                    <p className="text-xl font-semibold">{`${user.firstName} ${user.lastName} ${user.maidenName}`}</p>
                    <>
                        {user.gender === "male" ? <FaMars style={{width: 18, height: 18, color: 'skyblue'}} /> : <FaVenus style={{width: 18, height: 18, color: 'pink'}} />}
                    </>
                </div>
                <p className="text-lg">
                    {user.address.address}, {user.address.state},{" "}
                    {user.address.city}, {user.address.postalCode}{" "}
                </p>
            </div>
            <div className="flex flex-row items-center justify-between">
                <p className="text-xl">Birth Date:</p>
                <p className="text-xl">{user.birthDate}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
                <p className="text-xl">Age:</p>
                <p className="text-xl">{user.age}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
                <p className="text-xl">Email:</p>
                <p className="text-xl">{user.email}</p>
            </div>
            <div className="flex flex-row items-center justify-between">
                <p className="text-xl">Phone:</p>
                <p className="text-xl">{user.phone}</p>
            </div>
        </div>
    );
};

export default UserDetail;
