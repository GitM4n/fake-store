

const categories = [
        "beauty",
        "fragrances",
        "furniture",
        "groceries",
        "home-decoration",
        "kitchen-accessories",
        "laptops",
        "mens-shirts",
        "mens-shoes",
        "mens-watches",
        "mobile-accessories",
        "motorcycle",
        "skin-care",
        "smartphones",
        "sports-accessories",
        "sunglasses",
        "tablets",
        "tops",
        "vehicle",
        "womens-bags",
        "womens-dresses",
        "womens-jewellery",
        "womens-shoes",
        "womens-watches"
      ] as const



type Category = typeof categories[number]




export interface IMeta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  }
  
  export interface IReview {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }
  
  export interface IDimensions {
    width: number;
    height: number;
    depth: number;
  }


export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: IDimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReview[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMeta;
    thumbnail: string;
    images: string[];
  }



export const  productsApi = () => {
    async function getProductsForHome():Promise<IProduct[] | null> {
        try {
          
            const res = await fetch(`https://dummyjson.com/products?skip=80&limit=20`)
            const data = await res.json()
            console.log(data.products)
            return data.products
         
            
           } catch (error) {
             throw new Error(error as string)
           }
    }
    async function getSingleProduct(id: string):Promise<IProduct | null> {
        try {
            const res = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await res.json()

            return data
        } catch (error) {
            throw new Error(error as string)
        }
    }

    async function getProductsByCategory(category: Category):Promise<IProduct[] | null> {
        try {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`)
            const data = await res.json()

            return data.products
        } catch (error) {
            throw new Error(error as string)
        }
    }


  


    return {getProductsForHome, getSingleProduct, getProductsByCategory}
}