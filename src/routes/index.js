const locketRouter = require("../routes/locket.route.js");

module.exports = (app) => {
    app.get("/", (req, res) => {
        res.send("Server is running");
    });
    app.use("/locket", locketRouter);
};
