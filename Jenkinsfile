pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh "sh ./script_files/check_dependencies.sh"
                withKubeConfig([credentialsId: 'kube-config']) {
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