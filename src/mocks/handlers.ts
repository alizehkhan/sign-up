import { rest } from "msw";

export const handlers = [
  rest.post("/submit", async (req, res, ctx) => {
    const { email } = await req.json();

    if (email === "existing@splitify.com") {
      return res(
        ctx.delay(2000),
        ctx.status(400),
        ctx.json({
          error: {
            email: "Email already exists.",
          },
        })
      );
    }

    return res(
      ctx.delay(2000),
      ctx.status(200),
      ctx.json({
        msg: "ok",
      })
    );
  }),
];
