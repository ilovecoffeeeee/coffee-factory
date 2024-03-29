import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";


async function handler (
    req:NextApiRequest, res:NextApiResponse<ResponseType>
){
    const { phone, email } = req.body;
    const payload = phone ? { phone } : {email}
    let user;
    user = await client.user.findUnique({
        where : {
            ...payload,
        },
    })
    console.log(user)
    return res.json({
        ok:true,
    });
}

export default withHandler({
    methods:["POST"],
    handler,
    isPrivate: false,
})