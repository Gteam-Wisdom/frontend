import React, {useEffect, useState} from "react";

import Select from "../select/Select";

import styles from './CountrySelect.module.css';

interface Country {
    label: string;
    value: string;
}

interface CountrySelectComponentProps {
    onChange: (event: any) => void;
}

const CountrySelect: React.FC<CountrySelectComponentProps> = ({onChange})=> {
    const [countries, setCountries] = useState<Country[]>([]);
    const [selectedCountry, setSelectedCountry] = useState<string>("");

    useEffect(() => {
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.countries);
            });
    }, []);

    const handleChange = (event: any) => {
        setSelectedCountry(event.target.value)
        onChange(event)
    };

    return (
        <Select
            required
            name="country"
            label="Country"
            placeholder="Choose"
            className={styles.select}
            onChange={handleChange}
            value={selectedCountry}
            list={countries}
        />
    );
};

export default CountrySelect;