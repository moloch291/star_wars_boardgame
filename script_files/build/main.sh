#!/bin/bash

handle_kubectl() {
    kubectl version --client
    if [ $? -ne 0 ]; then
        echo "Installing kubectl..."
        curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
        curl -LO "https://dl.k8s.io/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl.sha256"
        VALIDATION=$(echo "$(<kubectl.sha256)  kubectl" | sha256sum --check)
        if [ "$VALIDATION" -eq "kubectl: OK" ]; then
            install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
        else
            echo "$VALIDATION"
        fi
    fi
}

main() {
    echo "Building dependecies..."
    handle_kubectl
}

main