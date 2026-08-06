---
name: I_MATLQUALITYAUTHGROUPVH
description: Matlqualityauthgroupvh
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
# I_MATLQUALITYAUTHGROUPVH

**Matlqualityauthgroupvh**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MatlQualityAuthorizationGroup` | `MatlQualityAuthorizationGroup` |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Material Authorization Group for QM'
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
    dataClass: #TRANSACTIONAL
  },
  dataCategory: #VALUE_HELP,
  representativeKey: 'MatlQualityAuthorizationGroup'
}
@Search.searchable: true
define view entity I_MatlQualityAuthGroupVH
  as select from I_MatlQualityAuthGroup
{
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      @ObjectModel.text.element: [ 'MatlQltyAuthorizationGrpText' ]     
  key MatlQualityAuthorizationGroup,

      @Semantics.text:true
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.7, ranking: #LOW }
      _Text[1: Language = $session.system_language].MatlQltyAuthorizationGrpText
}
```
