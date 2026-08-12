---
name: I_QLTYMSTRDATAAUTHZNGROUPTXT
description: "Qltymstrdataauthzngrouptxt"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
