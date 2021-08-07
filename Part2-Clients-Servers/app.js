const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { result } = require('lodash');

const { render } = require('ejs');
const ObjectID = require('mongodb').ObjectID;
const blogRoutes = require('./routes/blogRoutes');

// express app
const app = express();

// connect to MongoDB
const dbURI = 'mongodb+srv://John:Net.Ninja1@cluster0.kdfr2.mongodb.net/NodeJSNinjaCrashCourse?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log('error'));

// register view engine
app.set('view engine', 'ejs');

// middelware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
app.use(morgan('dev'));

/* // mongoose & mongo sandbox routes
app.get('/add-blog', (req, res) =>
{
    const blog = new Blog
    ({
            title: 'new blog',
            snippet: 'about new blog',
            body: 'more about new blog'
    });

    blog.save()
        .then((result) =>
        {
            res.send(result)
        })
        .catch((err) =>
        {
            console.log(err)
        });

});

app.get('/all-blogs', (req, res) =>
{
    Blog.find()
        .then((result) =>
        {
            res.send(result);
        })
        .catch((err) =>
        {
            console.log(err);
        });
});

app.get('/single-blog', (req, res) =>
{
    Blog.findByID()
        .then((result) =>
        {
            res.send(result);
        })
        .catch((err) =>
        {
            console.log(err);
        });
});*/

// routes
app.get('/', (req, res) =>
{
    res.redirect('/blogs');
});

app.get('/about', (req, res) =>
{
    res.render('about', { title: 'About'});
    //res.sendFile('./views/about.html', { root: __dirname });
    //res.send('<p>about page<p>');
});

// blog routes
app.use(blogRoutes);

// 404 page
app.use((req, res) =>
{
    res.status(404).render('404', { title: 'Error 404'});
    //res.status(404).sendFile('./views/404.html', { root: __dirname });
});
