let count = 0;

module.exports.viewCount = (req, res, next) => {
  count++;

  next();
};
