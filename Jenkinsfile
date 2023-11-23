pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        script {
          // Install dependencies and build the app
          bat 'npm install'
          bat 'npm run lint' // Check errors
          bat 'npm run build'
        }
      }
    }

    stage('Test') {
      steps {
        script {
          // Run tests
          bat 'npm run test:unit' // Jest functions
          bat 'npm run test:integration' // Cypress components
          bat 'npm run test:e2e' // Cypress full UX
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
