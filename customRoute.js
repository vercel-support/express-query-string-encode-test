// const express = require('express')
// const helmet = require('helmet')

// const app = express()

// add some security-related headers to the response
// app.use(helmet())

function jsonToQueryString(json) {
    return '?' + 
        Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}

module.exports = (req, res) => {
    // res.set('Content-Type', 'text/html')
    // const query = req.query;
    const url = require('url');
    const url_parts = url.parse(req.url, true);
    const query = url_parts.query;

    // console.log(req);
    res.writeHeader(200, {"Content-Type": "text/html"});  
    res.end(`
        <h2>Go to <a href="/${jsonToQueryString(query)}">Test Lambda Entry Point</a></h2>
        <div>
            <h3>Query</h3>
            <pre>${JSON.stringify(query)}</pre>
        </div>
    `)
}
