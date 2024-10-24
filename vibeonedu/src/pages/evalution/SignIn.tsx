const SignIn = () => {


    return(
        <div className="flex justify-center items-center h-screen">
                <img src="/images/filip/logo.svg" alt="" />
                <div>
                    <p>Учи денец, добивај утре!</p>
                    <p>Продолжи да вајбаш!</p>
                </div>
                <form action="">
                    <input type="text" placeholder="Маил Адреса" />
                    <input type="text" placeholder="Лозинка" />
                    <input type="submit" value="Најави се" />
                </form>
        </div>
    )
}

export default SignIn