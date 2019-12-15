var express = require('express');
const fetch = require('node-fetch');
var router = express.Router();
var fs = require('fs');
let wordMap;

//Get /ttt/:count
router.route('/:count').get(function (req, res) {

    if(this.wordMap == undefined) {
        fetch('https://terriblytinytales.com/test.txt').then(
            data => data.text()
        ).then( text => {
            let words = text.split(/[\s\n?.();,]+/);
            this.wordMap = new Map();
            for(var i of words) {
                let word = i.toLowerCase();
                if(this.wordMap.has(word)) {
                    this.wordMap.set(word, this.wordMap.get(word)+ 1)
                } else {
                    this.wordMap.set(word, 1)
                }
            }
            this.wordMap[Symbol.iterator] = function* () {
                yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
            }
            res.status(200).json({
                list: [...this.wordMap].slice(0, req.params.count)
            });
        }).catch(error => {
            res.status(500).json({
                message: 'Could not fetch the file from the URL!'
            })
        });
    } else {
        res.status(200).json({
            list: [...this.wordMap].slice(0, req.params.count)
        });
    }

});

module.exports = router;