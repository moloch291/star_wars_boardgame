handle_kubectl() {
    KUBECT_VERSION=$(kubectl version)
    echo "$KUBECTL_VERSION"
}

main() {
    echo "Building dependecies..."
    handle_kubectl
}

main