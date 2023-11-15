import("./has-unused-locals.js").catch((error) => {
  console.log(error, { error }, typeof error, error instanceof Error);
});
