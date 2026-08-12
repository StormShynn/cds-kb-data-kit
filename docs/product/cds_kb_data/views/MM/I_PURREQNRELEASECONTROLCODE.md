---
name: I_PURREQNRELEASECONTROLCODE
description: "Purreqnreleasecontrolcode"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - interface-view
  - lease
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURREQNRELEASECONTROLCODE

**Purreqnreleasecontrolcode**

| Property | Value |
|---|---|
| App Component | `MM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurReqnReleaseControlCode` | ✓ | |  | `frgkz` |  |  |
| `_PurReqnReleaseControlCodeT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurReqnReleaseControlCodeT` | `I_PurReqnReleaseControlCodeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'PurReqnReleaseControlCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.sqlViewName: 'IPR_RELCONCODE'
@EndUserText.label: 'Release Indicator in PurReqn'
@VDM.viewType : #BASIC
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

define view I_PurReqnReleaseControlCode
  as select from t161s
  association [0..*] to I_PurReqnReleaseControlCodeT as _PurReqnReleaseControlCodeT on $projection.PurReqnReleaseControlCode = _PurReqnReleaseControlCodeT.PurReqnReleaseControlCode
{

  key frgkz as PurReqnReleaseControlCode,

      _PurReqnReleaseControlCodeT
}
```
