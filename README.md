See the demo of this project from  here

https://kaiden-a.github.io/Mahallah-Aisyah/

# Mahallah Aisyah — Room Finder (Taaruf Week Helper)

Welcome to Mahallah Aisyah — a simple web application I developed as a committee member for Taaruf Week at CFS IIUM. During orientation I was assigned to help new students find their rooms in the mahallah. This app helps committee members and new students quickly check which room has been assigned to a student using minimal tech and an easy interface.

---

## Problem statement

As a committee member helping new students during Taaruf Week, I needed a fast, reliable way to answer: "Where is my/this student's room?" Doing this manually from paper lists or long spreadsheets is slow and error-prone when dozens or hundreds of students arrive at once. I built this simple web app to quickly lookup room assignments by student name, matric number, or other ID so we could direct students efficiently.

---

## What this project does

- Provides a searchable interface for new student room assignments.
- Lets committee members find a student's room in seconds.
- Can be used from any browser on a phone or laptop — ideal for on-the-ground use during move-in.
- Keeps a single source-of-truth (CSV/JSON file or simple backend) for assignments so everyone uses the same data.

---

## Key features

- Search by name, matric number, or room number.
- Fast lookup and clear display of student name + block/room.
- Works offline if hosted as static HTML with a bundled dataset.
- Easily adjustable dataset format (CSV or JSON).

---

## Demo / Preview

(If you have screenshots or a hosted URL, add them here.)

---

## How to use


 Static site (no server)
1. If the project is a static frontend (index.html present), simply open `index.html` in a browser.
2. Replace or edit the data file (e.g., `data/students.json` or `data/students.csv`) with the latest assignments.
3. Use the search box to find a student by name or matric number.


---

## Data format

The app expects a simple dataset of student-room assignments. Common formats:

- JSON (example):
```json
[
  {  "room": "A-101" },
  {  "room" "A-102" }
]
```

- CSV (example):
```
name,matric,room
Ali bin Ahmad,A12345,A-101
Siti binti Omar,A12346,A-102
```

Adjust your data path in the app configuration if needed (e.g., `data/students.json`).

---

## Deployment suggestions

- For quick usage during Taaruf Week, host the static build on GitHub Pages, Netlify, or any static host.
- If you expect concurrent edits to assignments, keep the dataset in a shared spreadsheet and export it to JSON/CSV before deploying.
- For an internal committee tool, host on a simple VPS or a small Heroku/Render instance if using a backend.

---

## Contributing

- Update the dataset in `data/` with careful validation of matric/room strings.
- Improve the UX to handle fuzzy name matches, typos, and multiple matching records.
- Add authentication or an admin panel if you want only committee members to modify assignments.

If you'd like me to:
- integrate Google Sheets syncing,
- add fuzzy search (typo-tolerance),
- or make a mobile-friendly PWA,
tell me which feature to prioritize and I'll draft the next steps.

---

## Authors & Maintainers

- Developed by: kaiden-A (Mahallah Aisyah Taaruf Week committee)
- Contact: (Add your email or IIUM contact if you want to include it here)

---

## License

This project is provided for the IIUM Taaruf Week committee's internal use. Add a license file (e.g., MIT) if you want to open-source it.

