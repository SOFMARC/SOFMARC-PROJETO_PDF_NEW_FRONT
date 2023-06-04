// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Productdata } from "../../shared/data/e-commerce/productdata"


export default async function handler(req, res) {
  const result = await Productdata
  res.json(result)
}