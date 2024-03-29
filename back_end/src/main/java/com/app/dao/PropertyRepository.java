package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.app.dto.AddPropertyDTO;
import com.app.dto.FacilityDetailsDTO;
import com.app.dto.OwnerDetailsDTO;
import com.app.dto.PropertyDetailsDTO;
import com.app.pojos.PropertyDetails;
//"select a from BankAccount a join fetch a.acctOwner where a.acctOwner.customerId =:id")
public interface PropertyRepository extends JpaRepository<PropertyDetails, Integer>{
	@Query("select p from PropertyDetails p")
	     List<PropertyDetailsDTO> getAllPropertList();
	
	@Query("select p from PropertyDetails p join fetch p.facilityList where p.id=:propid")
	    FacilityDetailsDTO getFacilityDetails(@Param("propid") int id );

	@Query("select a.city from PropertyDetails a where a.city=:city")
	String existsCityByName(@Param(value="city")String city);
   
	@Query("select a from PropertyDetails a where a.city=:city")
    List <PropertyDetailsDTO> findFlatByCity(@Param(value = "city") String city);
	
	@Query ("select p from PropertyDetails p join fetch p.ownerData where p.id=:propid")
	  OwnerDetailsDTO getOwnerDetails(@Param ("propid") int id);
}
