
import useEffect from 'react';
import useState from 'react';



const useRestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=31627&catalog_qa=undefined&query=Biryani&submitAction=ENTER');
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;

}

export default useRestaurantMenu;