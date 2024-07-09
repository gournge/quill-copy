import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const {
    getUser
  } = getKindeServerSession();

    const user = await getUser();
    // console.log(user.id);
    // console.log(user.email);

    if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

    return (
        <div>
            User <p className="text-blue-500">{user.email}</p> with id {user.id}
        </div>
    );
}
