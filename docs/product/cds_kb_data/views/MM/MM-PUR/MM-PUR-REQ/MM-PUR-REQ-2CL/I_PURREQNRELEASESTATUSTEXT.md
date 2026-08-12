---
name: I_PURREQNRELEASESTATUSTEXT
description: "Purreqnreleasestatustext"
app_component: MM-PUR-REQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - text-view
  - lease
  - text
  - status
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURREQNRELEASESTATUSTEXT

**Purreqnreleasestatustext**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurReqnReleaseStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as banpr preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `PurReqnReleaseStatusDesc` |  | |  | `ddtext` |  |  |
| `_PurReqnReleaseStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurReqnReleaseStatus` | `I_PurReqnReleaseStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPURREQNRELSTST'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Release Status of PurReqn - Text'
@ObjectModel.representativeKey: 'PurReqnReleaseStatus'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_PurReqnReleaseStatusText as select from dd07t
association [0..1] to I_PurReqnReleaseStatus as _PurReqnReleaseStatus on $projection.PurReqnReleaseStatus = _PurReqnReleaseStatus.PurReqnReleaseStatus
association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
 {
 key cast(substring(domvalue_l, 1, 2) as banpr preserving type)   as PurReqnReleaseStatus,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                 as Language,
      @Semantics.text
      ddtext                                                                     as PurReqnReleaseStatusDesc,

      /* Associations */
      _Language,
      _PurReqnReleaseStatus
}
where
      domname  = 'BANPR'
  and as4local = 'A';
```
