module.exports = (req, res) => {
  if (req.method == "POST") {
    res.json({ code: req.query.code });
  } else {
    res.send("mehtod not post");
  }
  return;
};
