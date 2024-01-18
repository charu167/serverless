module.exports = (req, res) => {
  res.send(req.query.code)
  return;
};
