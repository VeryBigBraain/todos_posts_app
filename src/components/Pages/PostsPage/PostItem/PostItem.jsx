import cl from './PostItem.module.css';
import { useHistory } from 'react-router-dom';
import MyButton from './../../../UI/buttons/MyButton';

const PostItem = ({ item, index }) => {
    const post = {...item };
    const router = useHistory();
    return ( <
        div key = { post.id }
        className = { cl.post } >
        <
        div className = { cl.post__header } >
        <
        span className = { cl.post__number } > { post.id } < /span> <
        div className = { cl.post__title } > { post.title } < /div> <
        /div> <
        div className = { cl.post__body } > { post.body } < /div> <
        div className = { cl.btn__container } >
        <
        MyButton onClick = {
            () => router.push(`/posts/${post.id}`) }
        customStyle = {
            { color: '#fff' } }
        variant = "contained" >
        Open <
        /MyButton> <
        /div> <
        /div>
    );
};

export default PostItem;