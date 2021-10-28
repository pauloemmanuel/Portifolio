export const changePage = (page)=>{
  return{
    type:'changePage',
    payload:{
      page:page
    }
  }
}