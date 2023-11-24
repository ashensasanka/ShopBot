import React from "react";

const sizeClasses = {
  txtPoppinsRegular1333Bluegray700: "font-normal font-poppins",
  txtPoppinsSemiBold192: "font-poppins font-semibold",
  txtPoppinsBold5733: "font-bold font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsRegular1333: "font-normal font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
