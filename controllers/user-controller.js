const { User, thought } = require('../models');

const userController = {
    // get all Users
    getAllUsers(req, res) {
        User.find({})
            .populate({
                path: 'friends',
                options: { select: "-__v -email -thoughts -friends" },
            })
            .lean()
            .populate({
                path: 'thoughts',
                select: "-__v",
            })
            .select('-__v')
            .sort({ _id: -1 })
            .then((dbUserData) => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one User by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.userId })
            .populate({
                path: "thoughts",
                select: "-__v",
            })
            .lean()
            .populate({
                path: "friends",
                options: { select: "-__v -email -thoughts -friends" },
            })
            .select("-__v")
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: "No user found with this id!" });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create a new User
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err));
    },

    // update User by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ id: params.userId }, body, {
            new: true,
            runValidators: true,
        })
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: "No user found with this id!" });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => res.status(400).json(err));
    },

    // delete User
    deleteUser({ params }, res) {
		User.findOneAndDelete({ _id: params.userId })
			.then((dbUserData) => {
				if (!dbUserData) {
					res.status(404).json({ message: "No user found with this id!" });
					return;
				}
				res.json(dbUserData);
			})
			.catch((err) => res.status(400).json(err));
	}, 
    // add a friend to a User
    addFriend({ params, body }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $push: { friends: params.friendId } },
            { new: true, runValidators: true }
        )
            .then((dbUserData) => {
                if (!dbUserData) {
                    res.status(404).json({ message: "No user found with this id!" });
                    return;
                }
                res.json(dbUserData);
            })
            .catch((err) => res.json(err));
    },
    // remove a friend from a User
    removeFriend({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.json(err));
    },
}

module.exports = userController;