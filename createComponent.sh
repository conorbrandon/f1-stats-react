mkdir ./src/components/$1
touch ./src/components/$1/$1.tsx
touch ./src/components/$1/$1.css
cat << EOF > ./src/components/$1/$1.tsx
import React from "react";
import "./$1.css";

export const $1 = ({ }) => {

};
EOF