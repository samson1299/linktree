import clientPromise from "@/lib/mongodb"
export async function POST(request) {
    const body = await request.json()
    const client = await clientPromise;
    const db = client.db("bitlink")
    const collection = db.collection("links")

//If the handle was already was claimed tou cannot create the Linktree

const doc = await collection.findOne({handle:body.handle})
if(doc){
      return Response.json({sucess:false,error:true,message:'This Linktree already exists',result:null})

}

    const result = await collection.insertOne(body)
    return Response.json({sucess:true,error:false,message:'Your bitLink was genrated!',result:result})

   

 
}