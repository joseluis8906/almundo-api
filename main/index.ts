import "module-alias/register";

import express from "express";
import cors from "cors";
import RootRouter from "@app/routers/RootRouter";

const app = express();
app.use(cors());

new RootRouter(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server Listen in http://localhost:${PORT}`);
});