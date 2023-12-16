import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const erorr = useRouteError();
  console.log(erorr);

  return (
    <>
      <h1>Oops...</h1>
      {/* <p>Sorry, an unexpected error has occurred.</p> */}
      <p>{isRouteErrorResponse(erorr) ? "Invalid Page" : "Unexpected Error"}</p>
    </>
  );
};

export default ErrorPage;
