import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RiskInfoCard from "@/components/v2/RiskInfoCard";
import { calcRisk } from "@/lib/utils";

import { Check, Info, TriangleAlert, X } from "lucide-react";

type RiskCardProps = {
    title: string;
    desc: string;
    riskScore: number;
    onClick: () => void;
};

const RiskCard = ({ title, riskScore, desc, onClick }: RiskCardProps) => {
    return (
        <Card
            className="mb-3 flex  cursor-pointer flex-col rounded-xl shadow-lg "
            onClick={onClick}
        >
            <CardHeader className="p-4">
                <CardTitle className="flex justify-between">
                    <div className="flex items-center gap-x-2 text-lg font-semibold">
                        <Badge
                            variant={
                                calcRisk(riskScore) === "High"
                                    ? "High"
                                    : calcRisk(riskScore) === "Medium"
                                      ? "Mid"
                                      : "Low"
                            }
                        >
                            <div className="mr-3">
                                {calcRisk(riskScore) === "High" ? (
                                    <X className="size-8  text-white dark:text-black" />
                                ) : calcRisk(riskScore) === "Medium" ? (
                                    <TriangleAlert className="size-8  text-white dark:text-black" />
                                ) : (
                                    <Check className="size-8  text-white dark:text-black" />
                                )}
                            </div>
                            <span className="mr-2 text-lg">
                                {calcRisk(riskScore)}:
                            </span>
                            <div className="text-lg">
                                {(riskScore * 100) / 100}%
                            </div>
                        </Badge>
                    </div>

                    <div>
                        <span className="sr-only">Info about this card</span>
                        <RiskInfoCard desc={desc}>
                            <Info className="text-sky-600 hover:text-sky-900" />
                        </RiskInfoCard>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="m-2 text-xl font-bold ">
                {title}
            </CardContent>
        </Card>
    );
};

export default RiskCard;
