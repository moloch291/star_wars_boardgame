pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "sh ./script_files/build/main.sh"
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}