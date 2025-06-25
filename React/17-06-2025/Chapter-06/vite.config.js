//vite confing js
import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [React()],
    // server:{
    //     proxy:{
    //         "/api":{
    //             target:"https://localhost:3000",
    //             changeOrigin: true
    //         }
    //     }
    // }
})