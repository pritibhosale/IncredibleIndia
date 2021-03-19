package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.AreaInfo;
import com.app.pojos.City;

public interface CityRepository extends JpaRepository<City, Integer>{
	@Query("select a.cityName from City a where a.cityName=:city")
    String existsCityByName(@Param (value="city")String cityName);
}
