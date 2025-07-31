import React, { useState, useEffect } from "react";

const CardFilter = () => {
    const [products, setProducts] = useState([]);
    const [filteredItems,setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortOption,setSortOption] = useState("default");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                setProducts(data)
                setFilteredItems(data)
            } catch (error) {
               console.log("Error fetching data:", error)
        }
    }
        fetchData()
    }, [])

    //filtering function
    const filterProducts = (category) => {
       const filtered = category === "all" ? (products) : products.filter((item) => item.category === category);
       setFilteredItems(filtered);
       setSelectedCategory(category);
    }

    //Show all products
    const showAllProducts = () => {
        setFilteredItems(products);
        setSelectedCategory("all");
    }

    //Sorting function
    const sortProducts = (option) => {

        setSortOption(option);

        //logic for sorting
        let sortedItems = [...filteredItems];

        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "low-to-high":
                sortedItems.sort((a, b) => a.discountedPrice - b.discountedPrice);
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.discountedPrice - a.discountedPrice);
                break;
            default:
                break;
        }
        setFilteredItems(sortedItems);
    }

    return ({

    }
)
}

export default CardFilter;