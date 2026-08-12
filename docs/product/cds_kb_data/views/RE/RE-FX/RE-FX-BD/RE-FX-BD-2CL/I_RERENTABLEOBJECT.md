---
name: I_RERENTABLEOBJECT
description: "Rerentableobject"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_RERENTABLEOBJECT

**Rerentableobject**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateRentableObjectUUID` | ✓ | |  | `REGenericRentalObjectUUID` |  |  |
| `REGenericRentalObjectType` |  | |  |  |  |  |
| `InternalRealEstateNumber` |  | |  |  |  |  |
| `REStatusObject` |  | |  |  |  |  |
| `RealEstateRentableObjectOID` |  | |  | `REGenericRentalObjectOID` |  |  |
| `REGnrcRntlObjectAlternativeID` |  | |  |  |  |  |
| `REGnrcRentalObjPortfolioID` |  | | `_RERntblObjToUsblObjAssgmt._REUsableObject` | `REGnrcRentalObjPortfolioID` |  |  |
| `RealEstateRentableObjectNumber` |  | |  | `cast( REGenericRentalObjectNumber as regogonrrentable preserving type )` |  |  |
| `RERentableObjectName` |  | |  | `cast( REGenericRentalObjectName as regovdmxrentableobject preserving type )` |  |  |
| `REIdentificationKey` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `REAuthorizationGroup` |  | |  |  |  |  |
| `REGnrcRentalObjUsageCategory` |  | |  |  |  |  |
| `REGenericRentalObjectUsageType` |  | |  | `cast( REGenericRentalObjectUsageType as regovdmrentableobjusagetype preserving type )` |  |  |
| `REGenericRentalObjParentUUID` |  | |  |  |  |  |
| `RERentableObjectCategory` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LocalLastChangeDateTime` |  | |  |  |  |  |
| `_RERntblObjToUsblObjAssgmt` | | ✓ | | | | |
| `_REUsblObjToRntblObjAssgmt` | | ✓ | | | | |
| `_RERntblObjectMeasurement` | | ✓ | | | | |
| `_RERntblObjToContractAssgmt` | | ✓ | | | | |
| `_RERntblObjArchtrUsage` | | ✓ | | | | |
| `_RERntblArchtrObjUsageMsmt` | | ✓ | | | | |
| `_RERntblObjectStatusObject` | | ✓ | | | | |
| `_REKeyAssgmt` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_REAuthorizationGroup` | | ✓ | | | | |
| `_REGnrcRentalObjUsageCategory` | | ✓ | | | | |
| `_REGnrcRentalObjUsageType` | | ✓ | | | | |
| `_RERentableObjectCategory` | | ✓ | | | | |
| `_REArchitectureObject` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_StatusObjectStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RERntblObjToUsblObjAssgmt` | `I_RERntblObjToUsblObjAssgmt` | [1..*] |
| `_REUsblObjToRntblObjAssgmt` | `I_REUsblObjToRntblObjAssgmt` | [1..*] |
| `_RERntblObjectMeasurement` | `I_RERntblObjectMeasurement` | [1..*] |
| `_RERntblObjToContractAssgmt` | `I_RERntblObjToContractAssgmt` | [1..*] |
| `_RERntblObjArchtrUsage` | `I_RERntblObjArchtrUsage` | [1..*] |
| `_RERntblArchtrObjUsageMsmt` | `I_RERntblArchtrObjUsageMsmt` | [1..*] |
| `_RERntblObjectStatusObject` | `I_RERntblObjectStatusObject` | [1..*] |
| `_Extension` | `E_RERentableObject` | [1..1] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_StatusObject', '_StatusObjectStatus']
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@EndUserText.label: 'Real Estate Rentable Object'
@ObjectModel: {
  representativeKey: 'RealEstateRentableObjectUUID',
  semanticKey: ['RealEstateRentableObjectNumber'],
  usageType:{
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateRentableObject',
  objectIdentifier.oidElement: 'RealEstateRentableObjectOID'
}
@ODM.oid: 'RealEstateRentableObjectOID'
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@VDM.viewType: #COMPOSITE
define view entity I_RERentableObject
  as select from I_REGenericRentalObject

  association [1..*] to I_RERntblObjToUsblObjAssgmt as _RERntblObjToUsblObjAssgmt on $projection.RealEstateRentableObjectUUID = _RERntblObjToUsblObjAssgmt.RealEstateRentableObjectUUID
  association [1..*] to I_REUsblObjToRntblObjAssgmt as _REUsblObjToRntblObjAssgmt on $projection.RealEstateRentableObjectUUID = _REUsblObjToRntblObjAssgmt.RealEstateRentableObjectUUID
  
  association [1..*] to I_RERntblObjectMeasurement    as _RERntblObjectMeasurement on $projection.RealEstateRentableObjectUUID = _RERntblObjectMeasurement.RealEstateRentableObjectUUID
  association [1..*] to I_RERntblObjToContractAssgmt  as _RERntblObjToContractAssgmt on $projection.RealEstateRentableObjectUUID = _RERntblObjToContractAssgmt.RealEstateRentableObjectUUID
  association [1..*] to I_RERntblObjArchtrUsage       as _RERntblObjArchtrUsage on $projection.RealEstateRentableObjectUUID = _RERntblObjArchtrUsage.RealEstateRentableObjectUUID
  association [1..*] to I_RERntblArchtrObjUsageMsmt as _RERntblArchtrObjUsageMsmt on $projection.RealEstateRentableObjectUUID = _RERntblArchtrObjUsageMsmt.RealEstateRentableObjectUUID
  association [1..*] to I_RERntblObjectStatusObject as _RERntblObjectStatusObject on $projection.RealEstateRentableObjectUUID = _RERntblObjectStatusObject.RealEstateRentableObjectUUID
  
// extensibility
  association [1..1] to E_RERentableObject          as _Extension                 on $projection.RealEstateRentableObjectUUID = _Extension.RealEstateRentableObjectUUID
{
  key REGenericRentalObjectUUID                                                             as RealEstateRentableObjectUUID,
      REGenericRentalObjectType,
      InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_StatusObject'
      REStatusObject,
      REGenericRentalObjectOID                                                              as RealEstateRentableObjectOID,
      REGnrcRntlObjectAlternativeID,
      //REGnrcRentalObjPortfolioID,
      _RERntblObjToUsblObjAssgmt._REUsableObject.REGnrcRentalObjPortfolioID,
      cast( REGenericRentalObjectNumber as regogonrrentable preserving type )               as RealEstateRentableObjectNumber,
      cast( REGenericRentalObjectName   as regovdmxrentableobject preserving type )         as RERentableObjectName,
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
      cast( REGenericRentalObjectUsageType as regovdmrentableobjusagetype preserving type ) as REGenericRentalObjectUsageType,
      @ObjectModel.foreignKey.association: '_REArchitectureObject'
      REGenericRentalObjParentUUID,
      @ObjectModel.foreignKey.association: '_RERentableObjectCategory'
      RERentableObjectCategory,

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
      //_REGnrcRentalObjPortfolio,
      _REGnrcRentalObjUsageCategory,
      _REGnrcRentalObjUsageType,
      _RERentableObjectCategory,
      _REArchitectureObject,
      _StatusObject,
      _StatusObjectStatus,
      _RERntblObjToUsblObjAssgmt,
      _REUsblObjToRntblObjAssgmt,
      _RERntblObjectMeasurement,
      _RERntblObjToContractAssgmt,
      _RERntblObjArchtrUsage,
      _RERntblArchtrObjUsageMsmt,
      _RERntblObjectStatusObject
}
where
     REGenericRentalObjectType = 'R' //Rentable Object
```
