---
name: I_QLTYMSTRDATAAUTHZNGROUPTXT
description: Qltymstrdataauthzngrouptxt
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
# I_QLTYMSTRDATAAUTHZNGROUPTXT

**Qltymstrdataauthzngrouptxt**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `QltyMstrDataAuthznGroupTxt` |  | |  | `cast( tq01e.kurztext as vdm_qmastauth_text preserving type )` |  |  |
| `_QltyMstrDataAuthorizationGrp` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_QltyMstrDataAuthorizationGrp` | `I_QltyMstrDataAuthorizationGrp` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Authzn Group for Qlty Master Data - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: {
        dataClass: #CUSTOMIZING,
        sizeCategory: #M,
        serviceQuality: #A
    },
    dataCategory: #TEXT,
    representativeKey: 'QltyMstrDataAuthorizationGroup'
}
@Analytics.technicalName: 'IQMDAUTHGRPT'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
define view entity I_QltyMstrDataAuthznGroupTxt as select from tq01e

   association [1..1] to I_QltyMstrDataAuthorizationGrp as _QltyMstrDataAuthorizationGrp
      on $projection.QltyMstrDataAuthorizationGroup = _QltyMstrDataAuthorizationGrp.QltyMstrDataAuthorizationGroup

   association [0..1] to I_Language as _Language
      on $projection.Language = _Language.Language
      
{
   @ObjectModel.foreignKey.association: '_QltyMstrDataAuthorizationGrp'
   @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
   key tq01e.qmastauth as QltyMstrDataAuthorizationGroup,
   @Semantics.language: true
   key tq01e.spras     as Language,

   @Semantics.text: true
   @Search: { defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.7 }
   cast( tq01e.kurztext as vdm_qmastauth_text preserving type )  as QltyMstrDataAuthznGroupTxt,

   /* Associations */
   _QltyMstrDataAuthorizationGrp,
   _Language
}
```
