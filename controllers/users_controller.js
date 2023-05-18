const UserModel = require('../models/users');


/* Route            /user-register
   Description      Post single user details in users collection
   Access           PUBLIC
   Parameter        NONE
   Methods          POST 
*/
module.exports.registerUser =  async (req, res) => {

    const addNewUser = await UserModel.create(req.body);
    return res.json({
        userAdded: addNewUser,
        message: "User was added!!"
    });
}