// components.ts

import { NavBar } from "./blocks/dashboard-nav/nav-bar"
import { Footer } from "./blocks/footer"
import { Header } from "./blocks/header"
import PlaceholderComponent from "./utils/placeholder"

export const getPublicComponents = {
   // Block component mapping
   "block.public-header": { component: Header },
   "block.footer": { component: Footer }
   // Add other components as needed...
}
export const getPrivateComponents = {
   "block.private-header": { component: NavBar }
   // Add other components as needed...
}

export { Header, Footer, NavBar, PlaceholderComponent }
