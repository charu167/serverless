module.exports = (req, res) => {
//   res.send(req.query.code)

  res.redirect(`https://sync-wave-client.vercel.app/?code=${req.query.code}`)
  return;
};
