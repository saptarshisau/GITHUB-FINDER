# GITHUB-FINDER

A responsive **GitHub Profile Finder** built with **TypeScript, HTML, CSS, and Bootstrap**.  
This application allows users to search for any GitHub username and view their **profile information, statistics, and latest repositories**.

---

## 🚀 Features

### 🔎 Search GitHub Users
- Search any GitHub username instantly.
- Fetches data directly from the **GitHub REST API**.

### 👤 User Profile Information
Displays important user details:
- Profile avatar
- Name and username
- Bio
- Location
- Join date
- Company
- Website / blog
- Twitter handle
- Direct link to GitHub profile

### 📊 GitHub Statistics
Shows key profile statistics:
- Followers
- Following
- Public repositories

### 📦 Latest Repositories
Displays the **6 most recent repositories**, including:
- Repository name
- Description
- Star count ⭐
- Fork count 🍴
- Direct repository link

### ⚡ Interactive UI
- Responsive layout using **Bootstrap**
- Smooth hover effects
- Press **Enter** to search
- Clean modern dark theme

### ❌ Error Handling
If a user is not found, the application displays a clear error message.

---

## 🛠️ Tech Stack

- **TypeScript**
- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **Font Awesome**
- **GitHub REST API**

---

### File Descriptions

**index.html**

Contains the structure of the application including:
- Search bar
- Profile section
- Repository section

**script.ts**

Handles application logic:
- Fetching GitHub user data
- Displaying profile information
- Loading repositories
- Handling errors

**script.js**

Compiled JavaScript generated from TypeScript.

**style.css**

Contains custom styling for the UI.

---

## ⚙️ How It Works

### 1️⃣ Enter a GitHub Username
The user enters a username and clicks **Search**.


### 2️⃣ Fetch User Data

The application calls:
https://api.github.com/users/{username}


### 3️⃣ Display Profile Information

The following information is rendered:
- Avatar
- Bio
- Followers
- Following
- Public repositories
- External profile links

### 4️⃣ Fetch Repositories

Repositories are fetched using:
user.repos_url

---

## 💻 Installation

### Clone the repository
https://github.com/saptarshisau/github-user-finder.git

### Navigate to the project directory
cd github-user-finder

### Compile TypeScript
tsc script.ts

### Run the project

Open `index.html` in your browser.

---

## 🔌 GitHub API Used

### Get User
GET https://api.github.com/users/{username}

### Get Repositories
GET https://api.github.com/users/{username}/repos

Documentation:

https://docs.github.com/en/rest/users/users

---

## 🎨 UI Design

- Dark theme interface
- Bootstrap layout
- Inter font typography
- Repository card hover effects
- Clean modern design

---

## ⚡ Example Users to Try
torvalds

---

## 🔮 Future Improvements

Possible enhancements include:

- Repository sorting by stars
- Pagination for repositories
- Language statistics
- GitHub contribution graph
- Dark / light mode toggle
- Debounced search input

---

## 👨‍💻 Author

**Saptarshi Sau**

---

⭐ If you like this project, consider giving the repository a **star**!
