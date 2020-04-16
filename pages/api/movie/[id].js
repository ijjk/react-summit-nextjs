export default (req, res) => {
  res.send(`movie ${req.query.id}`)
}
