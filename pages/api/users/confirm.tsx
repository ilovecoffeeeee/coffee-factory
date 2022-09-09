import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from '@libs/server/withSession';

async function handler (
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){
    console.log(req.session)
    const { password } = req.body;
    const exists = await client.password.findUnique({
        where: {
            payload: password,
        },
    });
    if(!exists) return res.status(404).end();
    req.session.user = {
        id: exists.userId
    }
    await req.session.save();
    res.json({ok:true});
}

export default withApiSession(withHandler({
    method:"POST",
    handler,
    isPrivate: false,
}));