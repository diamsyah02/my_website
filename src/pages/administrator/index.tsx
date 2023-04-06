import { auth } from "@/helpers/fetching";
import { useRouter } from "next/router";
import { NextRequest } from "next/server";

export const getServerSideProps = async ({ req } : {req: NextRequest}) => {
    const cookie = req.cookies.async_await
    if(cookie != undefined) {
        return {
            redirect: {
                permanent: true,
                destination: `/administrator/home`,
            },
        };
    }
    return {
        props: {},
    };
}

const Login = () => {
    const router = useRouter();
    async function onLogin(e: any) {
        e.preventDefault()
        const body = {
            username: e.target.username.value,
            password: e.target.password.value,
        };
        let res = await auth('login', body);
        if (res.statusCode == 200 || res.statusCode == 201) router.replace('/administrator/home');
        else alert(res.message);
    }
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="min-w-fit flex-col border bg-white px-6 py-14 shadow-md rounded-[4px] ">
                    <div className="mb-8 px-28 flex justify-center">
                        <img className="w-40 rounded" src="/icon.png" alt="" />
                    </div>
                    <form onSubmit={onLogin}>
                        <div className="flex flex-col text-sm rounded-md">
                            <input name="username" id="username" className="mb-5 rounded-[4px] border p-3 hover:outline-none focus:outline-none hover:border-yellow-500 " type="text" placeholder="Username" required />
                            <input name="password" id="password" className="border rounded-[4px] p-3 hover:outline-none focus:outline-none hover:border-yellow-500" type="password" placeholder="Password" required />
                        </div>
                        <button className="mt-5 w-full border p-2 bg-gradient-to-r from-gray-800 bg-gray-500 text-white rounded-[4px] hover:bg-slate-400 scale-105 duration-300" type="submit">Sign in</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login