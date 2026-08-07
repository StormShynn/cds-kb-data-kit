---
name: I_RECONDITIONPURPOSEEXT
description: "Reconditionpurposeext"
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - pricing-condition
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONDITIONPURPOSEEXT

**Reconditionpurposeext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REExtConditionPurpose` | ✓ | |  | `condpurposeext` |  |  |
| `REIntConditionPurpose` |  | |  | `condpurposeint` |  |  |
| `REPrpsIsAllowedForRentalObject` |  | |  | `cppreroal` |  |  |
| `REPrpsIsAllowedForContract` |  | |  | `cpprecnal` |  |  |
| `REPurposeIsCopiedToObject` |  | |  | `cpprero` |  |  |
| `REPurposeIsCopiedToContract` |  | |  | `cpprecn` |  |  |
| `RETakeOvrToRentalObjIsPossible` |  | |  | `cptakeover` |  |  |
| `_Text` | | ✓ | | | | |
| `_REConditionPurposeInt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RECndnPurposeExtText` | [0..*] |
| `_REConditionPurposeInt` | `I_REConditionPurposeInt` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECNDNPURPEXT'
@EndUserText.label: 'Real Estate External Condition Purpose'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: 'REExtConditionPurpose'
@ObjectModel.semanticKey: ['REExtConditionPurpose']
@VDM.viewType: #BASIC

@ObjectModel: {
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateConditionPurpose'
}
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true

define view entity I_REConditionPurposeExt 
    as select from tivcdcopuext
    association [0..*] to I_RECndnPurposeExtText as _Text on $projection.REExtConditionPurpose = _Text.REExtConditionPurpose
    association [0..1] to I_REConditionPurposeInt as _REConditionPurposeInt on $projection.REIntConditionPurpose = _REConditionPurposeInt.REIntConditionPurpose
{
        @ObjectModel.text.association: '_Text'
    key condpurposeext      as REExtConditionPurpose,
        @ObjectModel.foreignKey.association:  '_REConditionPurposeInt'
        condpurposeint      as REIntConditionPurpose,
        cppreroal           as REPrpsIsAllowedForRentalObject,
        cpprecnal           as REPrpsIsAllowedForContract,
        cpprero             as REPurposeIsCopiedToObject,
        cpprecn             as REPurposeIsCopiedToContract,
        cptakeover          as RETakeOvrToRentalObjIsPossible,
        
        _Text,
        _REConditionPurposeInt
}
```
