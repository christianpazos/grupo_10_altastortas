module.exports = (req, res, next) => {
    if (res.locals.user.esAdmin) {
      return next();
    } else{
      return res.redirect("/")
    }
  }