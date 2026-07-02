import Link from "next/link"
import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("bitlink")
    const collection = db.collection("links")

    //If the handle is already claimed,you cannot create bittree
    const item = await collection.findOne({ handle: handle })

    if (!item) {
        return notFound()
    }

    const item2 = {


    }
    return <div className="flex min-h-screen bg-blue-400 justify-center items-start py-10">
       {item && <div className="photo felx justify-center flex-col items-center"><img src={item.pic} alt="profile image" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <span className="desc w-84 text-center gap-4">{item.desc}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link}> <div className="py-4 bg-blue-100  shadow-lg  px-2 min-w-80 flex justify-center rounded-md my-3 " >
                        {item.linktext}

                    </div></Link>
                })}
            </div>
        </div>}
    </div>
}
