import User from "../models/UserModel.js"

export const getUsers = async (req, res) => {
   try {
      const users = await User.find()
      res.json(users)
   } catch(err) {
      res.status(500).json({ message: err.message })
   }
}

export const getUserById = async (req, res) => {
   try {
      const user = await User.findById(req.params.id)
      res.status(200).json(user)
   } catch(err) {
      res.status(404).json({ message: err.message })
   }
}

export const saveUser = async (req, res) => {
   const user = new User(req.body)
   try {
      const insertedUser = await user.save()
      res.status(201).json(insertedUser)
   } catch(err) {
      res.status(400).json({ message: err.message })
   }
}

export const updateUser = async (req, res) => {
   try {
      const updateUser = await User.updateOne(
         { _id: req.params.id },
         {$set:req.body}
      )
      res.status(200).json(updateUser)
   } catch(err) {
      res.status(400).json({ message: err.message })
   }
}

export const deleteUser = async (req, res) => {
   try {
      const deletedUser = await User.deleteOne(
         { _id: req.params.id }
      )
      res.status(200).json(deletedUser)
   } catch(err) {
      res.status(400).json({ message: err.message })
   }
}

export const deleteAllUser = async (req, res) => {
   try {
      const deletedAllUser = await User.deleteMany(
         { name: req.params.name }
      )
      res.status(200).json(deletedAllUser)
   } catch(err) {
      res.status(401).json({ message: err.message })
   }
}