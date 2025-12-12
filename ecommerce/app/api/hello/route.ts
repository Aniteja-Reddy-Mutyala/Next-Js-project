export async function GET(){
    return new Response('Hello from a next js route handler',{
        status:200,
        statusText:"Done!!!"
    })
} 