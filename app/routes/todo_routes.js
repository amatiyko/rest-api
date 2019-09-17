module.exports = function(app, db) {
  app.post('/todos', (req, res) => {
    console.log('req', req.body);
    res.send('Hello')
  })
};