const User = require('../models/User');

/**
 * @desc    Enroll a new user
 * @route   POST /api/users
 * @access  Public
 */
exports.enrollUser = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;
    
    // Check if user already exists by email
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    
    user = new User({
      name,
      email,
      role,
      password, // Note: In production, make sure to hash the password before storing it
    });

    await user.save();
    res.status(201).json({ msg: 'User registered successfully', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

/**
 * @desc    Delete a user
 * @route   DELETE /api/users/:id
 * @access  Private/Admin
 */
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    await user.remove();
    res.status(200).json({ msg: 'User deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


/**
 * @desc    Update user attributes
 * @route   PUT /api/users/:id
 * @access  Private/Admin
 */
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    let user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user = await User.findByIdAndUpdate(id, { $set: updateData }, { new: true });
    res.status(200).json({ msg: 'User updated successfully', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};


/**
 * @desc    Get user information
 * @route   GET /api/users/:id
 * @access  Private/Admin
 */
exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

