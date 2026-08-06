---
name: I_OVERALLBILLINGBLOCKSTATUST
description: Overallbillingblockstatust
app_component: SD-BIL-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-GF
  - interface-view
  - billing
  - status
  - component:SD-BIL-GF-2CL
  - lob:Sales & Distribution
---
# I_OVERALLBILLINGBLOCKSTATUST

**Overallbillingblockstatust**

| Property | Value |
|---|---|
| App Component | `SD-BIL-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `OverallBillingBlockStatus` | `statu` |
| key `Language` | `spras` |
| `OverallBillingBlockStatusDesc` | `bezei` |
| `_OverallBillingBlockStatus` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_OverallBillingBlockStatus` | `I_OverallBillingBlockStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'OverallBillingBlockStatus'
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #SEARCHABLE_ENTITY ]
@EndUserText.label: 'Overall Billing Block Status - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog: { 
  sqlViewName: 'ISDOVRLBIBLKSTST',
  preserveKey: true
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_OverallBillingBlockStatusT
as select from tvbst

association [0..1] to I_OverallBillingBlockStatus as _OverallBillingBlockStatus on $projection.OverallBillingBlockStatus = _OverallBillingBlockStatus.OverallBillingBlockStatus
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_OverallBillingBlockStatus'
    key statu as OverallBillingBlockStatus,
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    @Semantics.text: true
    bezei as OverallBillingBlockStatusDesc,
    
    _OverallBillingBlockStatus,
    _Language
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'FSSTK')
  and ((tvbst.statu = '') or (tvbst.statu = 'B') or (tvbst.statu = 'C'));
```
