//     Redirect
//     Navigat
// ...............................................................................................
import { redirect } from 'next/navigation'   //we can redirect any pange from inside this page
export default function Redirect() {
    // redirect("/users")
    redirect("/")
    // redirect("/loading")
    return (
        <div>
            <h2>Hello this page create for redirection</h2>
        </div>
    )
}


// ham ise dusre method se bhi ek page se dusre page me redirect kara sakte hai next.config.mjs file ke help se like..

// redirects: async () => {
//     return [
//         {
//             source: '/users',
//             destination: '/',
//             permanent: false
//         },
// {
//     source: '/loading',
//         destination: '/redirect',
//             permanent: false
// }
//     ]
// }


