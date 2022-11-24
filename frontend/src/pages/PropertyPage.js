import { useEffect,useState } from "react"
import PropertyCard from "../components/PropertyCard.js"
import PropertyForm from "../components/PropertyForm"


const PropertPage =()=>{
   const [property,setProperty] =useState(null)
  
   useEffect(()=> {
      
         const fetchProperty=async()=>{
          
         const propertyDetails   =await fetch('/property/')
         const json = await propertyDetails.json()
         if(propertyDetails.ok){
           setProperty([...json])
         }
         }
        
         fetchProperty()
        
      },)
return(
     <div className="Property"  data-test-id="CardContainer">
      <div className="PropertyDetails">
      {property&&property.map((properties)=>(
            
            <PropertyCard key={properties._id} property= {properties}/>
           
      ))
      }
      </div>
      <PropertyForm/>
     </div>
)
}
export default PropertPage