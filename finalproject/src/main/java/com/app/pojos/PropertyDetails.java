package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.*;
import javax.persistence.JoinColumn;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
@Entity
@Table(name="property_details")
public class PropertyDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String address;
	private double rent;
	private String status;
	@Column(name="prop_add_date")
	private LocalDate date;
	@Enumerated(EnumType.STRING)
	@Column(name="property_type",length = 20 )
	private Type propertType;
	@OneToMany(mappedBy = "photoData",cascade = CascadeType.ALL,orphanRemoval = true)
	  @JsonIgnoreProperties("photoData")
	private List<PropertyPhotos>propertyphoto=new ArrayList<>();
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="owner_id")
	@JsonIgnoreProperties("prolist")
	//@JsonIgnore
	private Users ownerData;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="areaid")
	@JsonIgnoreProperties("areaPropData")
	//@JsonIgnore
	private AreaInfo areaData;
	@OneToMany(mappedBy="facilityData",cascade = CascadeType.ALL,orphanRemoval = true)
	@JsonIgnoreProperties("facilityData")
	//@JsonIgnore
	   List<Facilities>facilityList=new ArrayList<>();
	
     public PropertyDetails()
     {
    	 
     }

	public PropertyDetails(String address, double rent, String status, LocalDate date) {
		super();
		this.address = address;
		this.rent = rent;
		this.status = status;
		this.date = date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public double getRent() {
		return rent;
	}

	public void setRent(double rent) {
		this.rent = rent;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public List<PropertyPhotos> getPropertyphoto() {
		return propertyphoto;
	}

	public void setPropertyphoto(List<PropertyPhotos> propertyphoto) {
		this.propertyphoto = propertyphoto;
	}

	public Users getOwnerData() {
		return ownerData;
	}

	public void setOwnerData(Users ownerData) {
		this.ownerData = ownerData;
	}

	
	public Type getPropertType() {
		return propertType;
	}

	public void setPropertType(Type propertType) {
		this.propertType = propertType;
	}

	public AreaInfo getAreaData() {
		return areaData;
	}

	public void setAreaData(AreaInfo areaData) {
		this.areaData = areaData;
	}

	public List<Facilities> getFacilityList() {
		return facilityList;
	}

	public void setFacilityList(List<Facilities> facilityList) {
		this.facilityList = facilityList;
	}

	@Override
	public String toString() {
		return "PropertyDetails [id=" + id + ", address=" + address + ", rent=" + rent + ", status=" + status
				+ ", date=" + date + "]";
	} 
	
}
