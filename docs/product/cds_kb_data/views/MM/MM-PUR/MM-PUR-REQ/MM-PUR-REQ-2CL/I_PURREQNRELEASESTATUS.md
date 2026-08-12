---
name: I_PURREQNRELEASESTATUS
description: "Purreqnreleasestatus"
app_component: MM-PUR-REQ-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-REQ
  - interface-view
  - lease
  - status
  - component:MM-PUR-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURREQNRELEASESTATUS

**Purreqnreleasestatus**

| Property | Value |
|---|---|
| App Component | `MM-PUR-REQ-2CL` |
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
| `PurReqnReleaseStatus` | ✓ | |  | `cast(domvalue_l as banpr)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PurReqnReleaseStatusText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPURREQNRELSTS'
@AbapCatalog.compiler.compareFilter: true
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Release Status of Purchase Requisition'
//@Search.searchable: true
@ObjectModel.representativeKey: 'PurReqnReleaseStatus'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_PurReqnReleaseStatus
  as select from dd07l
  association [0..*] to I_PurReqnReleaseStatusText as _Text
   on $projection.PurReqnReleaseStatus = _Text.PurReqnReleaseStatus
{
      @ObjectModel.text.association: '_Text'
      //@Search.defaultSearchElement: true
      //@Search.fuzzinessThreshold: 0.8
  key cast(domvalue_l as banpr)   as PurReqnReleaseStatus,

      /* Associations */
      _Text
}
where
      domname  = 'BANPR'
  and as4local = 'A';
```
