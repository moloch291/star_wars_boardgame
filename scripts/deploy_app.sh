describe_details() {
    kubectl get pods
    kubectl get deployment
    kubectl get svc
    echo "LoadBalancer service details:"
    kubectl describe svc sw-boardgame-service
}

delete_previous_version() {
    kubectl delete deployment sw-boardgame-deployment
    kubectl delete svc sw-boardgame-service
    helm delete sw-bg
}

redeploy() {
    helm install sw-bg ./helm/
}

main() {
    delete_previous_version
    redeploy
    describe_details
}

main
