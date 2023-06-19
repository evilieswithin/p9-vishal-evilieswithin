import mongoose from 'mongoose';

const PeopleSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const People = mongoose.model('people', PeopleSchema);
export default People;
