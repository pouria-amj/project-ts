const isLoggoedIn = !!parseInt(localStorage.getItem("login") as string)

export const routes = [
    {
        path:'/start',
        title:'start',
        isShow:!isLoggoedIn
    },
    {
        path:'/register',
        title:'register',
        isShow:!isLoggoedIn
    },
    {
        path:'/login',
        title:'login',
        isShow:!isLoggoedIn
    },
    {
        path:'/',
        title:'home',
        isShow: isLoggoedIn
    },
    {
        path:'/product',
        title:'product',
        isShow: isLoggoedIn
    },
    {
        path:'/cart',
        title:'cart',
        isShow:isLoggoedIn
    },
    {
        path:'/payment',
        title:'payment',
        isShow:isLoggoedIn
    },
    {
        path:'/confirm',
        title:'confirm',
        isShow:isLoggoedIn
    },
    
]