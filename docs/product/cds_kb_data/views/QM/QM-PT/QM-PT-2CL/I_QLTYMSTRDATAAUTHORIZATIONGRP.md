---
name: I_QLTYMSTRDATAAUTHORIZATIONGRP
description: "Qltymstrdataauthorizationgrp"
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
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_QLTYMSTRDATAAUTHORIZATIONGRP

**Qltymstrdataauthorizationgrp**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `QltyMstrDataAuthorizationGroup` | ✓ | |  | `qmastauth` |  |  |
| `_QltyMstrDataAuthznGroupTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QltyMstrDataAuthznGroupTxt` | `I_QltyMstrDataAuthznGroupTxt` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Authzn Group for Quality Master Data'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.representativeKey: 'QltyMstrDataAuthorizationGroup'
@Analytics.technicalName: 'IQMDAUTHGRP'
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A 
}
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_QltyMstrDataAuthorizationGrp as select from tq01d

  association [0..*] to I_QltyMstrDataAuthznGroupTxt as _QltyMstrDataAuthznGroupTxt
     on $projection.QltyMstrDataAuthorizationGroup = _QltyMstrDataAuthznGroupTxt.QltyMstrDataAuthorizationGroup

{
    @ObjectModel.text.association: '_QltyMstrDataAuthznGroupTxt'
    @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
    key tq01d.qmastauth as QltyMstrDataAuthorizationGroup,
    
    /* Associations */
    _QltyMstrDataAuthznGroupTxt  
}
```
