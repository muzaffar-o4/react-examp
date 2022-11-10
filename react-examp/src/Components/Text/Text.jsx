import React from 'react'
import './Text.scss'
import { useDispatch, useSelector } from 'react-redux';
import { writePost } from '../../redux/features/postSlice';


const Text = () => {
    const { posts } = useSelector((state) => state.post);
    // console.log('Text', posts);

    const dispatch = useDispatch();
    dispatch(writePost('salom'))
    console.log(posts)

    // const fetchData = async () => {
    //     const POSTS_URL = `https://63566a79a2d1844a97742c99.mockapi.io/category/`
    //     await fetch(POSTS_URL)
    //         .then(res => res.json())
    //         .then((posts) => {
    //             console.log(posts)
    //             dispatch(writePost(posts))
    //         })
    //         .catch((err) => console.log(err))
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    return (
        <div className="content">
            {/* content left */}
            <div className="content__left">
                <h2>What I do!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
                <span>Explore me </span>
                <div className="social__link">
                    <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.github.com/"><i className="fa-brands fa-github"></i></a>
                    <a href="https://twitter.com/"><i className="fa-brands fa-twitter"></i></a>
                    <a href="https://ru.linkedin.com/"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            {/* content right */}
            <div className="content__right">
                <h1>Recent Posts</h1>

                {/* content card */}
                <div className="content__card">
                    <div className="span__text">
                        <span>September <time>19.2020</time> </span>
                        <span>Typography</span>
                    </div>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, illum.</h2>
                    <span className='time__photo'>3 minutes read</span>
                    <hr />
                </div>

                {/* {posts.length > 0 && posts.map((item) => item)} */}

                <div className="content__pagenation">
                    <p>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Text;