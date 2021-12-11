package com.example.spiceclub.controllers;

import com.example.spiceclub.models.Blog;
import com.example.spiceclub.repositories.BlogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class blogController {

   @Autowired
   private BlogRepository blogs;


    @GetMapping("/blogs")
    public Iterable<Blog> getBlogs() {

        return blogs.findAll();
    }



    @GetMapping("/blogs/{id}")
    public Blog getBlogsById(@PathVariable Long id) {
        return blogs.findById(id).get();
    }


    @PostMapping("/blogs")
    public Blog addSpices(@RequestBody Blog newBlog) {

        return blogs.save(newBlog);
    }


    @PatchMapping("/blogs/{id}")
    public void patchBlogsById(@PathVariable Long id, @RequestBody Blog blogToUpdate) {
        blogs.findById(id).map(foundBlog -> {
            if (blogToUpdate.getTitle() != null) foundBlog.setTitle(blogToUpdate.getTitle());
            if (blogToUpdate.getImage() != null) foundBlog.setImage(blogToUpdate.getImage());
            if (blogToUpdate.getDescription() != null) foundBlog.setDescription(blogToUpdate.getDescription());

            blogs.save(foundBlog);
            return "Blog updated";
        }).orElse("Blog not found");

    }

    @PutMapping("/blog/{id}")
    public String updateBlogById(@PathVariable Long id, @RequestBody Blog blogToUpdate) {
        if (blogs.existsById(id)) {
            blogToUpdate.setId(id);
            blogs.save(blogToUpdate);
            return "Blog was created";
        } else {
            return "Blog not found";
        }
    }

    @DeleteMapping("/blogs/{id}")
    public void deleteBlogsById(@PathVariable Long id) {
        blogs.deleteById(id);
    }


}
