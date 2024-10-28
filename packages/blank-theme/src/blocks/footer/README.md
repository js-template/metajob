# Footer Component

The **Footer** component displays a grid of categories with icons and titles, allowing users to navigate to specific
category pages.

## Props

-  `data`: An object containing:
   -  `FooterOne`: The object having data like `title`, `description`, `location`, `phone`, `email`
   -  `FooterTwo`: The text description under the title.
      -  `title`: The title of the menu option.
      -  `FooterMenu`: The menu data for menu item having parameters like `id`, `label`, `link`, `target`
   -  `FooterThree`: An array of category objects, each with:
      -  `title`: The title of the menu option.
      -  `FooterMenu`: The menu data for menu item having parameters like `id`, `label`, `link`, `target`
   -  `FooterFour`: An array of category objects, each with:
      -  `title`: The title of the menu option.
      -  `FooterMenu`: The menu data for menu item having parameters like `id`, `label`, `link`, `target`
   -  `FooterBottom`: An object having `brand_name` and array of `social_link`:

## Usage

1. Import the `Footer` component.
2. Pass a `data` object with the appropriate structure.

### Example

```tsx
import Footer from "@/ui/block"

const data = {
    FooterOne: {
      id: 4,
      title: "About Company",
      description: "Updated description for the company",
      location: null,
      phone: {
         id: 8,
         title: "1-202-555-0107",
         icon: "tabler:phone"
      },
      email: {
         id: 9,
         title: "contact@newcompany.com",
         icon: "tabler:mail"
      }
   },
   FooterTwo: {
      id: 11,
      title: "For Candidates",
      FooterMenu: [
         {
            id: 122,
            label: "Browse jobs",
            link: "#",
            type: null,
            target: "_self",
            icon: "bx:smile",
            disabled: false
         }
         ..
      ]
   },
    FooterBottom: {
      id: 2,
      brand_name: null,
      social_link: [
         {
            id: 39,
            label: "facebook",
            link: "https://www.facebook.com/",
            type: null,
            target: "_blank",
            icon: "jam:facebook-square",
            disabled: null
         },
      ]
    }
    ...
}

<Footer data={data} />
```
