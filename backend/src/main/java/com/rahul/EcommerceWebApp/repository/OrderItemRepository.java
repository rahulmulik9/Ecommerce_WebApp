package com.rahul.EcommerceWebApp.repository;

import com.rahul.EcommerceWebApp.entity.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
