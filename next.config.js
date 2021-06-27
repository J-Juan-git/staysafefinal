
module.exports = {
  env: {
      DB_LOCAL_URI: 'mongodb+srv://juan123:juan123@cluster0.ikunr.mongodb.net/staysafe?retryWrites=true&w=majority',
      DB_URI: 'mongodb+srv://juan123:juan123@cluster0.ikunr.mongodb.net/staysafe?retryWrites=true&w=majority',

      STRIPE_API_KEY: 'pk_test_51J5kENSCttZym78Xvw4gAEMBMgDNmq4UpgTT29irPaTDoFcKFCJjrR8WNIkExO0aq8GQNe9dCVAVs0TnTUGLaF7n00TyDekFaN',
      STRIPE_SECRET_KEY: 'sk_test_51J5kENSCttZym78XAWAndS5vT3McTw7L1i6KJSkmieMgvDUoy0uOAYI1hEfHJMwKTMrjG2rBz1ctG7mTGdqhZIks00IBgGG9Q5',

      STRIPE_WEBHOOK_SECRET: 'whsec_0IOBiLuhzi4U7TID85iyvLqO2mfJhBVs',

      CLOUDINARY_CLOUD_NAME: 'juan1234',
      CLOUDINARY_API_KEY: '887995238379429',
      CLOUDINARY_API_SECRET: 'GweQHvYmsewGyh9V_Ldn8Vyye6Q',

      SMTP_HOST: "smtp.mailtrap.io",
      SMTP_PORT: "2525",
      SMTP_USER: "bd38d62462df2c",
      SMTP_PASSWORD: "5dfbf1e1ad040d",
      SMTP_FROM_EMAIL: "joshuajuan0010@gmail.com",
      SMTP_FROM_NAME: "STAYSAFE",      
  },
  images: {
      domains: ['cf.bstatic.com'],
  },
}