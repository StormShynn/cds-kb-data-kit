---
name: I_QUALITYMGMTCTRLKEYVH
description: Qualitymgmtctrlkeyvh
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - value-help
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_QUALITYMGMTCTRLKEYVH

**Qualitymgmtctrlkeyvh**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `QualityMgmtCtrlKey` | ✓ | |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Quality Management Control Key'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
     }
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel: {
  usageType:{
    serviceQuality: #B,
    sizeCategory: #S,
    dataClass: #ORGANIZATIONAL
  },
  dataCategory: #VALUE_HELP,
  resultSet.sizeCategory: #XS,
  representativeKey: 'QualityMgmtCtrlKey'
}
@Search.searchable: true
define view entity I_QualityMgmtCtrlKeyVH
  as select from I_QualityMgmtCtrlKey
{
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      @ObjectModel.text.element: [ 'QualityMgmtCtrlKeyText' ]
  key QualityMgmtCtrlKey,

      @Semantics.text:true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.7, ranking: #LOW }
      _Text[1: Language = $session.system_language].QualityMgmtCtrlKeyText
}
```
