import express, { json } from 'express'
import {v4 as uuidv4} from 'uuid'

const router = express.Router()

let posts = [
    {
      id: '1',
      title: 'Master ReactJS in 4 hours',
      description: "It's free",
      author: 'Harry',
    },
    {
      id: '2',
      title: 'Rap Viet mua 3',
      description: 'Vong chung ket Rap Viet 3',
      author: 'vieon',
    },
    {
      id: '3',
      title: 'Rap Viet mua 4',
      description: 'Vong chung ket Rap Viet 4',
      author: 'VTV',
    },
    {
      id: '4',
      title: 'Master ReactJS in 4 hours',
      description: "It's free",
      author: 'Harry',
    },
    {
      id: '5',
      title: 'Rap Viet mua 3',
      description: 'Vong chung ket Rap Viet 3',
      author: 'vieon',
    },
    {
      id: '6',
      title: 'Rap Viet mua 4',
      description: 'Vong chung ket Rap Viet 4',
      author: 'VTV',
    },
  ];

  router.get('/',(req, res) => {
    res.json({
        data: posts
    })
  })



  router.get('/:id', (req,res) => {
    const {id} = req.params

    const exitstingPost = posts.find((post) => post.id === id)

    if(!exitstingPost){
        return res.json({
            message: 'Post not found'
        })
    }

    res.json({
        data: exitstingPost
    })

  })

  router.post('/', (req,res)=>{

    const { title, description } = req.body;

    if(!(title && description)){
        res.json({
            message: 'Missing required key'
        })
    }

    posts.push({
        id: uuidv4(),
        title,
        description
    })

    res.json({
        data:posts
    })

  })

  router.put('/:id', (req,res) => {
    const {id} = req.params
    const {title, description} = req.body

    const postIndex = posts.findIndex((post) => post.id === id)

    if(postIndex === -1){
        return res.json({
            message: 'Post not found'
        })
    }
    posts[postIndex] = {...posts[postIndex],title,description}
    res.json({
        data: posts[postIndex]
    })
  })

  router.delete('/:id', (req,res) => {
    const {id} = req.params

    const postIndex = posts.findIndex((post) => post.id === id)

    if(postIndex === -1){
        return res.json({
            message: 'Post not found'
        })
    }

    posts.splice(postIndex,1)

    res.json({
        message: 'Post is delete successfully'
    })


  })




  export default router

