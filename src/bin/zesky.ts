import { text, isCancel, select } from "@clack/prompts"

async function main(){

    const pkgManager = await select({
        message: "What package manager do you use?",
        options: [
            { label: "npm", value: "npm" },
            { label: "yarn", value: "yarn" },
            { label: "pnpm", value: "pnpm" },
        ],
    })

    if(isCancel(pkgManager)){
        console.log("Cancelling")
        return
    }

    console.log(`Using ${pkgManager}`)

    const framework = await select({
        message: "Which framework do you use?",
        options: [
            { label: "React", value: "react" },
            { label: "Vue", value: "vue" },
            { label: "Angular", value: "angular" },
            { label: "Svelte", value: "svelte" },
            { label: "Next", value: "next" },
            {label: "NodeJs + Typescript", value: "node"},
        ],
    })

    const name = await text({
        message: "What is your name?",
        placeholder: "Type your name",
    })

    if(isCancel(name)){
        console.log("Cancelling")
        return
    }

    console.log(`Hello ${name}`)
}


main()