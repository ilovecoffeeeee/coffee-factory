import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";


async function handler (
    req:NextApiRequest, res:NextApiResponse
){
    const { password } = req.body;
    console.log(password)
    res.status(200).end();
}

export default withHandler("POST", handler)