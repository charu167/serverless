module.exports = (req, res) => {
    //   res.send(req.query.code)
    
      res.redirect(`https://sync-wave-client.vercel.app/callbackgoogle?code=${req.query.code}`)
      return;
    };
    