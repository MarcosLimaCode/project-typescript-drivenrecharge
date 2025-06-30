import { Request, Response, Router } from "express";
import { validateSchema } from "../middleware/schema.middleware";
import phoneSchema from "../schemas/index.schemas";
import { createPhone } from "../controllers/index.controlers";

const rechargeRouter = Router()


rechargeRouter.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
}
);

rechargeRouter.post("/phones", validateSchema(phoneSchema), createPhone);


export default rechargeRouter;