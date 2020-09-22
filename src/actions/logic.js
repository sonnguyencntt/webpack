
// logic of form when send data to server
export const logic_Before_Sentdata = (listArray) =>
{
   var lenghtArray = listArray.length;
   var result = true;

   for(var i = 0 ; i < lenghtArray ; i++)
   {
      if( listArray[i] == '' || listArray[i] == null)
      {
        return result = false
      }
   }
   return result
}
