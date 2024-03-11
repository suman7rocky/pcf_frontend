import { DynamicPage } from "@ui5/webcomponents-react";
import DashboardCards from "../components/DashboardCards";
import { dasboardCardData } from "../lib/dashboardCardData";
import DashboardDatePicker from "../components/DashboardDatePicker";
import ActivityCard from "../components/ActivityCard";

const Dashboard = () => {
	return (
		<DynamicPage
			headerContentPinnable={false}
			showHideHeaderButton={false}
			headerContent={<DashboardDatePicker />}>
			{dasboardCardData.map((card, index) => {
				return (
					<DashboardCards
						key={index}
						header={card.header}
						description={card.description}
					/>
				);
			})}

			<ActivityCard
				title="Incomplete Customer Master"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, molestiae."
			/>
		</DynamicPage>
	);
};

export default Dashboard;
