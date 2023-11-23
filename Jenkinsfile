pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        script {
          // Install dependencies and build the app
          sh 'pnpm install'
          sh 'pnpm build'
        }
      }
    }

    stage('Test') {
      steps {
        script {
          // Run tests
          sh 'pnpm run test'
        }
      }
    }

    stage('Deploy') {
      steps {
        script {
          // Deploy to Vercel or your chosen platform
          sh 'pnpm run deploy'
        }
      }
    }
  }
}
