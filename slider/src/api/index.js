export const fetchData = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=20')
            .then(res => res.json())
        // .then(json => setData(json))
    }catch(error){console.error('Error fetching data:', error);}
    // .catch(error => console.error('Error fetching data:', error));

}