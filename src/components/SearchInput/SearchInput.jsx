import React, { useState } from 'react';

const SearchInput = () => {
    const [placeholder, setPlaceholder] = useState('Введите запрос');
    const [hasText, setHasText] = useState(false);

    const handleFocus = () => {
        setPlaceholder('');
    };

    const handleBlur = () => {
        setPlaceholder('Введите запрос');
    };

    const handleChange = (e) => {
        setHasText(e.target.value !== '');
    };

    return (
        <input
            id="myInput"
            className={`search-form__input ${hasText ? 'has-text' : ''}`}
            type="text"
            name="search"
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
        />
    );
};

export default SearchInput;
