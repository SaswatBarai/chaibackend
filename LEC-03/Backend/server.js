import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the chicken cross the road?",
      content: "To get to the other side!",
    },
    {
      id: 2,
      title: "Why don’t skeletons fight each other?",
      content: "They don’t have the guts.",
    },
    {
      id: 3,
      title: "What do you call fake spaghetti?",
      content: "An impasta!",
    },
    {
      id: 4,
      title: "Why can’t your nose be 12 inches long?",
      content: "Because then it would be a foot!",
    },
    {
      id: 5,
      title: "What do you call cheese that isn't yours?",
      content: "Nacho cheese.",
    },
  ];

  res.json(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});




