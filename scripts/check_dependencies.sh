#!/bin/bash

zip_install_process() {
    zip --version
    if [ $? -ne 0 ]; then
        apt-get update
        apt-get install zip unzip
    fi
}

kubectl_install_process() {
    apt-get update
    apt-get install -y apt-transport-https ca-certificates curl
    curl -fsSLo /usr/share/keyrings/kubernetes-archive-keyring.gpg https://packages.cloud.google.com/apt/doc/apt-key.gpg
    echo "deb [signed-by=/usr/share/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | tee /etc/apt/sources.list.d/kubernetes.list
    apt-get update
    apt-get install -y kubectl
}

aws_cli_install_process() {
    zip_install_process
    curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
    unzip awscliv2.zip
    ./aws/install
}

eksctl_install_process() {
    apt-get update
    curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
    mv /tmp/eksctl /usr/local/bin
}

helm_install_process() {
    wget https://get.helm.sh/helm-v3.4.1-linux-amd64.tar.gz
    tar xvf helm-v3.4.1-linux-amd64.tar.gz
    mv linux-amd64/helm /usr/local/bin
    rm helm-v3.4.1-linux-amd64.tar.gz
    rm -rf linux-amd64
}

handle_aws_cli() {
    aws --version
    if [ $? -ne 0 ]; then
        aws_cli_install_process
        echo "AWS CLI installed!"
        aws --version
    else
        echo "AWS CLI already installed, skipping this step..."
    fi

}

handle_kubectl() {
    kubectl version --client
    if [ $? -ne 0 ]; then
        kubectl_install_process
        echo "kubectl installed!"
        kubectl version --client
    else
        echo "'kubectl' already installed! skipping this step..."
    fi
}

handle_eks_ctl() {
    eksctl version
    if [ $? -ne 0 ]; then
        eksctl_install_process
        echo "eksctl installed!"
        eksctl version
    else
        echo "'eksctl' already installed! skipping this step..."
    fi
}

handle_helm() {
    helm version
    if [ $? -ne 0 ]; then
        helm_install_process
        echo "helm installed!"
        helm version
    else
        echo "'helm' already installed! skipping this step..."
    fi
}

main() {
    STEP=1
    echo "Building dependecies..."
    echo "*** STEP $STEP: ***"
    handle_aws_cli
    STEP=$(( $STEP + 1 ))
    echo "*** STEP $STEP: ***"
    handle_kubectl
    STEP=$(( $STEP + 1 ))
    echo "*** STEP $STEP: ***"
    handle_eks_ctl
    STEP=$(( $STEP + 1 ))
    echo "*** STEP $STEP ***"
    handle_helm
    echo "*** Script finished! ***"
}

main
