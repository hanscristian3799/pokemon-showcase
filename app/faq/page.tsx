import { DB_NAME, FAQ_COLLECTION } from "@/constants";
import { connectToDatabase } from "@/helpers/db";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

// const getAllFaq = async () => {
//     const response = await fetch("http://localhost:3000/api/faq/", {
//         cache: "force-cache",
//     });
//     const faq = response.json();
//     return faq.data;
// };

const getAllFaq = async () => {
    let client;
    client = await connectToDatabase();
    const db = client.db(DB_NAME);
    const data = await db.collection(FAQ_COLLECTION).find({}).toArray();
    return data;
};

const FAQ = async () => {
    const faqs = await getAllFaq();

    if (faqs.length === 0) {
        return <div>Kosong</div>;
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold text-center mb-8">
                FAQ(Frequently Asked Questions)
            </h1>
            <div>
                {faqs.map((faq) => (
                    <ul
                        key={faq._id.toString()}
                        className="bg-main-red p-4 mb-5 rounded-md cursor-pointer transition-all duration-300 active:opacity-80"
                    >
                        <Link
                            href={`/faq/${faq._id}`}
                            className="flex flex-row items-center justify-between"
                        >
                            <p className="text-white font-medium">
                                {faq.question}
                            </p>
                            <FaChevronRight
                                style={{
                                    color: "white",
                                    width: 16,
                                    height: 16,
                                }}
                            />
                        </Link>
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
