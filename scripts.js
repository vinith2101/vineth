/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: white;
  }
  
  header {
    background-color: grey;
    color: white;
    padding: 20px;
    text-align: center;
  }
  
  #searchBar {
    padding: 8px;
    margin-top: 10px;
  }
  
  #addRecipeBtn {
    margin-top: 10px;
    padding: 10px;
    background-color: green;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  #addRecipeBtn:hover {
    background-color: yellow;
  }
  
  #recipeList {
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  
  .recipeCard {
    background-color: white;
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 5px;
  }
  
  .recipeCard h3 {
    margin: 0;
  }
  
  button {
    background-color: grey;
    color: white;
    padding: 5px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: white;
  }
  
  /* Modal Styles */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    margin: 15% auto;
    width: 50%;
    border-radius: 10px;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  