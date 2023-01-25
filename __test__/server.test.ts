import { appRouter } from "../server";
import express from "express";

test("Greeting test", async () => {
  const caller = appRouter.createCaller({
    req: express.request,
    res: express.response,
  });

  const result = await caller.greeting({ text: "Jest" });

  expect(result).toStrictEqual({ message: "Hello Jest" });
});
