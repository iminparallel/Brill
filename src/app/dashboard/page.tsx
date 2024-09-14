import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export default async function Page() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  // console.log(user.given_name)
  return (
    <div>
      {user ? (
        <p>
          hi {user.given_name} {user.family_name}{" "}
        </p>
      ) : (
        <p>you are not logged in</p>
      )}
    </div>
  )
}
