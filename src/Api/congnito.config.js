const cognitoUserPoolLocalConfig = {
  region: 'us-east-1',
  userPoolId: 'us-east-1_YpvdIgKmM',
  userPoolWebClientId: '5bafbn912a0gjssdso8mnuo2le',
  identityPoolId: 'us-east-1:aeb24ddd-42f7-455f-90ed-958a03343331',
  baseUrl: 'https://apqp-dev.neviton.com'
};
const cognitoUserPoolStageConfig = {
  region: 'us-east-1',
  userPoolId: 'us-east-1_uYVTYCnR8',
  userPoolWebClientId: '53bqslgtse0g3lti9tvicmmq6l',
  identityPoolId: 'us-east-1:e04be6ec-8f33-4efd-a5bf-ae78e4927472',
  baseUrl: 'https://apqpstage.neviton.com'
};
const cognitoUserPoolDemoConfig = {
  region: 'eu-central-1',
  userPoolId: 'eu-central-1_CbohToRc6',
  userPoolWebClientId: 'sbdl0h0tfvbfdbdusd8b01b3k',
  identityPoolId: 'eu-central-1:bfd69337-796d-40f8-92e5-45d03b23c1f5',
  baseUrl: 'https://apqpdemo.neviton.com'
};
const cognitoUserPoolMtcnvConfig = {
  region: 'us-east-1',
  userPoolId: 'us-east-1_7uxHS6BWi',
  userPoolWebClientId: '6h12incm72nj8igdhh1v5rm4nc',
  identityPoolId: 'us-east-1:87cf2623-ce81-4993-a80d-8b6876e04893',
  baseUrl: 'https://mtcuat-nv.mtcaerosystems.com'
};

const cognitoUserPoolMtceuConfig = {
  region: 'eu-central-1',
  userPoolId: 'eu-central-1_3GEzXTSdg',
  userPoolWebClientId: '4o9qukfq3e9o9pb5uft8r5mhk3',
  identityPoolId: 'eu-central-1:cfa1625d-962b-4dae-9aea-7c8d9624b408',
  baseUrl: 'https://uat.mtcaerosystems.com'
};

const cognitoConfig = env => {
  if (env === 'localhost') {
    return cognitoUserPoolLocalConfig;
  }
  if (env === 'dev') {
    return cognitoUserPoolLocalConfig;
  }
  if (env === 'stage') {
    return cognitoUserPoolStageConfig;
  }
  if (env === 'demo') {
    return cognitoUserPoolDemoConfig;
  }
  if (env === 'mtcuatnv') {
    return cognitoUserPoolMtcnvConfig;
  }
  if (env === 'mtcuateu') {
    return cognitoUserPoolMtceuConfig;
  }
  return {};
};

const getMQTTConfig = () => ({
  poolId: 'us-east-1:4fa0f923-b7ff-4e38-aeab-80228faca896',
  UserPoolId: 'us-east-1_YpvdIgKmM',
  ClientId: '5bafbn912a0gjssdso8mnuo2le',
  host: 'a13eu9zdp5mu99.iot.us-east-1.amazonaws.com',
  region: 'us-east-1'
});

const getS3Keys = env => {
  if (env === 'demo') {
    return {
      S3_TASK_BUCKET: 'apqp-alarm-images-demo',
      S3_ANALYSE_SCC_BUCKET: 'apqp-uat-files'
    };
  }
  if (env === 'mtcuatnv') {
    return {
      S3_TASK_BUCKET: 'mtcuat-nv-alarm-images',
      S3_ANALYSE_SCC_BUCKET: 'mtcuat-nv-alarm-images'
    };
  }
  if (env === 'stage') {
    return {
      S3_TASK_BUCKET: 'apqp-alarm-images',
      S3_ANALYSE_SCC_BUCKET: 'apqp-alarm-images'
    };
  }
  if (env === 'mtcuateu') {
    return {
      S3_TASK_BUCKET: 'apqp-alarm-images-uat-eu',
      S3_ANALYSE_SCC_BUCKET: 'apqp-alarm-images-uat-eu'
    };
  }
  return {
    S3_TASK_BUCKET: 'apqp-alarm-images',
    S3_ANALYSE_SCC_BUCKET: 'apqp-alarm-images'
  };
};

const getS3FileURL = (region, bucket, file) =>
  `https://s3.${region}.amazonaws.com/${bucket}/${file}`;

const getS3Config = (bucket, env) => {
  if (env === 'mtcuateu') {
    return {
      Auth: {
        identityPoolId: 'eu-central-1:cfa1625d-962b-4dae-9aea-7c8d9624b408', // REQUIRED - Amazon Cognito Identity Pool ID
        region: 'eu-central-1', // REQUIRED - Amazon Cognito Region
        mandatorySignIn: false // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      },
      Storage: {
        level: 'public',
        bucket: 'apqp-alarm-images-uat-eu', // REQUIRED -  Amazon S3 bucket
        region: 'eu-central-1' // REQUIRED -  bucket region
      }
    };
  }
  if (env === 'mtcuatnv') {
    return {
      Auth: {
        identityPoolId: 'us-east-1:87cf2623-ce81-4993-a80d-8b6876e04893', // REQUIRED - Amazon Cognito Identity Pool ID
        region: 'us-east-1', // REQUIRED - Amazon Cognito Region
        mandatorySignIn: false // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      },
      Storage: {
        level: 'public',
        bucket: 'mtcuat-nv-alarm-images', // REQUIRED -  Amazon S3 bucket
        region: 'us-east-1' // REQUIRED -  bucket region
      }
    };
  }
  if (env === 'demo') {
    return {
      Auth: {
        identityPoolId: 'eu-central-1:bfd69337-796d-40f8-92e5-45d03b23c1f5', // REQUIRED - Amazon Cognito Identity Pool ID
        region: 'eu-central-1', // REQUIRED - Amazon Cognito Region
        mandatorySignIn: false // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      },
      Storage: {
        level: 'public',
        bucket: 'apqp-alarm-images-demo', // REQUIRED -  Amazon S3 bucket
        region: 'eu-central-1' // REQUIRED -  bucket region
      }
    };
  }
  if (env === 'stage') {
    return {
      Auth: {
        identityPoolId: 'us-east-1:e04be6ec-8f33-4efd-a5bf-ae78e4927472', // REQUIRED - Amazon Cognito Identity Pool ID
        region: 'us-east-1', // REQUIRED - Amazon Cognito Region
        mandatorySignIn: false // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      },
      Storage: {
        level: 'public',
        bucket: 'apqp-alarm-images', // REQUIRED -  Amazon S3 bucket
        region: 'us-east-1' // REQUIRED -  bucket region
      }
    };
  }
  return {
    Auth: {
      identityPoolId: 'us-east-1:aeb24ddd-42f7-455f-90ed-958a03343331', // REQUIRED - Amazon Cognito Identity Pool ID
      region: 'us-east-1', // REQUIRED - Amazon Cognito Region
      mandatorySignIn: false // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    },
    Storage: {
      level: 'public',
      bucket: 'apqp-alarm-images', // REQUIRED -  Amazon S3 bucket
      region: 'us-east-1' // REQUIRED -  bucket region
    }
  };
};

export default {
  cognitoConfig,
  getMQTTConfig,
  getS3Keys,
  getS3FileURL,
  getS3Config
};
