---
name: C_REUSABLEOBJECTDEX
description: Reusableobjectdex
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
# C_REUSABLEOBJECTDEX

**Reusableobjectdex**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RealEstateUsableObjectUUID` | ✓ | |  |  |
| `REGenericRentalObjectType` |  | |  |  |
| `InternalRealEstateNumber` |  | |  |  |
| `REStatusObject` |  | |  |  |
| `RealEstateUsableObjectOID` |  | |  |  |
| `REGnrcRntlObjectAlternativeID` |  | |  |  |
| `RealEstateUsableObjectNumber` |  | |  |  |
| `REUsableObjectName` |  | |  |  |
| `REIdentificationKey` |  | |  |  |
| `CompanyCode` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `REAuthorizationGroup` |  | |  |  |
| `REGnrcRentalObjUsageCategory` |  | |  |  |
| `REGenericRentalObjectUsageType` |  | |  |  |
| `REGenericRentalObjParentUUID` |  | |  |  |
| `REGnrcRentalObjPortfolioID` |  | |  |  |
| `REGnrcRentalObjOwnershipID` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `LocalLastChangeDateTime` |  | |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Extraction RE Usable Object'
@VDM.viewType: #CONSUMPTION
@Analytics:{ 
  //dataCategory: #DIMENSION,
  dataExtraction:{enabled: true},
//     delta.changeDataCapture.automatic: true},
  internalName:#LOCAL 
}

@Analytics.dataExtraction.delta.byElement.name:'LastChangeDateTime'
@Analytics.dataExtraction.delta.byElement.maxDelayInSeconds: 1800

@Metadata.ignorePropagatedAnnotations:true 
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'RealEstateUsableObjectUUID'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET]   
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L

define view entity C_REUsableObjectDEX 
  as select from I_REUsableObject

{
  key RealEstateUsableObjectUUID,
      REGenericRentalObjectType,
      InternalRealEstateNumber,
      REStatusObject,
      RealEstateUsableObjectOID,
      REGnrcRntlObjectAlternativeID,
      RealEstateUsableObjectNumber,
      REUsableObjectName,
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
      CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      LocalLastChangeDateTime
      
//      _REKeyAssgmt,
//      _CompanyCode,
//      _REAuthorizationGroup,
//      _REGnrcRentalObjUsageCategory,
//      _REGnrcRentalObjUsageType,
//      _REGnrcRentalObjOwnership,
//      _REGnrcRentalObjPortfolio,
//      _REParentGenericRentalObject,
//      _REGenericRentalObjectType,
//      _REArchitectureObject,
//      _StatusObject,
//      _StatusObjectStatus,
//      _REUsblObjToRntblObjAssgmt       
}
```
