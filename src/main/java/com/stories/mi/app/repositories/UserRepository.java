package com.stories.mi.app.repositories;

import com.stories.mi.app.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query(value = "SELECT * FROM USERS ORDER BY ID LIMIT :limit", nativeQuery = true)
    List<User> findByTop(@Param("limit") Integer limit);
}
