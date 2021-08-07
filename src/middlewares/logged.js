module.exports = (req, res, next) => {
    if (res.locals.user) {
      return next();
    } else{
      return res.redirect("/")
    }
  }