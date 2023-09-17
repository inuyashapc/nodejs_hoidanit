const getHomepage = (req, res) => {
  //process data
  //call model
  res.send("Hello World!");
};

const getABC = (req, res) => {
  res.send("Check ABC");
};

const getHoidanIt = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  getHoidanIt,
};
