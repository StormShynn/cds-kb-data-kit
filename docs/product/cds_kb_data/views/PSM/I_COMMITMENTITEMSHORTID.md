---
name: I_COMMITMENTITEMSHORTID
description: "Commitmentitemshortid"
app_component: PSM
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
  - PSM
  - interface-view
  - item-level
  - component:PSM
  - lob:Other
---
# I_COMMITMENTITEMSHORTID

**Commitmentitemshortid**

| Property | Value |
|---|---|
| App Component | `PSM` |
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
| `CommitmentItemShortID` | ✓ | |  | `cast( fipos as fmis_ci_internalname preserving type )` |  |  |
| `CommitmentItem` |  | |  | `fipex` |  |  |
| `_CommitmentItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CommitmentItem` | `I_CommitmentItem` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Commitment Item Short ID'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: {
  usageType: {
    sizeCategory: #M,
    serviceQuality: #A,
    dataClass: #MASTER
  },
  representativeKey: 'CommitmentItemShortID',
  supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                           #CDS_MODELING_DATA_SOURCE,
                           #SQL_DATA_SOURCE ],
  modelingPattern: #NONE
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'ICOMMITEMSID'
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations:true
define view I_CommitmentItemShortID
  as select from fmfxpo

  association [0..*] to I_CommitmentItem as _CommitmentItem on $projection.CommitmentItemShortID = _CommitmentItem.CommitmentItemShortID

{

  key cast( fipos as fmis_ci_internalname preserving type ) as CommitmentItemShortID,
      fipex                                                 as CommitmentItem,

      _CommitmentItem

};
```
