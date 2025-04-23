const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Save uploaded files to 'uploads' folder

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit_application', upload.single('resume'), (req, res) => {
    const { name, email, job } = req.body;
    const resume = req.file;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Job: ${job}`);
    console.log(`Resume: ${resume.originalname}`);

    // Save to database or send email logic here

    res.send('Application submitted successfully!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});