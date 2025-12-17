interface ReqBody {
    cmd: string
    flag?: string
}

export async function POST(req: Request) {
    const body = (await req.json()) as ReqBody
    let msg: string
    switch (body.cmd) {
        case 'cd':
            msg = 'moving'
            break
        case 'ls':
            msg = 'listing'
            break
        case 'help':
            msg = 'helping'
            break
        default:
            msg = 'unknown command'
    }
    return new Response(JSON.stringify({ msg }))
}
