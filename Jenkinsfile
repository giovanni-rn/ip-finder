pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        script {
          // Install dependencies and build the app
          bat 'npm install pnpm'
          bat 'pnpm install'
          bat 'pnpm run build'
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
