class productsPage
{
   getAllProducts(){
    return cy.get('.inventory_item_name')
   } 
   getSortButton(){
    return cy.get('select[data-test]')
   }
   verifyElementAreSortedInAZ(){
    return cy.get('.inventory_item_name').then((allItems)=>{
           const itemList = [];
           allItems.each(($element,index,item)=>{
            itemList.push(item)
           })
           expect(itemList).to.eql(itemList.sort())
           })    
   }
   verifyElementAreSortedInZA(){
    return cy.get('.inventory_item_name').then((allProducts)=>{
            const productList = [];
            allProducts.each(($element,index,product)=>{
               productList.push(product)
            })
            expect(productList).to.eql(productList.sort().reverse())
            })
   }
}
export default productsPage