import app from "./express";

app.listen(app.get("port"), () => {
    console.log(`API listening on port ${app.get("port")}`);
});
