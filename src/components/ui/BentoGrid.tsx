import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  img
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  img?: string;
}) => {
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {/* Image with opacity transition */}
      {img && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-xl opacity-60 group-hover/bento:opacity-100 transition-opacity duration-300"
          style={{ backgroundImage: `url(${img})` }}
        />
      )}
      {/* Content layer */}
      <div className="relative z-10">
        {header}
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {icon}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          {/* Description with opacity transition */}
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 opacity-50 group-hover/bento:opacity-100 transition-opacity duration-300">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

