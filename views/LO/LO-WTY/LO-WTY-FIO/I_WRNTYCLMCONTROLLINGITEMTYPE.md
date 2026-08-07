---
name: I_WRNTYCLMCONTROLLINGITEMTYPE
description: "Wrntyclmcontrollingitemtype"
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
  - item-level
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLMCONTROLLINGITEMTYPE

**Wrntyclmcontrollingitemtype**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrntyControllingItemType` | ✓ | |  | `cast( domvalue_l as wty_poskt )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WrntyClaimCtrlgItemTypeText` | [1..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warranty Claim Controlling item type'
@ObjectModel:{
    representativeKey: 'WrntyControllingItemType',
    usageType:{
        dataClass       : #ORGANIZATIONAL,
        serviceQuality  : #A,
        sizeCategory    : #S
        },
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
}
@ObjectModel.sapObjectNodeType.name : 'WarrantyClaim'
//@VDM.viewType: #BASIC *******Modernization Task********
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics:{
             dataCategory: #DIMENSION,
             dataExtraction.enabled: true
           }
@Analytics.technicalName: 'IWRNTYCTRLITMTP'
@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WrntyClmControllingItemType 
as select from dd07l
  association [1..*] to I_WrntyClaimCtrlgItemTypeText as _Text on $projection.WrntyControllingItemType = _Text.WrntyControllingItemType

 {
  @ObjectModel.text.association: '_Text'
  key cast( domvalue_l as wty_poskt ) as WrntyControllingItemType,
  _Text
  
} where domname = 'WTY_POSKT'
    and dd07l.as4local = 'A'
    and dd07l.as4vers  = '0000'
```
