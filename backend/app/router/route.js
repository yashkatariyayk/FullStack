module.exports = (app) => {
    const User = require('../controller/controller');

    // Create a new Note
    app.post('/user', User.create);

    // Retrieve all User
    app.get('/user', User.findAll);

    // Retrieve a single Note with userId
    app.get('/user/:userId', User.findOne);

    // Update a Noteuwith userId
    app.put('/user/:userId', User.update);

    // Delete a Noteuwith userId
    app.delete('/user/:userId', User.delete);
}