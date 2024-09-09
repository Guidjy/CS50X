//// loops

const blogPosts = [
    {
        title: 'What is JavaScript?',
        author: 'Zach Gollwitzer',
        publishDate: 'Dec 20, 2020',
        content: 'some post content here'
    },
    {
        title: 'How do arrays work?',
        author: 'Zach Gollwitzer',
        publishDate: 'Jan 1, 2021',
        content: 'some post content here'
    },
    {
        title: 'How long does it take to learn coding?',
        author: 'Zach Gollwitzer',
        publishDate: 'Jan 20, 2021',
        content: 'some post content here'
    }
];

// for loops

for (let i = 0; i < blogPosts.length; i++)
{
    const postTitle = blogPosts[i].title;
    const postAuthor = blogPosts[i].author;
    const postDate = blogPosts[i].publishDate;
    const postContent = blogPosts[i].content;
    
    console.log(postTitle);
    console.log(postAuthor);
    console.log(postDate);
    console.log(postContent);
}

