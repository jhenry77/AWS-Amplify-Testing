/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [ 
            {
                protocol: 'https',
                hostname: 'is1-ssl.mzstatic.com',  
                pathname: '**'    ,
    },
],
},
    env: {
    AWS_COGNITO_REGION: process.env.AWS_COGNITO_REGION,
    AWS_COGNITO_POOL_ID: process.env.AWS_COGNITO_POOL_ID,
    AWS_COGNITO_APP_CLIENT_ID: process.env.AWS_COGNITO_APP_CLIENT_ID,
}



};

export default nextConfig;
