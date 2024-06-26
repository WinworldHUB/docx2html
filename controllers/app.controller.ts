import { Request, RequestHandler, Response } from "express";
import docx2html from "mammoth";

const document2Html: RequestHandler = async (req: Request, res: Response) => {
  const files = req.file as Express.Multer.File;
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "Invalid or no file(s) were given,.pdf, .docx, .doc, .txt",
      urls: [],
    });
  }

  docx2html
    .convertToHtml({ buffer: req.file.buffer })
    .then((html: any) => {
      console.log(html);
      res.json({
        message: "Successfully converted doc to html",
        success: true,
        data: html,
      });
    })
    .catch((error) =>
      res.json({
        message: "Unable to convert file from doc to html",
        success: false,
        data: error,
      })
    );
};

export default document2Html;
