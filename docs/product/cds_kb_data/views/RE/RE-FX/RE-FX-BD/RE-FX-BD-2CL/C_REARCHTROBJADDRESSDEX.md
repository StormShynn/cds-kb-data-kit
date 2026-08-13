---
name: C_REARCHTROBJADDRESSDEX
description: "Rearchtrobjaddressdex"
semantic_vi: "View C_REARCHTROBJADDRESSDEX cung cấp địa chỉ đối tượng bất động sản, có thể được sử dụng để lấy và hiển thị thông tin địa chỉ cho đối tượng bất động sản trong thành phần RE-FX-BD-2CL."
keywords:
  - "real estate"
  - "address"
  - "object"
  - "re-fx-bd-2cl"
  - "component"
  - "consumption view"
  - "data extraction"
  - "address data"
  - "bất động sản"
  - "địa chỉ"
  - "đối tượng"
  - "thành phần"
semantic_en: "The C_REARCHTROBJADDRESSDEX view provides real estate object addresses, which can be used to retrieve and display address information for real estate objects in the RE-FX-BD-2CL component."
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REArchitectureObjectUUID` | ✓ | | `_REArchitectureObjectData` | `REArchitectureObjectUUID` |  |  |
| `InternalRealEstateNumber` |  | | `_REObjectAddress` | `InternalRealEstateNumber` |  |  |
| `AddressID` |  | | `_REObjectAddress` | `AddressID` |  |  |
| `REAddressObjType` |  | | `_REObjectAddress` | `REAddressObjType` |  |  |
| `StreetName` |  | | `_REObjectAddress._Address` | `StreetName` |  |  |
| `HouseNumber` |  | | `_REObjectAddress._Address` | `HouseNumber` |  |  |
| `CityName` |  | | `_REObjectAddress._Address` | `CityName` |  |  |
| `PostalCode` |  | | `_REObjectAddress._Address` | `PostalCode` |  |  |
| `Country` |  | | `_REObjectAddress._Address` | `Country` |  |  |
| `Region` |  | | `_REObjectAddress._Address` | `Region` |  |  |
| `SecondaryRegionName` |  | | `_REObjectAddress._Address` | `SecondaryRegionName` |  |  |
| `StreetPrefixName` |  | | `_REObjectAddress._Address` | `StreetPrefixName1` |  |  |
| `AdditionalStreetPrefixName` |  | | `_REObjectAddress._Address` | `StreetPrefixName2` |  |  |
| `StreetSuffixName` |  | | `_REObjectAddress._Address` | `StreetSuffixName1` |  |  |
| `AdditionalStreetSuffixName` |  | | `_REObjectAddress._Address` | `StreetSuffixName2` |  |  |
| `HouseNumberSupplementText` |  | | `_REObjectAddress._Address` | `HouseNumberSupplementText` |  |  |
| `District` |  | |  | `cast(_REObjectAddress._Address.DistrictName as ort02_gp)` |  |  |
| `Building` |  | | `_REObjectAddress._Address` | `Building` |  |  |
| `Floor` |  | | `_REObjectAddress._Address` | `Floor` |  |  |
| `RoomNumber` |  | | `_REObjectAddress._Address` | `RoomNumber` |  |  |
| `TertiaryRegionName` |  | | `_REObjectAddress._Address` | `TertiaryRegionName` |  |  |
| `_REArchitectureObject` | | ✓ | | | | |

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
