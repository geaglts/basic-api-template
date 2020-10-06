import App from "./express";

App.app.listen(App.app.get("port"), () => {
    console.log(
        `El servidor esta activo en http://localhost:${App.app.get("port")}${
            App.server.graphqlPath
        }`
    );
});
