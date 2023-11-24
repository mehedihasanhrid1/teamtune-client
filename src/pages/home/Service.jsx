import React from "react";

const Service = () => {
  return (
    <section className="pt-8 md:pt-12 lg:pt-14">
      <div className="container mx-auto">
        <div className="flex flex-wrap mb-3">
          <div className="w-full px-4">
            <div className="mx-auto mb-6 lg:mb-12 max-w-[510px] text-center">
              <span className="mb-3 block text-2xl lg:text-3xl font-semibold text-blue-600">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-gray-800 dark:text-gray-100 md:text-[40px]">
                What We Offer
              </h2>
              <p className="px-4 dark:text-gray-400 text-gray-500">
                Elevate your employee management experience with Team Tune's comprehensive services. Explore the features that empower your organization and streamline your workflow.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <ServiceCard
            title="Effortless Payroll Management"
            details="Simplify payroll processing, tax compliance, and payment tracking, ensuring accurate and timely compensation for employees"
            icon={
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 14C2 10.2288 2 8.34315 3.17157 7.17157C4.34315 6 6.22876 6 10 6H14C17.7712 6 19.6569 6 20.8284 7.17157C22 8.34315 22 10.2288 22 14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14Z" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M16 6C16 4.11438 16 3.17157 15.4142 2.58579C14.8284 2 13.8856 2 12 2C10.1144 2 9.17157 2 8.58579 2.58579C8 3.17157 8 4.11438 8 6" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M12 17.3333C13.1046 17.3333 14 16.5871 14 15.6667C14 14.7462 13.1046 14 12 14C10.8954 14 10 13.2538 10 12.3333C10 11.4129 10.8954 10.6667 12 10.6667M12 17.3333C10.8954 17.3333 10 16.5871 10 15.6667M12 17.3333V18M12 10V10.6667M12 10.6667C13.1046 10.6667 14 11.4129 14 12.3333" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
              
            }
          />
          <ServiceCard
            title="Integrated Work Progress Tracking"
            details="Monitor project milestones, tasks, and timelines seamlessly, enhancing team collaboration and optimizing workflow efficiency"
            icon={
                <svg width="40px" height="40px" viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00025"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.7"> <path d="M7.05005 15.81L10.6201 12.11C10.8201 11.9 11.1501 11.91 11.3401 12.12L12.14 12.98C12.34 13.19 12.6701 13.19 12.8701 12.98L14.94 10.81" stroke="#ffffff" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16.88 12.86L16.95 9.41C16.95 9.1 16.7001 8.84 16.4001 8.84L12.9301 8.86" stroke="#ffffff" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 22C17.2467 22 21.5 17.7467 21.5 12.5C21.5 7.25329 17.2467 3 12 3C6.75329 3 2.5 7.25329 2.5 12.5C2.5 17.7467 6.75329 22 12 22Z" stroke="#ffffff" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M7.05005 15.81L10.6201 12.11C10.8201 11.9 11.1501 11.91 11.3401 12.12L12.14 12.98C12.34 13.19 12.6701 13.19 12.8701 12.98L14.94 10.81" stroke="#ffffff" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16.88 12.86L16.95 9.41C16.95 9.1 16.7001 8.84 16.4001 8.84L12.9301 8.86" stroke="#ffffff" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M12 22C17.2467 22 21.5 17.7467 21.5 12.5C21.5 7.25329 17.2467 3 12 3C6.75329 3 2.5 7.25329 2.5 12.5C2.5 17.7467 6.75329 22 12 22Z" stroke="#ffffff" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            }
          />
          <ServiceCard
            title="Real-time Salary Insights"
            details="Provide employees with instant access to salary details, benefits, and tax information, promoting financial awareness and satisfaction in compensation structures."
            icon={
                <svg fill="#ffffff" height="36px" width="36px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.992"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <polygon points="464,136 448,136 448,480 432,480 432,136 416,136 416,480 400,480 400,320 384,320 384,480 368,480 368,320 352,320 352,480 336,480 336,280 320,280 320,480 304,480 304,280 288,280 288,480 272,480 272,296 256,296 256,480 240,480 240,296 224,296 224,480 208,480 208,184 192,184 192,480 176,480 176,184 160,184 160,480 144,480 144,336 128,336 128,480 112,480 112,336 96,336 96,480 80,480 80,304 64,304 64,480 48,480 48,304 32,304 32,480 0,480 0,496 496,496 496,480 464,480 "></polygon> <path d="M56,280c30.872,0,56-25.128,56-56s-25.128-56-56-56S0,193.128,0,224S25.128,280,56,280z M72,260.608 C67.088,262.768,61.696,264,56,264s-11.088-1.232-16-3.392V256c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V260.608z M48,216 c0-4.416,3.584-8,8-8s8,3.584,8,8s-3.584,8-8,8S48,220.416,48,216z M56,184c22.056,0,40,17.944,40,40 c0,9.424-3.408,17.976-8.88,24.816c-1.728-7.488-6.104-13.92-12.072-18.384C78.112,226.408,80,221.44,80,216 c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44c-5.968,4.456-10.344,10.896-12.072,18.384 C19.408,241.976,16,233.424,16,224C16,201.944,33.944,184,56,184z"></path> <path d="M184,160c30.872,0,56-25.128,56-56s-25.128-56-56-56s-56,25.128-56,56S153.128,160,184,160z M200,140.608 c-4.912,2.16-10.304,3.392-16,3.392s-11.088-1.232-16-3.392V136c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V140.608z M176,96 c0-4.416,3.584-8,8-8s8,3.584,8,8s-3.584,8-8,8S176,100.416,176,96z M184,64c22.056,0,40,17.944,40,40 c0,9.424-3.408,17.976-8.88,24.816c-1.728-7.488-6.104-13.92-12.072-18.384C206.112,106.408,208,101.44,208,96 c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44c-5.968,4.456-10.344,10.896-12.072,18.384 c-5.472-6.848-8.88-15.4-8.88-24.824C144,81.944,161.944,64,184,64z"></path> <path d="M312,256c30.872,0,56-25.128,56-56s-25.128-56-56-56s-56,25.128-56,56S281.128,256,312,256z M328,236.608 c-4.912,2.16-10.304,3.392-16,3.392c-5.696,0-11.088-1.232-16-3.392V232c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V236.608z M304,192c0-4.416,3.584-8,8-8c4.416,0,8,3.584,8,8s-3.584,8-8,8C307.584,200,304,196.416,304,192z M312,160 c22.056,0,40,17.944,40,40c0,9.424-3.408,17.976-8.88,24.816c-1.728-7.488-6.104-13.92-12.072-18.384 C334.112,202.408,336,197.44,336,192c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44 c-5.968,4.456-10.344,10.896-12.072,18.384c-5.472-6.848-8.88-15.4-8.88-24.824C272,177.944,289.944,160,312,160z"></path> <path d="M440,112c30.872,0,56-25.128,56-56S470.872,0,440,0s-56,25.128-56,56S409.128,112,440,112z M456,92.608 C451.088,94.768,445.696,96,440,96c-5.696,0-11.088-1.232-16-3.392V88c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V92.608z M432,48c0-4.416,3.584-8,8-8c4.416,0,8,3.584,8,8s-3.584,8-8,8C435.584,56,432,52.416,432,48z M440,16c22.056,0,40,17.944,40,40 c0,9.424-3.408,17.976-8.88,24.816c-1.728-7.488-6.104-13.92-12.072-18.384C462.112,58.408,464,53.44,464,48 c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44c-5.968,4.456-10.344,10.896-12.072,18.384 C403.408,73.976,400,65.424,400,56C400,33.944,417.944,16,440,16z"></path> </g> </g> </g> </g></svg>
            }
          />
          <ServiceCard
            title="Comprehensive Employee Databases"
            details="Centralize employee information, streamlining HR tasks with organized employee lists, detailed profiles, and secure data management"
            icon={
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.24000000000000005"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.25 6C3.25 4.45831 4.48029 3.26447 6.00774 2.50075C7.58004 1.7146 9.69967 1.25 12 1.25C14.3003 1.25 16.42 1.7146 17.9923 2.50075C19.5197 3.26447 20.75 4.45831 20.75 6V18C20.75 19.5417 19.5197 20.7355 17.9923 21.4992C16.42 22.2854 14.3003 22.75 12 22.75C9.69967 22.75 7.58004 22.2854 6.00774 21.4992C4.48029 20.7355 3.25 19.5417 3.25 18V6ZM4.75 6C4.75 5.33255 5.31057 4.52639 6.67856 3.84239C8.00168 3.18083 9.88205 2.75 12 2.75C14.118 2.75 15.9983 3.18083 17.3214 3.84239C18.6894 4.52639 19.25 5.33255 19.25 6C19.25 6.66745 18.6894 7.47361 17.3214 8.15761C15.9983 8.81917 14.118 9.25 12 9.25C9.88205 9.25 8.00168 8.81917 6.67856 8.15761C5.31057 7.47361 4.75 6.66745 4.75 6ZM4.75 18C4.75 18.6674 5.31057 19.4736 6.67856 20.1576C8.00168 20.8192 9.88205 21.25 12 21.25C14.118 21.25 15.9983 20.8192 17.3214 20.1576C18.6894 19.4736 19.25 18.6674 19.25 18V14.7072C18.8733 15.0077 18.4459 15.2724 17.9923 15.4992C16.42 16.2854 14.3003 16.75 12 16.75C9.69967 16.75 7.58004 16.2854 6.00774 15.4992C5.55414 15.2724 5.12675 15.0077 4.75 14.7072V18ZM19.25 8.70722V12C19.25 12.6674 18.6894 13.4736 17.3214 14.1576C15.9983 14.8192 14.118 15.25 12 15.25C9.88205 15.25 8.00168 14.8192 6.67856 14.1576C5.31057 13.4736 4.75 12.6674 4.75 12V8.70722C5.12675 9.00772 5.55414 9.27245 6.00774 9.49925C7.58004 10.2854 9.69967 10.75 12 10.75C14.3003 10.75 16.42 10.2854 17.9923 9.49925C18.4459 9.27245 18.8733 9.00772 19.25 8.70722Z" fill="#ffffff"></path> </g></svg>
            }
          />
          <ServiceCard
            title="Automated Work Hours Tracking"
            details="Efficiently record and manage work hours, facilitating precise attendance tracking and aiding in workload distribution for improved productivity."
            icon={
                <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#ffffff" strokeWidth="1.5"></path> <path d="M2 12L4 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 12L22 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M12 4V2" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M12 22V20" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
            }
          />
          <ServiceCard
            title="Employee Self-Service Portals"
            details="Empower employees with easy access to personal details, pay stubs, and work schedules, fostering transparency and reducing administrative overhead."
            icon={
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.725 16.3124C4.89375 16.3124 5.11875 16.2562 5.2875 16.1999L11.5312 14.0062C12.2062 13.7812 12.5437 13.0499 12.3187 12.3749C12.0937 11.6999 11.3625 11.3624 10.6875 11.5874L6.80625 12.9374C8.6625 8.0999 13.3875 4.8374 18.7875 4.8374C24.6938 4.8374 29.8125 8.7749 31.275 14.3999C31.4437 15.0749 32.1187 15.4687 32.7937 15.2999C33.4687 15.1312 33.8625 14.4562 33.6938 13.7812C31.95 7.03115 25.8187 2.30615 18.7312 2.30615C12.4312 2.30615 6.8625 6.01865 4.55625 11.5874L3.375 8.2124C3.15 7.5374 2.41875 7.1999 1.74375 7.4249C1.06875 7.6499 0.73125 8.38115 0.95625 9.05615L3.09375 15.1874C3.43125 15.9187 4.05 16.3124 4.725 16.3124Z"
                  fill="white"
                />
                <path
                  d="M34.9312 27.9562L32.625 21.9375C32.4562 21.5437 32.175 21.2062 31.7812 21.0375C31.3875 20.8687 30.9375 20.8687 30.5437 21.0375L24.3562 23.3999C23.6812 23.6249 23.4 24.3562 23.625 25.0312C23.85 25.7062 24.5813 25.9875 25.2563 25.7625L29.1375 24.3C26.8875 28.4062 22.5 31.1062 17.6062 31.1062C12.0375 31.1062 7.14375 27.6187 5.4 22.4437C5.175 21.7687 4.44375 21.4312 3.825 21.6562C3.15 21.8812 2.8125 22.6124 3.0375 23.2312C5.11875 29.4187 10.9687 33.5812 17.6062 33.5812C23.4 33.5812 28.6312 30.375 31.275 25.425L32.5688 28.8562C32.7375 29.3625 33.2437 29.6437 33.75 29.6437C33.9187 29.6437 34.0312 29.6437 34.2 29.5312C34.875 29.3625 35.1562 28.6312 34.9312 27.9562Z"
                  fill="white"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-5 md:w-1/2 lg:w-1/3">
        <div className="mb-9 h-[24rem] lg:h-[26rem] xl:h-[23rem] rounded-[20px] p-10 shadow-2 hover:shadow-lg dark:bg-gray-800 bg-gray-50 md:px-7 xl:px-10">
          <div className="flex items-center justify-center">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-600">
            {icon}
          </div>
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h4>
          <p className="text-gray-600 dark:text-gray-300">{details}</p>
        </div>
      </div>
    </>
  );
};
