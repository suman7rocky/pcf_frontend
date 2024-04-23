import {
    DynamicPage,
    DynamicPageHeader,
    DynamicPageTitle,
    DatePicker,
    IllustratedMessage,
} from "@ui5/webcomponents-react";
import { ThemingParameters } from "@ui5/webcomponents-react-base";
import FilterBarComponent from "../components/FilterBarComponent";
import FlexibleColumnTemplete from "../components/FlexibleColumnTemplete";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { getAllCardDataType } from "../utils/types";
import { Suspense, useState } from "react";
import Loading from "../components/Loading";

const Home = () => {
    const endPoint = `${import.meta.env.VITE_BACKEND_BASE_URL}/dashboard/control-checkpoints`;
    const [error , setError ] = useState(false)

    const fetchData = async () => {
        try {
            const res = await axios.get(endPoint);
            if(res.data?.statuscode === 200){
                setError(false)
            }else{
                setError(true)
            }
            return res.data;
        } catch (error) {
            console.log(error);
            setError(true)
        }
    };

    const { data, isFetching, isError } = useQuery({
        queryKey: ["allcardData"],
        queryFn: fetchData,
        retry: 3,
    });

    const cardValue: getAllCardDataType[] = data?.data;

    return (
        <DynamicPage
            headerContent={
                <DynamicPageHeader>
                    <FilterBarComponent />
                </DynamicPageHeader>
            }
            headerTitle={
                <DynamicPageTitle
                    actions={
                        <>
                            <DatePicker
                                onChange={function _a() {}}
                                onInput={function _a() {}}
                                onValueStateChange={function _a() {}}
                                primaryCalendarType="Gregorian"
                                valueState="None"
                                placeholder="Start Date"
                            />
                            <DatePicker
                                onChange={function _a() {}}
                                onInput={function _a() {}}
                                onValueStateChange={function _a() {}}
                                primaryCalendarType="Gregorian"
                                valueState="None"
                                placeholder="End Date"
                            />
                        </>
                    }
                ></DynamicPageTitle>
            }
            style={{
                borderRadius: ThemingParameters.sapButton_BorderCornerRadius,
            }}
            showHideHeaderButton={false}
            headerContentPinnable={false}
        >
            <Suspense fallback={<Loading />}>

                {
                    isFetching && (
                        <Loading/>
                    )
                }
{error  || isError ? (
    <IllustratedMessage name="UnableToLoad" />
) : (
    <FlexibleColumnTemplete dataCard={cardValue} />
)}

            </Suspense>
        </DynamicPage>
    );
};
export default Home;
