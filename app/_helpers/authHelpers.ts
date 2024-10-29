import { GetServerSidePropsContext } from "next";
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "";

const validateJWT = (
  token: string | undefined
): { user?: any; isValid: boolean } => {
  if (!token) {
    return { isValid: false };
  }

  try {
    const user = jwt.verify(token, jwtSecret);
    return { user, isValid: true };
  } catch (error) {
    console.log({ error });
    return { isValid: false };
  }
};

export const ensureAuthenticated = async (
  context: GetServerSidePropsContext
) => {
  const token = context.req.cookies.authToken;
  const { user, isValid } = validateJWT(token);

  if (isValid && user) {
    return { props: { user } };
  } else {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};

export const ensureNotAuthenticated = async (
  context: GetServerSidePropsContext
) => {
  const token = context.req.cookies.authToken;
  const { isValid } = validateJWT(token);

  if (isValid) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  } else {
    return { props: {} };
  }
};
