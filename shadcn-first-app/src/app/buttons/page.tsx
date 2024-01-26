import { Button } from "@/components/ui/button"

function buttons(){
    return(
        <>

<main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="flex flex-col items-center justify-between">
    <h1 className="bg-red-900 text-white rounded p-2">Hey This is button page</h1>
        <button className="m-2">Basic Button</button>
        <Button variant='default'>Shadcn Button</Button>
    </div>

    </main>
        
        </>
    )
}

export default buttons