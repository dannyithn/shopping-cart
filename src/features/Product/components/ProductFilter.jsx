import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';

ProductFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

function ProductFilter({filters, onChange}) {
    if(!onChange) return;
    const handleCategoryChange = (newCategoryId) => {
        const newFilters = {
            ...filters,
            "category.id": newCategoryId
        }
        onChange(newFilters)
    }

    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
        </Box>
    );
}

export default ProductFilter;