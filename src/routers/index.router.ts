import { createPhones } from "../controllers/index.controlers";
import { Request, Response, Router } from "express";
import { validateSchema } from "../middleware/schema.middleware";
import phoneSchema from "../schemas/index.schemas";

const rechargeRouter = Router()


rechargeRouter.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
}
);

rechargeRouter.post("/phones", validateSchema(phoneSchema), createPhones);


export default rechargeRouter;