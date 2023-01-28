import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: 'String', required: true },
    email: { type: 'String', required: true, unique: true },
    password: { type: 'String', required: true },
    lodgeName: { type: 'String', required: true },
    isAdmin: { type: 'Boolean', required: true, default: false },
    firstName: { type: 'String', required: true },
    lastName: { type: 'String', required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
