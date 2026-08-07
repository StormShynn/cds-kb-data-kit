---
name: I_COMMITMENTITEMSHORTID
description: Commitmentitemshortid
app_component: PSM
software_component: SAPSCORE
release_state: released
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
