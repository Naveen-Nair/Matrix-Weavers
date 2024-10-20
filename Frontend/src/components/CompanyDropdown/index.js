import React from 'react';
import { Select } from '@chakra-ui/react';

const CompanyTable = ({ setSelectedCompany }) => {
  // Function to handle company selection
  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value);
  };

  return (
    <div>
      <label style={{ color: 'white' }}>Select Company</label>
      <Select
        placeholder='Select Company'
        onChange={handleCompanyChange}
        mb={4} // Margin-bottom for spacing
        bg='gray.800' // Dark gray background
        color='white' // White text
        borderColor='gray.600' // Border color
        focusBorderColor='teal.400' // Border color when focused
        _hover={{ bg: 'gray.700' }} // Slightly lighter gray on hover
      >
        <option style={{ color: 'black' }} value='reliance'>Reliance Digital</option>
        <option style={{ color: 'black' }} value='vijaySales'>Vijay Sales</option>
        <option style={{ color: 'black' }} value='adityaVision'>Aditya Vision</option>
        <option style={{ color: 'black' }} value='poojara'>Poojara</option>
        <option style={{ color: 'black' }} value='bajaj'>Bajaj Electronics</option>
      </Select>
    </div>
  );
};

export default CompanyTable;
