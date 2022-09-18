import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from '@libs/server/withSession';

async function handler (
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){
    if(req.method === "GET") {
        const notes = await client.note.findMany({
            take: 10,
        })
        res.json({
            ok:true,
            notes,
        })
    }
    if(req.method === "POST") {
        const {body: {name, description}, session: {user}} = req;
        const note = await client.note.create({
            data: {
                name,
                description,
                user: {
                    connect: {
                        id: user?.id
                    }
                },
            },
        })
        res.json({
            ok:true,
            note,
        });
    }
}

export default withApiSession(withHandler({
    methods:["GET", "POST"],
    handler,
}));