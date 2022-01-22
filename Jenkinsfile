pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "sh ./script_files/check_dependencies.sh"
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