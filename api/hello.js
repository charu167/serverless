module.exports = (req, res) => {
  if (req.method == "POST") {
    // res.status(200).redirect("https://sync-wave-client.vercel.app/");
    res.status(200).send("Code recieved");
  }
};
