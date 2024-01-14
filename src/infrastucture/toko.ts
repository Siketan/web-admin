import API from "./base"

export const getTokoTani = () => {
    return API.get("/product-petani-no-auth")
}