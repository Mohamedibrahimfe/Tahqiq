import iconone from '../../../assets/features/mobile-app.svg'
import icontwo from '../../../assets/features/employee-is-working-online.svg'
import iconthree from '../../../assets/features/task-appointment-management.svg'
export default function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-16 max-w-screen-xl">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:
       duration-300 ease-in-out hover:shadow-lg hover:border-gray-300 hover:bg-gray-700">
        <a href="#">
          <img src={iconthree} alt="Mobile App" className="object-cover w-full rounded-t-lg h-[300px]" />

        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Super-efficient.
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:
       duration-300 ease-in-out hover:shadow-lg hover:border-gray-300 hover:bg-gray-700">
        <a href="#">
          <img src={icontwo} alt="Mobile App" className="object-cover w-full rounded-t-lg h-[300px]" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Simple Interface
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
      </div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:
       duration-300 ease-in-out hover:shadow-lg hover:border-gray-300 hover:bg-gray-700">
        <a href="#">
        <img src={iconone} alt="Mobile App" className="object-cover w-full rounded-t-lg h-[300px]" />

        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Across Devices
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            nibh tristique ipsum.
          </p>
        </div>
      </div>
      
    </section>
  );
}
