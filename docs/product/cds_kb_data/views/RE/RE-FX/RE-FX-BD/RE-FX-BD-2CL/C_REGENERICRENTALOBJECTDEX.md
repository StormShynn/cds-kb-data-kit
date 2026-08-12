---
name: C_REGENERICRENTALOBJECTDEX
description: "Regenericrentalobjectdex"
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
  - component:RE-FX-BD-2CL
  - lob:Other
---
# C_REGENERICRENTALOBJECTDEX

**Regenericrentalobjectdex**

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
| `REGenericRentalObjectUUID` | ✓ | |  |  |  |  |
| `REGenericRentalObjectType` |  | |  |  |  |  |
| `InternalRealEstateNumber` |  | |  |  |  |  |
| `REStatusObject` |  | |  |  |  |  |
| `REGenericRentalObjectOID` |  | |  |  |  |  |
| `REGenericRentalObjectNumber` |  | |  |  |  |  |
| `REGnrcRntlObjectAlternativeID` |  | |  |  |  |  |
| `REGenericRentalObjectName` |  | |  |  |  |  |
| `REIdentificationKey` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `REAuthorizationGroup` |  | |  |  |  |  |
| `REGnrcRentalObjUsageCategory` |  | |  |  |  |  |
| `REGenericRentalObjectUsageType` |  | |  |  |  |  |
| `REGenericRentalObjParentUUID` |  | |  |  |  |  |
| `REGnrcRentalObjPortfolioID` |  | |  |  |  |  |
| `REGnrcRentalObjOwnershipID` |  | |  |  |  |  |
| `RERentableObjectCategory` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LocalLastChangeDateTime` |  | |  |  |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extraction RE Generic Rental Object'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  dataExtraction:{enabled: true},
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Analytics.dataExtraction.delta.byElement.name:'LastChangeDateTime'
@Analytics.dataExtraction.delta.byElement.maxDelayInSeconds: 1800
 

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REGenericRentalObjectUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L


define view entity C_REGenericRentalObjectDEX 
  as select from I_REGenericRentalObject

{
  key REGenericRentalObjectUUID,
      REGenericRentalObjectType,  
      InternalRealEstateNumber,
      REStatusObject,
      REGenericRentalObjectOID,
      REGenericRentalObjectNumber,
      REGnrcRntlObjectAlternativeID,
      REGenericRentalObjectName,
      REIdentificationKey,
      CompanyCode,
      ValidityStartDate,
      ValidityEndDate,
      REAuthorizationGroup,
      REGnrcRentalObjUsageCategory,
      REGenericRentalObjectUsageType,
      REGenericRentalObjParentUUID,
      REGnrcRentalObjPortfolioID,
      REGnrcRentalObjOwnershipID,
      RERentableObjectCategory,
      CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      LocalLastChangeDateTime
      
//      _REKeyAssgmt,
//      _CompanyCode,
//      _REAuthorizationGroup,
//      _REGenericRentalObjectType,
//      _REGnrcRentalObjUsageCategory,
//      _REGnrcRentalObjUsageType,
//      _REParentGenericRentalObject,
//      _REGnrcRentalObjPortfolio,
//      _REGnrcRentalObjOwnership,
//      _RERentableObjectCategory,
//      _REArchitectureObject,
//      _StatusObject,
//      _StatusObjectStatus
 }
```
