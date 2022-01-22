pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "sh ./script_files/dependencyctl.sh"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deployment....'
            }
        }
    }
}