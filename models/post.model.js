const filename = '../data/posts.json'
let posts = require(filename)
const helper = require('../helper.js')
function getPosts() {}
function getPost(id) {}
function insertPost(newPost) {}
function updatePost(id, newPost) {}
function deletePost(id) {}
module.exports = {
    insertPost,
    getPosts,
    getPost, 
    updatePost,
    deletePost
}