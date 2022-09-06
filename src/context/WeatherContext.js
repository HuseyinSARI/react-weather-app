import { createContext, useContext, useEffect, useState } from 'react';
import axios from "axios";

const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {

    const [datas, setDatas] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [activeCity, setActiveCity] = useState("Trabzon");

    // const dataURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${activeCity}/next7days?unitGroup=metric&include=days&key=96S3MGWTXN3LHUBHM7R7W8FDV&contentType=json`;
     const dataURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${activeCity}/next7days?unitGroup=metric&include=days&key=LJGJTT7GVYHJVJLVACPMDXW8R&contentType=json`;

    const cities = [
        "Adana",
        "Adıyaman",
        "Afyon",
        "Ağrı",
        "Amasya",
        "Ankara",
        "Antalya",
        "Artvin",
        "Aydın",
        "Balıkesir",
        "Bilecik",
        "Bingöl",
        "Bitlis",
        "Bolu",
        "Burdur",
        "Bursa",
        "Çanakkale",
        "Çankırı",
        "Çorum",
        "Denizli",
        "Diyarbakır",
        "Edirne",
        "Elazığ",
        "Erzincan",
        "Erzurum",
        "Eskişehir",
        "Gaziantep",
        "Giresun",
        "Gümüşhane",
        "Hakkari",
        "Hatay",
        "Isparta",
        "Mersin",
        "İstanbul",
        "İzmir",
        "Kars",
        "Kastamonu",
        "Kayseri",
        "Kırklareli",
        "Kırşehir",
        "Kocaeli",
        "Konya",
        "Kütahya",
        "Malatya",
        "Manisa",
        "Kahramanmaraş",
        "Mardin",
        "Muğla",
        "Muş",
        "Nevşehir",
        "Niğde",
        "Ordu",
        "Rize",
        "Sakarya",
        "Samsun",
        "Siirt",
        "Sinop",
        "Sivas",
        "Tekirdağ",
        "Tokat",
        "Trabzon",
        "Tunceli",
        "Şanlıurfa",
        "Uşak",
        "Van",
        "Yozgat",
        "Zonguldak",
        "Aksaray",
        "Bayburt",
        "Karaman",
        "Kırıkkale",
        "Batman",
        "Şırnak",
        "Bartın",
        "Ardahan",
        "Iğdır",
        "Yalova",
        "Karabük",
        "Kilis",
        "Osmaniye",
        "Düzce",
    ];

    const dateToWeekdays = (date = "2022-09-02") => {
        const d = new Date(date);
        let day = d.getDay()
        switch (day) {
            case 0:
                return "Sun";
            case 1:
                return "Mon";
            case 2:
                return "Tue";
            case 3:
                return "Wed";
            case 4:
                return "Thu";
            case 5:
                return "Fri";
            case 6:
                return "Sat";
    
            default:
                break;
        }
    }
    
    useEffect(() => {
        ((JSON.stringify(datas) === '{}') ? setIsLoading(true) : setIsLoading(false));
    }, [datas]);
    

    useEffect(() => {
        setIsLoading(true);
             axios(dataURL)
                .then((d) => setDatas(d.data))
                    .then(()=>  changeDateTime() )
                        .catch((e) => console.log(e))
                            .finally(()=> setIsLoading(true))
    }, [activeCity]);

   const changeDateTime = () =>{
    setDatas(datas => {
        const updatedDatas = { ...datas };
        updatedDatas.days.map((element) => (element.datetime = dateToWeekdays(element.datetime)));
        return updatedDatas;
    });
   }

    const values = {
        datas,
        setDatas,
        activeCity,
        setActiveCity,
        cities,
        isLoading
    }

    return (
        <WeatherContext.Provider value={values}>           
            {children}
        </WeatherContext.Provider>
    );
}



export const useWeather = () => useContext(WeatherContext);  // custom hook yazarak, useContext'i kullanırken her defasında import etmekten kurtardık