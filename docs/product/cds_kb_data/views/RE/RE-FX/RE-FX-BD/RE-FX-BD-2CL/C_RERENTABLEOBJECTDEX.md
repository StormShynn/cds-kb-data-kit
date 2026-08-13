---
name: C_RERENTABLEOBJECTDEX
description: "Rerentableobjectdex"
semantic_vi: "View CDS Rerentableobjectdex hiển thị một tập hợp các đối tượng cho thuê trong bất động sản, bao gồm UUID, loại cho thuê chung và trạng thái. Nó được sử dụng để trích xuất dữ liệu cho phân tích hoặc tích hợp với các hệ thống khác."
keywords:
  - "rentable object"
  - "object cho thuê"
  - "real estate"
  - "bất động sản"
  - "rental object"
  - "uuid"
  - "sap cds view"
  - "view dữ liệu"
  - "data extraction"
semantic_en: "The Rerentableobjectdex CDS view exposes a collection of rentable objects in real estate, including their UUIDs, generic rental types, and status. It is used to extract data for analysis or integration with other systems."
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: yes
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
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_RERENTABLEOBJECTDEX

**Rerentableobjectdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateRentableObjectUUID` | ✓ | |  |  |  |  |
| `REGenericRentalObjectType` |  | |  |  |  |  |
| `InternalRealEstateNumber` |  | |  |  |  |  |
| `REStatusObject` |  | |  |  |  |  |
| `RealEstateRentableObjectOID` |  | |  |  |  |  |
| `REGnrcRntlObjectAlternativeID` |  | |  |  |  |  |
| `REGnrcRentalObjPortfolioID` |  | |  |  |  |  |
| `RealEstateRentableObjectNumber` |  | |  |  |  |  |
| `RERentableObjectName` |  | |  |  |  |  |
| `REIdentificationKey` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `REAuthorizationGroup` |  | |  |  |  |  |
| `REGnrcRentalObjUsageCategory` |  | |  |  |  |  |
| `REGenericRentalObjectUsageType` |  | |  |  |  |  |
| `REGenericRentalObjParentUUID` |  | |  |  |  |  |
| `RERentableObjectCategory` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LocalLastChangeDateTime` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_RERentableObject` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extraction RE Rentable Object'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Analytics.dataExtraction.delta.byElement.name:'LastChangeDateTime'
@Analytics.dataExtraction.delta.byElement.maxDelayInSeconds: 1800


@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'RealEstateRentableObjectUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_RERentableObjectDEX 
  as select from I_RERentableObject
  
  association [1..1] to E_RERentableObject as _Extension  on  $projection.RealEstateRentableObjectUUID = _Extension.RealEstateRentableObjectUUID
{
  key RealEstateRentableObjectUUID,
      REGenericRentalObjectType,
      InternalRealEstateNumber,
      REStatusObject,
      RealEstateRentableObjectOID,
      REGnrcRntlObjectAlternativeID,
      REGnrcRentalObjPortfolioID,
      RealEstateRentableObjectNumber,
      RERentableObjectName,
      REIdentificationKey,
      CompanyCode,
      ValidityStartDate,
      ValidityEndDate,
      REAuthorizationGroup,
      REGnrcRentalObjUsageCategory,
      REGenericRentalObjectUsageType,
      REGenericRentalObjParentUUID,
      RERentableObjectCategory,
      CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      LocalLastChangeDateTime

//      _REKeyAssgmt,
//      _CompanyCode,
//      _REAuthorizationGroup,
//      _REGnrcRentalObjPortfolio,
//      _REGnrcRentalObjUsageCategory,
//      _REGnrcRentalObjUsageType,
//      _REParentGenericRentalObject,
//      _RERentableObjectCategory,
//      _REArchitectureObject,
//      _StatusObject,
//      _StatusObjectStatus,
//      _RERntblObjToUsblObjAssgmt

}
```
