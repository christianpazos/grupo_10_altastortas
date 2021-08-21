module.exports = (req, res, next) => {
    if (res.locals.user.admin) {
      return next();
    } else{
      return res.redirect("/")
    }
  }