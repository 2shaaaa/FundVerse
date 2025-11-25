import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStateContext } from '../context'; // Import từ context 
import { DisplayCampaigns } from '../components'; // Import từ components 


const SearchResults = () => {
 const { searchTerm } = useParams();
 const { address, contract, getCampaigns } = useStateContext();
  const [isLoading, setIsLoading] = useState(false);
 const [campaigns, setCampaigns] = useState([]);
 const [filteredCampaigns, setFilteredCampaigns] = useState([]);


 // Fetch dữ liệu campaigns từ smart contract
 const fetchCampaigns = async () => {
   setIsLoading(true);
   try {
     const data = await getCampaigns();
     setCampaigns(data);
   } catch (error) {
     console.log("Error fetching campaigns", error);
   } finally {
     setIsLoading(false);
   }
 }


 // Gọi fetch khi component được mount hoặc address/contract thay đổi
 useEffect(() => {
   if(contract) fetchCampaigns();
 }, [address, contract]);


 // Logic lọc dữ liệu mỗi khi searchTerm hoặc danh sách campaigns thay đổi
 useEffect(() => {
   if (campaigns.length > 0) {
     const term = searchTerm ? searchTerm.toLowerCase() : "";
    
     const filtered = campaigns.filter((campaign) =>
       campaign.title.toLowerCase().includes(term) ||
       campaign.description.toLowerCase().includes(term)
     );
     setFilteredCampaigns(filtered);
   } else {
     setFilteredCampaigns([]);
   }
 }, [searchTerm, campaigns]);


 return (
   <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 w-full">
       <div className="flex justify-start w-full mb-5">
           <h1 className="font-epilogue font-bold text-[24px] text-white text-left">
               Search Results for "{searchTerm}" ({filteredCampaigns.length})
           </h1>
       </div>


       <DisplayCampaigns
           isLoading={isLoading}
           campaigns={filteredCampaigns}
       />
   </div>
 )
}


export default SearchResults