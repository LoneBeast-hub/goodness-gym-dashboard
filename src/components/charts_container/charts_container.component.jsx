import ActivitiesAreaChart from "../activities_area_chart/activities_area_chart.component"
import CaloriesDoughnutChart from "../calories_doughnut_chart/calories_doughnut_chart.component";

const ChartsContainer = () => {
    return(
        <div className="flex md:gap-[2%] gap-[2.5rem] flex-col md:flex-row mt-[2.3rem]">
            <ActivitiesAreaChart />
            <CaloriesDoughnutChart />
        </div>
    )
}

export default ChartsContainer;