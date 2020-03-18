const express = require('express');

function createRouter(db) {
    const router = express.Router();

    router.post('/event/post/:firstname/:lastname/:email', (req, res, next) => {
        console.log("post request activated")
        db.query(
            'INSERT INTO user (firstname, lastname, email) VALUES (?,?,?)',
            [req.params.firstname, req.params.lastname, req.params.email],
            (error) => {
                if (error) {
                    console.error(error);
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });

    router.get

    router.delete('/event/delete/:firstname/:email', function (req, res, next) {
        db.query(
            'DELETE FROM user WHERE firstname=? AND email=?',
            [req.params.firstname, req.params.email],
            (error) => {
                if (error) {
                    res.status(500).json({ status: 'error' });
                } else {
                    res.status(200).json({ status: 'ok' });
                }
            }
        );
    });
    
    router.get
    return router;

}

module.exports = createRouter;