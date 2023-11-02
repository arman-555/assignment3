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
router.get('/', (req, res) => {
    const sortedPosts = blogPosts.sort((a, b) => {
        const dateA = new Date(a.publishedDate);
        const dateB = new Date(b.publishedDate);

        return dateB - dateA; // Sort in descending order (most recent first).
    });

    res.render('home', { blogPosts: sortedPosts });
});
module.exports = router;
