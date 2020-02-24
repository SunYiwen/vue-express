let express = require('express')
let router = express.Router()
let Passage = require('../public/javascripts/mongodb/passage')
var hljs = require('highlight.js'); // https://highlightjs.org/

// Actual default values
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});
router.get('/blog',function (req,res,next) {
  let id = req.query.id
  Passage.findOne({
    id: id
  })
    .then(function(passage){
      res.send({
        content:md.render(passage.content),
        title: passage.title
      })
    })
})

module.exports = router;
