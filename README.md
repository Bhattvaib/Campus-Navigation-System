Campus Navigation System 🗺️

A web-based Campus Navigation System designed to help students, faculty, and visitors easily navigate through the college campus and find the shortest route between different locations.

📌 About the Project

Navigating a large college campus can sometimes be difficult, especially for new students and visitors. This project provides a simple and interactive way to find routes between important locations on the campus.

The system represents the campus as a graph, where buildings and important locations are treated as nodes and roads/paths between them are represented as edges. A shortest-path algorithm is used to determine the most suitable route between the selected locations.

🎯 Objectives

* Provide easy navigation within the college campus.
* Find the shortest route between two campus locations.
* Display campus locations in an interactive interface.
* Reduce the time required to find buildings and facilities.
* Demonstrate the practical application of Data Structures and Algorithms.

✨ Features

* 🗺️ Interactive campus map
* 📍 Multiple campus locations
* 🔎 Source and destination selection
* 🛣️ Shortest-path navigation
* 📏 Route distance calculation
* ⏱️ Estimated walking time
* 💻 Simple and user-friendly interface
* 📱 Responsive web design

🧠 Algorithm Used

Dijkstra’s Algorithm

The project uses Dijkstra’s shortest-path algorithm to find the shortest route between two locations.

The campus is represented as a weighted graph:

* Nodes: Campus buildings and important locations
* Edges: Roads or paths connecting locations
* Weights: Distance between locations

Dijkstra’s algorithm calculates the minimum distance from the selected source to the destination.

Basic Working

User selects source
        ↓
User selects destination
        ↓
Campus represented as a graph
        ↓
Dijkstra's Algorithm
        ↓
Shortest route calculated
        ↓
Route and distance displayed

🏫 Campus Locations

Some of the locations included in the project are:

* Gate Number 1
* Gate Number 2
* CSIT Block Gate
* B.Tech Block
* Chanakya Block
* Santosh Library
* Dress Store
* Happiness Cafe
* Quick Bite Cafe
* HM Block
* Petroleum Block
* Param Lab
* Aryabhata Lab
* Old MCA
* Mechanical Block
* PCB Block

🛠️ Technologies Used

* HTML5 — Website structure
* CSS3 — Styling and responsive design
* JavaScript — Interactivity and navigation logic
* Leaflet.js — Interactive map
* OpenStreetMap — Map data
* Git & GitHub — Version control and project hosting

📂 Project Structure

Campus-Navigation-System/
│
├── css/
│   ├── landing.css
│   └── style.css
│
├── images/
│   └── geu.jpg
│
├── js/
│   └── script.js
│
├── index.html
├── landing.html
├── .gitignore
└── README.md

🚀 How to Run

1. Clone the repository

git clone https://github.com/Bhattvaib/Campus-Navigation-System.git

2. Open the project

Open the project folder in VS Code.

3. Run the project

You can open landing.html directly in a browser, or use the Live Server extension in VS Code.

Using Live Server

1. Install the Live Server extension in VS Code.
2. Right-click landing.html.
3. Select Open with Live Server.
4. The project will open in your browser.

📊 Application Workflow

Start
  ↓
Open Campus Navigation System
  ↓
Select Starting Location
  ↓
Select Destination
  ↓
Calculate Shortest Path
  ↓
Display Route
  ↓
Show Distance & Estimated Time
  ↓
End

🎓 Academic Purpose

This project was developed as a Data Structures and Algorithms / PBL project to demonstrate how graph data structures and shortest-path algorithms can be applied to solve a real-world navigation problem.

🔮 Future Improvements

Possible future improvements include:

* 📍 Real-time GPS-based navigation
* 📱 Mobile application
* 🚶 Turn-by-turn walking directions
* 🏢 Search functionality for campus buildings
* ♿ Accessible routes for differently-abled users
* 🌙 Dark mode
* 🔄 Dynamic campus route updates
* 🧭 Integration with live location services

👨‍💻 Author

Vaibhav Bhatt

GitHub:
https://github.com/Bhattvaib

📄 License

This project is developed for educational and academic purposes.
