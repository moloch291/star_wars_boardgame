#!/bin/bash

main() {
    apt update
    echo "Building dependecies..."
    sh ./install_kubectl.sh
}

main