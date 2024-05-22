import ActivityCard from "@/components/ActivityCard";
import DashboardCards from "@/components/DashboardCards";
import RiskFactor from "@/components/RiskFactor";
import type { getAllCardDataType, getControlDataType } from "@/lib/types";
import { formatNumber } from "@/lib/utils";

type DashboardTopCardsProps = {
    activityCardData: getAllCardDataType | undefined;
    dashboardCardsData: getControlDataType | undefined;
};

const DashboardTopCards = ({
    activityCardData,
    dashboardCardsData,
}: DashboardTopCardsProps) => {
    return (
        <div className="my-2 grid grid-cols-3 gap-x-2 self-center">
            <div className="col-span-2 m-0 grid grid-rows-2 gap-y-3 p-0">
                <div>
                    <ActivityCard
                        title={activityCardData?.CHECK_POINT_NAME}
                        description={activityCardData?.CHECK_POINT_DESC}
                    />
                </div>

                <div className="grid grid-cols-3 gap-x-2">
                    <DashboardCards
                        header="Base"
                        description="Total Number of Rows in Base Data"
                        count={
                            dashboardCardsData
                                ? formatNumber(
                                      dashboardCardsData?.base_data_count
                                  )
                                : 0
                        }
                    />

                    <DashboardCards
                        header="Exception"
                        description="Number of Exceptions in Report"
                        count={
                            dashboardCardsData
                                ? formatNumber(
                                      dashboardCardsData?.exception_count
                                  )
                                : 0
                        }
                    />

                    <DashboardCards
                        header="Deviation"
                        description="Deviation Between Total Rows and Exception"
                        count={
                            dashboardCardsData
                                ? formatNumber(
                                      dashboardCardsData?.deviation_count
                                  )
                                : 0
                        }
                    />
                </div>
            </div>
            <div className="col-span-1 size-full">
                <RiskFactor
                    value={
                        dashboardCardsData ? dashboardCardsData?.risk_score : 0
                    }
                />
            </div>
        </div>
    );
};

export default DashboardTopCards;