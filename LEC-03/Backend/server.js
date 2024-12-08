import express from "express";
const app = express();


app.get("/",(req,res)=>{
    res.send("server is created")
});

//get a list of jokes
app.get("/api/jokes",(req,res)=>{
    const jokes = [
        {
          id: 1,
          title: "Why don’t skeletons fight each other?",
          content: "Because they don’t have the guts."
        },
        {
          id: 2,
          title: "Why don’t eggs tell jokes?",
          content: "They’d crack each other up."
        },
        {
          id: 3,
          title: "Why did the scarecrow win an award?",
          content: "Because he was outstanding in his field!"
        },
        {
          id: 4,
          title: "What do you call cheese that isn’t yours?",
          content: "Nacho cheese!"
        },
        {
          id: 5,
          title: "Why couldn’t the bicycle stand up by itself?",
          content: "It was two tired."
        }
      ];
    res.json(jokes)
})
const port  = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log(`Sever at http://localhost:${port}`);

})