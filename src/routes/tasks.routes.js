import { Router } from "express";
import { PrismaClient } from "@prisma/client";

function taskRoute(app) {
    const router = Router();
    const prisma = new PrismaClient();
    app.use("/tasks", router);

    router.get("/all", async (req, res) => {
        try {
            const tasks = await prisma.tasks.findMany({
                orderBy: { id: "asc" },
                where: { deleted: false },
            });
            res.json(tasks);
        } catch (error) {
            console.log(error);
            res.json({ error: "Sorry, but we can't get the tasks" });
        }
    });

    router.get("/one/:taskId", async (req, res) => {
        const { taskId } = req.params;
        try {
            const task = await prisma.tasks.findFirst({
                orderBy: { id: "asc" },
                where: { deleted: false, id: parseInt(taskId, 10) },
            });
            if (task) return res.json(task);
            res.status(404).json({ message: "Not Found" });
        } catch (error) {
            console.log(error);
            res.json({ error: "Sorry, but we can't get the tasks" });
        }
    });

    router.post("/", async (req, res) => {
        const { body } = req;
        delete body.deleted;
        try {
            const newTask = await prisma.tasks.create({ data: body });
            res.status(201).json({
                message: "Task successfully created",
                newTask,
            });
        } catch (error) {
            res.json({ error: "Sorry, but we can't create the task" });
            console.log(error);
        }
    });

    router.put("/:taskId", async (req, res) => {
        const { body } = req;
        const { taskId } = req.params;
        delete body.deleted;
        try {
            const updatedTask = await prisma.tasks.update({
                where: { id: parseInt(taskId, 10) },
                data: body,
            });
            res.status(201).json({
                message: "Task successfully updated",
                updatedTask,
            });
        } catch (error) {
            res.json({ error: "Sorry, but we can't update the task" });
            console.log(error);
        }
    });

    router.delete("/:taskId", async (req, res) => {
        const { taskId } = req.params;
        try {
            await prisma.tasks.update({
                where: { id: parseInt(taskId, 10) },
                data: { deleted: true },
            });
            res.status(201).json({
                message: "Task successfully deleted",
            });
        } catch (error) {
            res.json({ error: "Sorry, but we can't update the task" });
            console.log(error);
        }
    });

    return router;
}

export default taskRoute;
