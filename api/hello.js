module.exports = (req, res) => {
  res.json({ code: req.query.code });
  return
};
