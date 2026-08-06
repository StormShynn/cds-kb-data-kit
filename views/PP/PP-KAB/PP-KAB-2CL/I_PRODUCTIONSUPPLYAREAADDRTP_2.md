---
name: I_PRODUCTIONSUPPLYAREAADDRTP_2
description: Productionsupplyareaaddrtp 2
app_component: PP-KAB-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - interface-view
  - transactional-processing
  - product
  - component:PP-KAB-2CL
  - lob:Manufacturing
---
# I_PRODUCTIONSUPPLYAREAADDRTP_2

**Productionsupplyareaaddrtp 2**

| Property | Value |
|---|---|
| App Component | `PP-KAB-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProductionSupplyArea` | `ProductionSupplyArea` |
| key `Plant` | `Plant` |
| key `AddressRepresentationCode` | `AddressRepresentationCode` |
| `ProductionSupplyAreaAddressID` | `ProductionSupplyAreaAddressID` |
| `AddresseeName1` | `AddresseeName1` |
| `AddresseeName2` | `AddresseeName2` |
| `Building` | `Building` |
| `StreetName` | `StreetName` |
| `HouseNumber` | `HouseNumber` |
| `StreetPrefixName1` | `StreetPrefixName1` |
| `StreetPrefixName2` | `StreetPrefixName2` |
| `StreetSuffixName1` | `StreetSuffixName1` |
| `StreetSuffixName2` | `StreetSuffixName2` |
| `CityName` | `CityName` |
| `PostalCode` | `PostalCode` |
| `Region` | `Region` |
| `Country` | `Country` |
| `_ProductionSupplyArea` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Production Supply Area Address - TP'

@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #MASTER}

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.sapObjectNodeType.name: 'ProductionSupplyAreaAddress'
@Metadata.ignorePropagatedAnnotations: true

define view entity I_ProductionSupplyAreaAddrTP_2 as projection on R_ProductionSupplyAreaAddrTP {

  key ProductionSupplyArea,
  key Plant,
  key AddressRepresentationCode,
  ProductionSupplyAreaAddressID,
  AddresseeName1,
  AddresseeName2,
  Building,
  StreetName,
  HouseNumber,
  StreetPrefixName1,
  StreetPrefixName2,
  StreetSuffixName1,
  StreetSuffixName2,
  CityName,
  PostalCode,
  Region,
  Country,
  
  /* Associations */
  _ProductionSupplyArea: redirected to parent I_ProductionSupplyAreaTP_2
}
```
