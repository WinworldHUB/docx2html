import express, { Request, Response } from "express";

import upload from "../middlewares/upload";
import document2Html from "../controllers/app.controller";
const router = express.Router();

router.use(express.json());

// OUR ROUTES
// router.post("/", (req: Request, res: Response) => {
//   if (!req.file || !req.files) {
//     return res.status(400).json({
//       success: false,
//       message:
//         "Invalid or no file(s) were given expected at-least one .docx, .doc",
//       data: null,
//     });
//   }

//   docx2html.convertToHtml({ buffer: req.file.buffer }).then((html: any) => {
//     console.log(html);
//     res.json({
//       message: "Successfully converted doc to html",
//       success: true,
//       data: html,
//     });
//   });

//   res.json({
//     message: "Unable to convert file from doc to html",
//     success: false,
//     data: null,
//   });
// });

router.post("/", upload.single("file"), document2Html);

export default router;
