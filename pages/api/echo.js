// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log({
    host: req.host,
    body: req.body,
  });
  res.status(200).json(req);
}
