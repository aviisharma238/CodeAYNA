import React from "react";

export default function Sidebar() {
  return (
    <div
      className="hidden lg:block w-[14rem] max-w-[14rem] flex-shrink-0 pl-8"
      style={{ contain: "layout style" }}
    >
      <div className="sticky top-0 pb-8">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold flex items-center gap-2 flex-row text-primary font-header mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-align-left"
              aria-hidden="true"
            >
              <path d="M15 12H3"></path>
              <path d="M17 18H3"></path>
              <path d="M21 6H3"></path>
            </svg>
            On this page
          </h4>

          <div className="relative overflow-y-auto max-h-[calc(100dvh-10rem)]">
            <div
              className="absolute left-0 w-0.5 bg-primary transition-all duration-300 ease-out rounded-full"
              style={{ top: 0, height: "40px", opacity: 1 }}
            ></div>

            <ul className="space-y-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700 overflow-hidden">
              <li className="relative">
                <a
                  href="#featured-models-and-systems"
                  className="block text-sm tracking-tight transition-colors duration-200 hover:text-primary focus:outline-none focus:text-primary relative text-primary font-medium"
                >
                  Featured Models and Systems
                </a>
              </li>
              <li className="relative">
                <a
                  href="#production-models"
                  className="block text-sm tracking-tight transition-colors duration-200 hover:text-primary focus:outline-none focus:text-primary relative text-muted-foreground"
                >
                  Production Models
                </a>
              </li>
              <li className="relative">
                <a
                  href="#production-systems"
                  className="block text-sm tracking-tight transition-colors duration-200 hover:text-primary focus:outline-none focus:text-primary relative text-muted-foreground"
                >
                  Production Systems
                </a>
              </li>
              <li className="relative">
                <a
                  href="#preview-models"
                  className="block text-sm tracking-tight transition-colors duration-200 hover:text-primary focus:outline-none focus:text-primary relative text-muted-foreground"
                >
                  Preview Models
                </a>
              </li>
              <li className="relative">
                <a
                  href="#deprecated-models"
                  className="block text-sm tracking-tight transition-colors duration-200 hover:text-primary focus:outline-none focus:text-primary relative text-muted-foreground"
                >
                  Deprecated Models
                </a>
              </li>
              <li className="relative">
                <a
                  href="#get-all-available-models"
                  className="block text-sm tracking-tight transition-colors duration-200 hover:text-primary focus:outline-none focus:text-primary relative text-muted-foreground"
                >
                  Get All Available Models
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
