
export default function({store, redirect}) {

    if(!store.state.auth.loggedIn){
        return redirect('/login')
    }

    const user = (store.state.auth.user.me) ? store.state.auth.user.me : store.state.auth.user

    if(user.role !== "admin" ){
        return redirect('/login')
    }
}