var router = require('express').Router();
const usersDAL = require('../../services/m.users.dal') // MongoDB DAL for users

// api/users

router.get('/', async (req, res) => {
    if(DEBUG) console.log ('Route: /api/users/ GET ' + req.url);
    //res.send('REQUEST: /api/users/ GET ' + req.url);
    try {
        // get data from the data storage
        let theUsers = await usersDAL.getUsers(); 
        // send the fetched data to the internet as a JSON structure
        res.json(theUsers);
    } catch {
        // log this error to an event log file.
        // at this point it is a low in the fullstack server error
        res.statusCode = 503;
        // also send a message back to you API consumer
        res.json({message: "Service Unavailable", status: 503});
    }
});

// api/users/:id = GET a single user
router.get('/:id', async (req, res) =>{
    if (DEBUG) console.log ('Route: /api/users/:id GET ' + req.url);
    res.send('REQUEST: /api/users/:id GET ' + req.url);
    
});

module.exports = router;