mkdir ./src/components/$1
touch ./src/components/$1/$1.tsx
touch ./src/components/$1/$1.module.css
cat << EOF > ./src/components/$1/$1.tsx
import React from "react";
import styles from "./$1.module.css";



export const $1 = ({ }) => {
  return (
    <div></div>
  );
};
EOF