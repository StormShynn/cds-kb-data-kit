---
name: I_REOBJECTTYPEDETAILS
description: Reobjecttypedetails
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_REOBJECTTYPEDETAILS

**Reobjecttypedetails**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `REStatusObject` | ✓ | |  |  |
| `InternalRealEstateNumber` |  | |  |  |
| `RealEstateObjectType` |  | |  |  |
| `REIdentificationKey` |  | |  |  |
| `REIdentification` |  | |  | `cast( concat_with_space(_REObjectTypeText.REObjectTypePrefix, REIdentificationKey,1 ) as recaident)` |
| `REAccountingObjectName` |  | |  | `cast( concat_with_space(_REObjectTypeText.RealEstateObjectTypeName, REIdentificationKey,1 ) as recaident)` |
| `_REKeyAssgmt` | | ✓ | | |
| `_REContract` | | ✓ | | |
| `_REBusinessEntity` | | ✓ | | |
| `_REBuilding` | | ✓ | | |
| `_REProperty` | | ✓ | | |
| `_RERentalObject` | | ✓ | | |
| `_RESettlementUnit` | | ✓ | | |
| `_REIntegrationObject` | | ✓ | | |
| `_REServiceGroup` | | ✓ | | |
| `_REUsableObject` | | ✓ | | |
| `_RERentableObject` | | ✓ | | |
| `_REGenericRentalObject` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REKeyAssgmt` | `I_REKeyAssgmt` | [1..1] |
| `_REObjectTypeText` | `I_REObjectTypeText` | [0..1] |
| `_REContract` | `I_REContract` | [0..1] |
| `_REBusinessEntity` | `I_REBusinessEntity` | [0..1] |
| `_REBuilding` | `I_REBuilding` | [0..1] |
| `_REProperty` | `I_REProperty` | [0..1] |
| `_RERentalObject` | `I_RERentalObject` | [0..1] |
| `_RESettlementUnit` | `I_RESettlementUnit` | [0..1] |
| `_REIntegrationObject` | `I_REIntegrationObject` | [0..1] |
| `_REServiceGroup` | `I_REServiceGroup` | [0..1] |
| `_REUsableObject` | `I_REUsableObject` | [0..1] |
| `_RERentableObject` | `I_RERentableObject` | [0..1] |
| `_REGenericRentalObject` | `I_REGenericRentalObject` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREOBJTYPDET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Object Type Details'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'REStatusObject',
  semanticKey: [ 'REStatusObject' ],
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
  sapObjectNodeType.name: 'RealEstateObjectDetails'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #COMPOSITE

define view entity I_REObjectTypeDetails
  as select from I_REKeyAssgmt as _REObjectTypeDetails

  association [1..1] to I_REKeyAssgmt          as _REKeyAssgmt         on  $projection.REStatusObject = _REKeyAssgmt.REStatusObject
  association [0..1] to I_REObjectTypeText     as _REObjectTypeText    on  _REObjectTypeText.RealEstateObjectType = $projection.RealEstateObjectType
                                                                       and _REObjectTypeText.Language             = $session.system_language
  association [0..1] to I_REContract           as _REContract           on  $projection.REStatusObject = _REContract.REStatusObject
  association [0..1] to I_REBusinessEntity     as _REBusinessEntity     on  $projection.REStatusObject = _REBusinessEntity.REStatusObject
  association [0..1] to I_REBuilding           as _REBuilding           on  $projection.REStatusObject = _REBuilding.REStatusObject
  association [0..1] to I_REProperty           as _REProperty           on  $projection.REStatusObject = _REProperty.REStatusObject
  association [0..1] to I_RERentalObject       as _RERentalObject       on  $projection.REStatusObject = _RERentalObject.REStatusObject
  association [0..1] to I_RESettlementUnit     as _RESettlementUnit     on  $projection.REStatusObject = _RESettlementUnit.REStatusObject
  association [0..1] to I_REIntegrationObject  as _REIntegrationObject  on  $projection.REStatusObject = _REIntegrationObject.REStatusObject
  association [0..1] to I_REServiceGroup       as _REServiceGroup       on  $projection.REStatusObject = _REServiceGroup.REStatusObject
  association [0..1] to I_REUsableObject       as _REUsableObject       on  $projection.REStatusObject = _REUsableObject.REStatusObject
  association [0..1] to I_RERentableObject     as _RERentableObject     on  $projection.REStatusObject = _RERentableObject.REStatusObject
  association [0..1] to I_REGenericRentalObject as _REGenericRentalObject on $projection.REStatusObject = _REGenericRentalObject.REStatusObject
{
  key       REStatusObject                                               as REStatusObject,
            InternalRealEstateNumber,
            RealEstateObjectType,
            REIdentificationKey,
            cast(
            concat_with_space(_REObjectTypeText.REObjectTypePrefix,
            REIdentificationKey,1 ) as recaident)                        as REIdentification,
            cast(
            concat_with_space(_REObjectTypeText.RealEstateObjectTypeName,
            REIdentificationKey,1 ) as recaident)                        as REAccountingObjectName,
            
            _REKeyAssgmt,

            _REContract,
            _REBusinessEntity,
            _REBuilding,
            _REProperty,
            _RERentalObject,
            _RESettlementUnit,
            _REIntegrationObject,
            _REServiceGroup,
            _REUsableObject,
            _RERentableObject,
            _REGenericRentalObject
}
```
