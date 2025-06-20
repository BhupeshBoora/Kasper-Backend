import exppress from "express";
import bodyParser from "body-parser";

const app = exppress();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(process.env.APP_PORT, () =>
{
    console.log(`Server is running on Port: ${process.env.APP_PORT}`);
});

app.get("/", (req, res) =>
{
    res.send("index.html");
});

app.get("/check", (req, res) =>
{
    res.send("check.html")
});

app.get("/report", (req, res) =>
{
    res.render("report.ejs");
});

app.post("/check", (req, res) =>
{
    const [DataToBeSent] = [req.body.image, req.body.bio, req.body.followData,  req.body.chat];

    //Call Python API.  
});