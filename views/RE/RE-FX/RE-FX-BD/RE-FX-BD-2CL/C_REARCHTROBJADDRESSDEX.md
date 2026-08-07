---
name: C_REARCHTROBJADDRESSDEX
description: Rearchtrobjaddressdex
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - consumption-view
  - data-extraction
  - address
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_REARCHTROBJADDRESSDEX

**Rearchtrobjaddressdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REArchitectureObjectUUID` | ✓ | | `_REArchitectureObjectData` | `REArchitectureObjectUUID` |
| `InternalRealEstateNumber` |  | | `_REObjectAddress` | `InternalRealEstateNumber` |
| `AddressID` |  | | `_REObjectAddress` | `AddressID` |
| `REAddressObjType` |  | | `_REObjectAddress` | `REAddressObjType` |
| `StreetName` |  | | `_REObjectAddress._Address` | `StreetName` |
| `HouseNumber` |  | | `_REObjectAddress._Address` | `HouseNumber` |
| `CityName` |  | | `_REObjectAddress._Address` | `CityName` |
| `PostalCode` |  | | `_REObjectAddress._Address` | `PostalCode` |
| `Country` |  | | `_REObjectAddress._Address` | `Country` |
| `Region` |  | | `_REObjectAddress._Address` | `Region` |
| `SecondaryRegionName` |  | | `_REObjectAddress._Address` | `SecondaryRegionName` |
| `StreetPrefixName` |  | | `_REObjectAddress._Address` | `StreetPrefixName1` |
| `AdditionalStreetPrefixName` |  | | `_REObjectAddress._Address` | `StreetPrefixName2` |
| `StreetSuffixName` |  | | `_REObjectAddress._Address` | `StreetSuffixName1` |
| `AdditionalStreetSuffixName` |  | | `_REObjectAddress._Address` | `StreetSuffixName2` |
| `HouseNumberSupplementText` |  | | `_REObjectAddress._Address` | `HouseNumberSupplementText` |
| `District` |  | |  | `cast(_REObjectAddress._Address.DistrictName as ort02_gp)` |
| `Building` |  | | `_REObjectAddress._Address` | `Building` |
| `Floor` |  | | `_REObjectAddress._Address` | `Floor` |
| `RoomNumber` |  | | `_REObjectAddress._Address` | `RoomNumber` |
| `TertiaryRegionName` |  | | `_REObjectAddress._Address` | `TertiaryRegionName` |
| `_REArchitectureObject` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REArchitectureObject` | `I_REArchitectureObject` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extraction RE Arch Obj Adress Object'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
  internalName:#LOCAL 
}
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REArchitectureObjectUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REArchtrObjAddressDEX   
 as select from I_REObjectAddress as _REObjectAddress
   inner join   I_REArchitectureObject as _REArchitectureObjectData on _REObjectAddress.InternalRealEstateNumber = _REArchitectureObjectData.InternalRealEstateNumber
 association to I_REArchitectureObject as _REArchitectureObject on $projection.REArchitectureObjectUUID = _REArchitectureObject.REArchitectureObjectUUID
 
{
  key _REArchitectureObjectData.REArchitectureObjectUUID,
       _REObjectAddress.InternalRealEstateNumber,
       _REObjectAddress.AddressID,
       _REObjectAddress.REAddressObjType,
       _REObjectAddress._Address.StreetName, //street
       _REObjectAddress._Address.HouseNumber, //house_num1
       _REObjectAddress._Address.CityName, //city1
       _REObjectAddress._Address.PostalCode, //post_code1
       _REObjectAddress._Address.Country, //country
       _REObjectAddress._Address.Region, //region
       _REObjectAddress._Address.SecondaryRegionName, //secondaryRegion
       //ADDRESS_TEXT
       _REObjectAddress._Address.StreetPrefixName1              as StreetPrefixName, //str_suppl1
       _REObjectAddress._Address.StreetPrefixName2              as AdditionalStreetPrefixName, //str_suppl2
       _REObjectAddress._Address.StreetSuffixName1              as StreetSuffixName, //str_suppl3
       _REObjectAddress._Address.StreetSuffixName2              as AdditionalStreetSuffixName, //location
       _REObjectAddress._Address.HouseNumberSupplementText, // house_num2
       cast(_REObjectAddress._Address.DistrictName as ort02_gp) as District, //city2
       _REObjectAddress._Address.Building, //building
       _REObjectAddress._Address.Floor, //floor
       _REObjectAddress._Address.RoomNumber, //door
       _REObjectAddress._Address.TertiaryRegionName,

       _REObjectAddress._Address,
       _REArchitectureObject
}
where
  _REObjectAddress.InternalRealEstateNumber like 'J8%'
```
