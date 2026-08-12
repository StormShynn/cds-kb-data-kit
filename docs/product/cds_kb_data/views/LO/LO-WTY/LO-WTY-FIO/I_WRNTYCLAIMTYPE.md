---
name: I_WRNTYCLAIMTYPE
description: "Wrntyclaimtype"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMTYPE

**Wrntyclaimtype**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WarrantyClaimType` | ✓ | |  | `clmty` |  |  |
| `WarrantyClaimVersionCategory` |  | |  | `start_kateg` |  |  |
| `WarrantyClaimTypeUsage` |  | |  | `clmty_usage` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WrntyClaimTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warrnty Claim Type'
@ObjectModel:{
    representativeKey: 'WarrantyClaimType',
    usageType:{
        dataClass       : #CUSTOMIZING,
        serviceQuality  : #A,
        sizeCategory    : #S
        },
        modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@Analytics:{ dataCategory: #DIMENSION,
             dataExtraction.enabled: true,
             internalName:#LOCAL }
@Analytics.technicalName: 'IWRNTYCLMTYPE'
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@VDM.viewType: #BASIC //*******Modernization Task********
//@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WrntyClaimType
  as select from cwty001
  association [0..*] to I_WrntyClaimTypeText as _Text on $projection.WarrantyClaimType = _Text.WarrantyClaimType
{
  key clmty as WarrantyClaimType,
      start_kateg as WarrantyClaimVersionCategory,
      clmty_usage as WarrantyClaimTypeUsage ,
      _Text

}
```
