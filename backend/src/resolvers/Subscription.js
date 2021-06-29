const Subscription = {
    subscribeCard:{
        subscribe( parent, {post_id}, {pubsub}, info){
            return pubsub.asyncIterator(`${post_id}`);
        }
    }
}

export default Subscription