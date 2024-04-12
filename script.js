//Script for like section

  function updateLikeCount() {
    let likeCount = parseInt(localStorage.getItem("likeCount")) || 0;
    document.getElementById("like-count").textContent = likeCount;
  }

  // Event listener for like button click
  document.getElementById("like-btn").addEventListener("click", function() {
    // Increment like count
    let likeCount = parseInt(localStorage.getItem("likeCount")) || 0;
    likeCount++;
    localStorage.setItem("likeCount", likeCount);
    updateLikeCount();
  });

  // Update like count on page load
  window.onload = updateLikeCount;
//HTML for comment section
//script for like section
function updateLikeCount() {
  let likeCount = parseInt(localStorage.getItem("likeCount")) || 0;
  document.getElementById("like-count").textContent = likeCount;
}

// Event listener for like button click
document.getElementById("like-btn").addEventListener("click", function() {
  // Increment like count
  let likeCount = parseInt(localStorage.getItem("likeCount")) || 0;
  likeCount++;
  localStorage.setItem("likeCount", likeCount);
  updateLikeCount();
});

// Update like count on page load
window.onload = updateLikeCount;

//Script to handle comments
  // Function to add comment
  function addComment() {
    let commentInput = document.getElementById("comment-input");
    let comment = commentInput.value.trim();
    if (comment !== "") {
      // Get existing comments from Local Storage
      let comments = JSON.parse(localStorage.getItem("comments")) || [];
      // Add new comment to array
      comments.push(comment);
      // Save updated comments to Local Storage
      localStorage.setItem("comments", JSON.stringify(comments));
      // Clear input field
      commentInput.value = "";
      // Update comment count
      let commentCount = comments.length;
      document.getElementById("show-comments-btn").textContent = commentCount + (commentCount === 1 ? " Comment" : " Comments");
      // Refresh comment list
      displayComments();
    }
  }

  // Function to display comments
  function displayComments() {
    let commentList = document.getElementById("comment-list");
    commentList.innerHTML = ""; // Clear previous comments
    // Get existing comments from Local Storage
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.forEach(function(comment, index) {
      let listItem = document.createElement("li");
      listItem.textContent = comment;
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.style.display = "none"; // Initially hide delete button
      listItem.appendChild(deleteButton);
      commentList.appendChild(listItem);

      // Event listener for showing delete button on right-click
      listItem.addEventListener("contextmenu", function(event) {
        event.preventDefault(); // Prevent default right-click behavior
        deleteButton.style.display = "block"; // Show delete button
        // Event listener to hide delete button when clicking outside of the comment
        document.addEventListener("click", function hideDeleteButton() {
          deleteButton.style.display = "none";
          document.removeEventListener("click", hideDeleteButton); // Remove the event listener
        });
      });
      
      // Event listener for delete button click
      deleteButton.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up to the parent element
        deleteComment(index);
      });
    });
  }

  // Function to delete comment
  function deleteComment(index) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.splice(index, 1); // Remove comment at specified index
    localStorage.setItem("comments", JSON.stringify(comments)); // Update comments in storage
    displayComments(); // Refresh comment list
    let commentCount = comments.length;
    document.getElementById("show-comments-btn").textContent = commentCount + (commentCount === 1 ? " Comment" : " Comments");
  }

  // Event listener for comment button click
  document.getElementById("comment-btn").addEventListener("click", function() {
    addComment();
  });

  // Function to handle adding comment when pressing Enter
  document.getElementById("comment-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addComment();
    }
  });

  // Event listener for showing comments button click
  document.getElementById("show-comments-btn").addEventListener("click", function() {
    // Toggle display of comment list
    let commentList = document.getElementById("comment-list");
    if (commentList.style.display === "none") {
      displayComments();
      commentList.style.display = "block";
    } else {
      commentList.style.display = "none";
    }
  });

  // Display initial comment count
  window.onload = function() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    let commentCount = comments.length;
    document.getElementById("show-comments-btn").textContent = commentCount + (commentCount === 1 ? " Comment" : " Comments");
  };/// Function to delete comment
function deleteComment(index) {
  let password = prompt("Enter password to delete comment:");
  console.log("Password entered:", password); // Debugging
  if (password === "Susan1ngao") {
    console.log("Password correct. Deleting comment..."); // Debugging
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.splice(index, 1);
    localStorage.setItem("comments", JSON.stringify(comments));
    displayComments();
    let commentCount = comments.length;
    document.getElementById("show-comments-btn").textContent = commentCount + (commentCount === 1 ? " Comment" : " Comments");
  } else {
    console.log("Incorrect password. Cannot delete comment."); // Debugging
    alert("Incorrect password. You do not have permission to delete this comment.");
  }
}

