import moogoose from 'mongoose'

const schema = new moogoose.Schema({
    
        "categories": [
          {
            "categoryName": "electronics",
            "description": "Electronic gadgets and devices",
            "subcategories": [
              {
                "subcategoryName": "Smartphones",
                "description": "Mobile phones with advanced features"
              },
              {
                "subcategoryName": "Laptops",
                "description": "Portable computers for work and entertainment"
              },
              {
                "subcategoryName": "Tablets",
                "description": "Handheld computing devices with touchscreens"
              }
              
            ]
          },
          {
            "categoryName": "clothing",
            "description": "Clothing and apparel products",
            "subcategories": [
              {
                "subcategoryName": "Men's Clothing",
                "description": "Men's fashion and apparel"
              },
              {
                "subcategoryName": "Women's Clothing",
                "description": "Women's fashion and apparel"
              },
              {
                "subcategoryName": "Kids' Clothing",
                "description": "Clothing for children and infants"
              }
            
            ]
          },
          {
            "categoryName": "Books",
            "description": "A wide variety of books",
            "subcategories": [
              {
                "subcategoryName": "Fiction",
                "description": "Fictional novels and stories"
              },
              {
                "subcategoryName": "Non-Fiction",
                "description": "Educational and informative books"
              },
              {
                "subcategoryName": "Mystery",
                "description": "Mystery and detective novels"
              }
              
            ]
          }
    
        ]
      }
      
    )

    const product = moogoose.model("product" , schema)

    export default product