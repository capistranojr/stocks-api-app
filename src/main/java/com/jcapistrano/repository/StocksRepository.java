package com.jcapistrano.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.jcapistrano.entity.Stocks;

@Repository
public interface StocksRepository extends JpaRepository<Stocks, Integer> {

}
