package com.example.spiceclub;

import com.example.spiceclub.models.Blog;
import com.example.spiceclub.models.Recipe;
import com.example.spiceclub.repositories.BlogRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;

import java.util.Optional;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Rollback(false)
public class BlogRepositoryTest {

    @Autowired
    private BlogRepository blogs;

    @Test
    public void testCreateBlog() {
        Blog blog = new Blog();
        blog.setTitle("Blog1");
        blog.setDescription("boil water add pasta");
        blog.setImage("https://images.arla.com/recordid/74c3865a0e434b278cb1a6e500c5ac6f/spaghetti-bolognese.jpg?crop=(0,1468,0,-2276)&w=1200&h=630&scale=both&format=jpg&quality=80&ak=6826258c&hm=1f740233");

        Blog savedBlog = blogs.save(blog);
        Assertions.assertNotEquals(savedBlog, null);
    }

    @Test
    public void testUpdateBlog() {

        Long blogId = 6L;

        Optional<Blog> optionalBlog = blogs.findById(blogId);
        Blog blog = optionalBlog.get();

        blog.setTitle("Spaghetti Carbonara");
        blogs.save(blog);

        Blog updatedBlog = blogs.findById(blogId).get();
        Assertions.assertEquals(updatedBlog.getTitle(), "Spaghetti Carbonara");
    }

    @Test
    public void testFindBlogById() {
        Long blogId = 6L;

        Optional<Blog> optionalBlog = blogs.findById(blogId);
        Assertions.assertTrue(optionalBlog.isPresent());

    }

    @Test
    public void testDeleteBlog() {

        Long blogId = 6L;
        blogs.deleteById(blogId);

        Optional<Blog> optionalBlog = blogs.findById(blogId);
        Assertions.assertFalse(optionalBlog.isPresent());


    }
}
