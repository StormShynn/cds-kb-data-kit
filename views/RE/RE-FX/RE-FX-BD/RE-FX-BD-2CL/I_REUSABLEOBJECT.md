---
name: I_REUSABLEOBJECT
description: Reusableobject
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
  - interface-view
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REUSABLEOBJECT

**Reusableobject**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `RealEstateUsableObjectUUID` | `REGenericRentalObjectUUID` |
| `REGenericRentalObjectType` | `REGenericRentalObjectType` |
| `InternalRealEstateNumber` | `InternalRealEstateNumber` |
| `REStatusObject` | `REStatusObject` |
| `RealEstateUsableObjectOID` | `REGenericRentalObjectOID` |
| `REGnrcRntlObjectAlternativeID` | `REGnrcRntlObjectAlternativeID` |
| `RealEstateUsableObjectNumber` | `cast( REGenericRentalObjectNumber as regogonrusable preserving type )` |
| `REUsableObjectName` | `cast( REGenericRentalObjectName as regovdmxusableobject preserving type )` |
| `REIdentificationKey` | `REIdentificationKey` |
| `CompanyCode` | `CompanyCode` |
| `ValidityStartDate` | `ValidityStartDate` |
| `ValidityEndDate` | `ValidityEndDate` |
| `REAuthorizationGroup` | `REAuthorizationGroup` |
| `REGnrcRentalObjUsageCategory` | `REGnrcRentalObjUsageCategory` |
| `REGenericRentalObjectUsageType` | `cast( REGenericRentalObjectUsageType as regovdmusableobjusagetype preserving type )` |
| `REGenericRentalObjParentUUID` | `REGenericRentalObjParentUUID` |
| `REGnrcRentalObjPortfolioID` | `REGnrcRentalObjPortfolioID` |
| `REGnrcRentalObjOwnershipID` | `REGnrcRentalObjOwnershipID` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LocalLastChangeDateTime` | `LocalLastChangeDateTime` |
| `_REUsblObjToRntblObjAssgmt` | *Association* |
| `_RERntblObjToUsblObjAssgmt` | *Association* |
| `_REUsableObjectMeasurement` | *Association* |
| `_REUsblObjLdngAcctAssgmtObj` | *Association* |
| `_REUsblObjAddlAcctAssgmtObj` | *Association* |
| `_REUsblObjArchtrUsage` | *Association* |
| `_REUsableObjectStatusObject` | *Association* |
| `_REKeyAssgmt` | *Association* |
| `_CompanyCode` | *Association* |
| `_REAuthorizationGroup` | *Association* |
| `_REGnrcRentalObjUsageCategory` | *Association* |
| `_REGnrcRentalObjUsageType` | *Association* |
| `_REGnrcRentalObjOwnership` | *Association* |
| `_REGnrcRentalObjPortfolio` | *Association* |
| `_REGenericRentalObjectType` | *Association* |
| `_REArchitectureObject` | *Association* |
| `_StatusObject` | *Association* |
| `_StatusObjectStatus` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REUsblObjToRntblObjAssgmt` | `I_RERntblObjToUsblObjAssgmt` | [0..*] |
| `_RERntblObjToUsblObjAssgmt` | `I_REUsblObjToRntblObjAssgmt` | [0..*] |
| `_REUsableObjectMeasurement` | `I_REUsableObjectMeasurement` | [0..*] |
| `_REUsblObjLdngAcctAssgmtObj` | `I_REUsblObjLdngAcctAssgmtObj` | [0..*] |
| `_REUsblObjAddlAcctAssgmtObj` | `I_REUsblObjAddlAcctAssgmtObj` | [0..*] |
| `_REUsblObjArchtrUsage` | `I_REUsblObjArchtrUsage` | [0..*] |
| `_REUsableObjectStatusObject` | `I_REUsableObjectStatusObject` | [0..*] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_StatusObject', '_StatusObjectStatus']
}
@EndUserText.label: 'Real Estate Usable Object'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'RealEstateUsableObjectUUID',
  semanticKey: ['RealEstateUsableObjectNumber'],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  objectIdentifier.oidElement: 'RealEstateUsableObjectOID',
  sapObjectNodeType.name: 'RealEstateUsableObject'
}
@ODM.oid: 'RealEstateUsableObjectOID'
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@VDM.viewType: #COMPOSITE

