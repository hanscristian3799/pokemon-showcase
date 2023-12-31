import Card from "@/components/ui/Card";
import { DB_NAME, FAQ_COLLECTION } from "@/constants";
import { connectToDatabase } from "@/helpers/db";
import { FAQItem } from "@/types/faq";
import { ObjectId } from "mongodb";
import React from "react";

const dynamicParams = true;

type Props = {
    params: {
        id: string;
    };
};
// const getFaqDetail = async (id: string) => {
//     const response = await fetch(`http://localhost:3000/api/faq/${id}`, {
//             cache: "force-cache",
//         });
//         const faq = response.json();
//         return faq.data;
// };

const getFaqDetail = async (id: string) => {
    const client = await connectToDatabase();
    const db = client.db(DB_NAME);
    const data = await db.collection(FAQ_COLLECTION).findOne({_id: new ObjectId(id)});
    return data;
};

const FaqDetail = async ({ params: { id } }: Props) => {
    const faq = await getFaqDetail(id);

    return (
        <div className="p-8">
            <Card containerStyle="p-4">
                <div className="mb-4">
                    <p className="font-medium text-main-red">Question</p>
                    <p className="font-semibold text-lg">{faq?.question}</p>
                </div>
                <div>
                    <p className="font-medium text-main-red">Answer</p>
                    <p className="text-lg">{faq?.answer}</p>
                </div>
            </Card>
        </div>
    );
};

export default FaqDetail;
