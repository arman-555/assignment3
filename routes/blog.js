const express = require('express');
const router = express.Router();

const blogPosts = [
    {
        id: 1,
        title: 'About Me!',
        content: 'Hi, my name is Matthew. I am 26 years old.',
        publishedDate: '2023-05-07',
    },
    {
        id: 2,
        title: 'My Work!',
        content: 'Im a software engineer, and my job is all about crafting digital magic! I spend my days creating innovative software solutions that tackle intricate problems and make peoples lives easier. Teamwork and keeping up with the ever-evolving tech world are my keys to delivering top-notch, user-friendly software.',
        publishedDate: '2023-05-08',
    },
    {
        id: 3,
        title: 'My hobby',
        content: 'My hobby is diving into the captivating worlds of books, where I can lose myself in the magic of storytelling. I find solace and adventure within the pages, exploring new perspectives and expanding my knowledge. Reading is not just a pastime; its my passport to limitless imagination.',
        publishedDate: '2023-05-11',
    },
];

router.get('/add', (req, res) => {
    res.render('add-blog');
});
router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id, 10); // Convert the ID to an integer.
    const blogPost = blogPosts.find(post => post.id === postId);

    if (blogPost) {
        res.render('blog', { blogPost });
    } else {
        // Handle the case when the blog post with the specified ID is not found.
        res.status(404).send('Blog post not found.');
    }
});
router.get('/', (req, res) => {
    const sortedPosts = blogPosts.sort((a, b) => {
        const dateA = new Date(a.publishedDate);
        const dateB = new Date(b.publishedDate);
        return dateB - dateA;
    });

    res.render('home', { blogPosts: sortedPosts });
});

router.post('/add', (req, res) => {
    const { title, content, publishedDate } = req.body;
    const newPost = {
        id: blogPosts.length + 1,
        title,
        content,
        publishedDate,
    };
    blogPosts.push(newPost);
    res.redirect('/blog');
});
module.exports = router;
