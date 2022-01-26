describe_details() {
    kubectl get pods
    kubectl get deployment
    kubectl get svc
    echo "LoadBalancer service details:"
    kubectl describe svc sw-boardgame-service
    echo "Helm details:"
    helm ls
}

redeploy() {
    helm upgrade sw-bg ./helm/
}

main() {
    redeploy
    describe_details
}

main
