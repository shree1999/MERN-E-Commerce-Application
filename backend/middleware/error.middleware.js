const notFoundError = (req, res, next) => {
  const error = new Error(`Not found ${req.originalUrl}`);
  res.status(404);

  next(error);
};

const errorHandlerFunction = (err, req, res, next) => {
  /* when error is generated and we don't specify
    any status code the  make it 500(server error) */

  const status = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(status);
  res.send({
    success: false,
    message: err.message,
  });
};

export { notFoundError, errorHandlerFunction };
