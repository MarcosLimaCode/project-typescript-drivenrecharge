import { Request, Response, Router } from "express";
import { validateSchema } from "../middleware/schema.middleware";
import { phoneSchema, rechargeSchema } from "../schemas/index.schemas";
import { createPhone, createRecharge, getPhone, getRecharches, getSummary } from "../controllers/index.controlers";

const rechargeRouter = Router()


rechargeRouter.get("/health", (req: Request, res: Response) => {
    res.sendStatus(200);
}
);

rechargeRouter.post("/phones", validateSchema(phoneSchema), createPhone);
rechargeRouter.post("/recharges", validateSchema(rechargeSchema), createRecharge);
rechargeRouter.get("/phones/:document", getPhone);
rechargeRouter.get("/recharges/:number", getRecharches);
rechargeRouter.get("/summary/:document", getSummary);


export default rechargeRouter;