---
name: I_WRNTYCLAIMOBJECTTYPE
description: Wrntyclaimobjecttype
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
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
# I_WRNTYCLAIMOBJECTTYPE

**Wrntyclaimobjecttype**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `WarrantyObjectType` | ✓ | |  | `relty` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WrntyClaimObjectTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Reference Object Type'
@ObjectModel:{
    representativeKey: 'WarrantyObjectType',
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S
        },
     modelingPattern: #ANALYTICAL_DIMENSION,
     supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
@VDM.viewType: #BASIC //*******Modernization Task********
//@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics:{
             dataCategory: #DIMENSION,
             dataExtraction.enabled: true
           }
@Analytics.technicalName: 'IWRNTYCLMOT'
@Analytics.internalName:#LOCAL
@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WrntyClaimObjectType
  as select from wty_relob_tab
  association [1..*] to I_WrntyClaimObjectTypeText as _Text on $projection.WarrantyObjectType = _Text.WarrantyObjectType
{
  key relty as WarrantyObjectType,
      _Text

}
where
     relty = 'EQUI'
  or relty = 'FUNC'
```
