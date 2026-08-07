---
name: C_REGENERICRENTALOBJECTDEX
description: Regenericrentalobjectdex
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
