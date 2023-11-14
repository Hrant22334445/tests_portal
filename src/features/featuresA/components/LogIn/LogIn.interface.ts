import { User } from "firebase/auth"

export interface Item {
    text: string,
}

export interface LogInProps {
    items: Item[],
    handleSignOut: () => void,
    user: User | null
}