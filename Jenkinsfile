pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        script {
          // Install dependencies and build the app
          bat 'pnpm install'
          bat 'pnpm build'
        }
      }
    }

    stage('Test') {
      steps {
        script {
          // Run tests
          bat 'pnpm run test'
        }
      }
    }

    stage('Deploy') {
      steps {
        script {
          // Deploy to Vercel or your chosen platform
          bat 'pnpm run deploy'
        }
      }
    }
  }
}
