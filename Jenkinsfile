pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "sh ./script_files/check_dependencies.sh"
                withKubeConfig([credentialsId: 'kube-config', serverUrl: '192.168.49.2']) {
                    sh 'kubectl cluster-info'
                }
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