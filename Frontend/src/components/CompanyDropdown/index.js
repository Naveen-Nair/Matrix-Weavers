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
        <option style={{ color: 'black' }} value='Reliance Digital'>Reliance Digital</option>
        <option style={{ color: 'black' }} value='Vijay Sales'>Vijay Sales</option>
        <option style={{ color: 'black' }} value='Aditya Vision'>Aditya Vision</option>
        <option style={{ color: 'black' }} value='Poojara'>Poojara</option>
        <option style={{ color: 'black' }} value='Bajaj Electronics'>Bajaj Electronics</option>
      </Select>
    </div>
  );
};

export default CompanyTable;
