pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        script {
          // Install dependencies and build the app
          bat 'echo "--- INSTALLING DEPENDENCIES... ---"'
          bat 'npm install'
          bat 'npm run lint' // Check errors
          bat 'echo "--- BUILDING THE APP... ---"'
          bat 'npm run build'
        }
      }
    }

    stage('Test') {
      steps {
        script {
          // Run tests
          bat 'echo "--- TESTING... ---"'
          bat 'npm run test:unit' // Jest functions
          bat 'npm run test:integration' // Cypress components
          bat 'npm run test:e2e' // Cypress full UX
        }
      }
    }

    stage('Merge') {
      steps {
        script {
          // Check if previous stages were successful
          currentBuild.resultIsBetterOrEqualTo('SUCCESS') ?:
            error('Previous stages failed. Not proceeding with merge.')

          // Merge 'dev' with 'main' branch
          bat 'echo "--- MERGING... ---"'
          bat 'git checkout -f main'
          bat 'git merge dev'
          bat 'git push origin main'

          // Deploy to Vercel or your chosen platform
          bat 'echo "--- NEW VERSION DEPLOYED ! ---"'
        }
      }
    }
  }
}
