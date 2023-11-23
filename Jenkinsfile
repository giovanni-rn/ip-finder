pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        script {
          // Install dependencies and build the app
          bat 'npm install'
          bat 'npm run build'
        }
      }
    }

    stage('Test') {
      steps {
        script {
          // Run tests
          bat 'npm run test'
        }
      }
    }

    stage('Deploy') {
      steps {
        script {
          // Deploy to Vercel or your chosen platform
          bat 'npm run deploy'
        }
      }
    }
  }
}
