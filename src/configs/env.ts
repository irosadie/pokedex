function requireEnv(env: unknown) {
  if (typeof window === 'undefined' && !env) {
    throw new Error(
      '[MISSING ENV VARIABLE] - please check your .env.local or .env file!',
    )
  }

  return env as string
}

// make env variables to be "Fail Fast!" on server with requireEnv
const env = {
  apiBaseURL: requireEnv(process.env.NEXT_PUBLIC_BASE_URL),
  imageUrl: requireEnv(process.env.NEXT_PUBLIC_IMAGE_URL),
  imageFormat: requireEnv(process.env.NEXT_PUBLIC_IMAGE_FORMAT),
}

export default env
