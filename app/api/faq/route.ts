import { DB_NAME, FAQ_COLLECTION } from "@/constants";
import { connectToDatabase } from "@/helpers/db";
import { NextResponse } from "next/server";

export async function GET() {
    let client;
    try {
        client = await connectToDatabase();
    } catch (error) {
        return NextResponse.json({status: 500, message: 'Failed to connect to database'});
    }

    try {
        const db = client.db(DB_NAME);
        const data = await db.collection(FAQ_COLLECTION).find({}).toArray();
    
        const response = {
            status: 200,
            data,
        };
        client.close();
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({status: 500, message: 'Failed to connect to database'});
    }
}