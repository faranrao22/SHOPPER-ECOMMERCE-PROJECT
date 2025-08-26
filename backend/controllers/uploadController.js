const uploadImage = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  return res.status(200).json({
    success: true,
    image_url: `${process.env.BACKEND_URL || 'http://localhost:' + process.env.PORT}/images/${req.file.filename}`,
  });
};

module.exports = { uploadImage };
