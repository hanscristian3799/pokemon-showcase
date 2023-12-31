import { DB_NAME, FAQ_COLLECTION } from "@/constants";
import { connectToDatabase } from "@/helpers/db";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req: Request, {params}: {params: {id: string}}) {
    const id = params.id;
    
    let client;
    try {
        client = await connectToDatabase();
    } catch (error) {
        return NextResponse.json({status: 500, message: 'Failed to connect to database'});
    }

    try {
        const db = client.db(DB_NAME);
        const data = await db.collection(FAQ_COLLECTION).findOne({_id: new ObjectId(id)});
    
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