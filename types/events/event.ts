import { Post as post_event } from "./post";
import { Comment as comment_event } from "./comment";
import { Like as like_event } from "./like";
import { User as user_event } from "./user";

export declare namespace IEvent {
  export import Post = post_event;
  export import User = user_event;
  export import Comment = comment_event;
  export import Like = like_event;
}