define view entity I_REUsableObject
  as select from I_REGenericRentalObject

  association [0..*] to I_RERntblObjToUsblObjAssgmt as _REUsblObjToRntblObjAssgmt on $projection.RealEstateUsableObjectUUID = _REUsblObjToRntblObjAssgmt.RealEstateUsableObjectUUID
  association [0..*] to I_REUsblObjToRntblObjAssgmt as _RERntblObjToUsblObjAssgmt on $projection.RealEstateUsableObjectUUID = _RERntblObjToUsblObjAssgmt.RealEstateUsableObjectUUID

  association [0..*] to I_REUsableObjectMeasurement  as _REUsableObjectMeasurement  on $projection.RealEstateUsableObjectUUID = _REUsableObjectMeasurement.RealEstateUsableObjectUUID
  association [0..*] to I_REUsblObjLdngAcctAssgmtObj as _REUsblObjLdngAcctAssgmtObj on $projection.RealEstateUsableObjectUUID = _REUsblObjLdngAcctAssgmtObj.RealEstateUsableObjectUUID
  association [0..*] to I_REUsblObjAddlAcctAssgmtObj as _REUsblObjAddlAcctAssgmtObj on $projection.RealEstateUsableObjectUUID = _REUsblObjAddlAcctAssgmtObj.RealEstateUsableObjectUUID
  association [0..*] to I_REUsblObjArchtrUsage       as _REUsblObjArchtrUsage       on $projection.RealEstateUsableObjectUUID = _REUsblObjArchtrUsage.RealEstateUsableObjectUUID
  association [0..*] to I_REUsableObjectStatusObject as _REUsableObjectStatusObject on $projection.RealEstateUsableObjectUUID = _REUsableObjectStatusObject.RealEstateUsableObjectUUID

{
  key REGenericRentalObjectUUID                                                           as RealEstateUsableObjectUUID,
      @ObjectModel.foreignKey.association: '_REGenericRentalObjectType'
      REGenericRentalObjectType,
      InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_StatusObject'
      REStatusObject,
      REGenericRentalObjectOID                                                            as RealEstateUsableObjectOID,
      REGnrcRntlObjectAlternativeID,
      cast( REGenericRentalObjectNumber as regogonrusable preserving type )               as RealEstateUsableObjectNumber,
      cast( REGenericRentalObjectName   as regovdmxusableobject preserving type )         as REUsableObjectName,
      REIdentificationKey,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      ValidityStartDate,
      ValidityEndDate,
      @ObjectModel.foreignKey.association: '_REAuthorizationGroup'
      REAuthorizationGroup,
      @ObjectModel.foreignKey.association: '_REGnrcRentalObjUsageCategory'
      REGnrcRentalObjUsageCategory,
      @ObjectModel.foreignKey.association: '_REGnrcRentalObjUsageType'
      cast( REGenericRentalObjectUsageType as regovdmusableobjusagetype preserving type ) as REGenericRentalObjectUsageType,
      @ObjectModel.foreignKey.association: '_REArchitectureObject'
      REGenericRentalObjParentUUID,
      @ObjectModel.foreignKey.association: '_REGnrcRentalObjPortfolio'
      REGnrcRentalObjPortfolioID,
      @ObjectModel.foreignKey.association: '_REGnrcRentalObjOwnership'
      REGnrcRentalObjOwnershipID,

      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangeDateTime,

      /* Associations */
      _REKeyAssgmt,
      _CompanyCode,
      _REAuthorizationGroup,
      _REGnrcRentalObjUsageCategory,
      _REGnrcRentalObjUsageType,
      _REGnrcRentalObjOwnership,
      _REGnrcRentalObjPortfolio,
//      _REParentGenericRentalObject,
      _REGenericRentalObjectType,
      _REArchitectureObject,
      _StatusObject,
      _StatusObjectStatus,
      _REUsblObjToRntblObjAssgmt,
      _RERntblObjToUsblObjAssgmt,
      _REUsableObjectMeasurement,
      _REUsblObjLdngAcctAssgmtObj,
      _REUsblObjAddlAcctAssgmtObj,
      _REUsblObjArchtrUsage,
      _REUsableObjectStatusObject
}
where
     REGenericRentalObjectType = 'U' //Usable Object
```
