import DashboardLayout from "../../../components/Admin/DashboardLayout";
import { CulravDepartmentEvent } from "../assets/event";

const AddDepartment = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          Culrav Department Events
        </h2>
        {CulravDepartmentEvent.map((deptGroup, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold mb-2">{deptGroup.title}</h3>
            <ul>
              {deptGroup.event.map((event, index) => (
                <li key={index} className="ml-4">
                  {event.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default AddDepartment;
