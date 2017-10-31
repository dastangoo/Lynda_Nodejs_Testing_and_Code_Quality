module.exports = {
  "env": {
    "mocha": true
  },
  "rules": {
    "no-unused-var": [
      "error",
      { "varIgnorePattern": "should|expect" }
    ]
  }
}
