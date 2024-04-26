// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to add a new message
    function addMessage(message) {
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = 
        ` <p>${message}</p>
            <button class="delete-btn">Delete</button>
            <button class="comment-btn">Comment</button>
            <button class="like-btn">Like</button>
            <div class="comments"></div>
            <textarea class="comment-input" placeholder="Write your comment..."></textarea>
            <button class="post-comment-btn">Post</button>`;

        // Append message to message board
        const messageBoard = document.getElementById('message-board');
        messageBoard.appendChild(messageElement);

        // Add event listeners for delete, comment, like buttons
        messageElement.querySelector('.delete-btn').addEventListener('click', function() {
            messageElement.remove();
        });

        // Add event listeners for comment button
        messageElement.querySelector('.comment-btn').addEventListener('click', function() {
            messageElement.querySelector('.comment-input').style.display = 'block';
            messageElement.querySelector('.post-comment-btn').style.display = 'block';
        });

        // Add event listener for post comment button
        messageElement.querySelector('.post-comment-btn').addEventListener('click', function() {
            const commentInput = messageElement.querySelector('.comment-input');
            const commentText = commentInput.value;
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.textContent = commentText;
            messageElement.querySelector('.comments').appendChild(commentDiv);
            commentInput.value = '';
        });

        // Add event listeners for like button
        messageElement.querySelector('.like-btn').addEventListener('click', function() {
            // Implement liking 
        });
    }
 // Add event listener for post message button
 document.getElementById('post-message-btn').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value;
    addMessage(messageText);
    messageInput.value = '';
});
});