---
name: I_PURGRELSTRATEGYCONTROLCODE
description: "Purgrelstrategycontrolcode"
app_component: MM
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
  - interface-view
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGRELSTRATEGYCONTROLCODE

**Purgrelstrategycontrolcode**

| Property | Value |
|---|---|
| App Component | `MM` |
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
| `PurgReleaseStrategyControlCode` | ✓ | |  | `frgke` |  |  |
| `_PurgRelStrategyControlCodeT` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurgRelStrategyControlCodeT` | `I_PurgRelStrategyControlCodeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.representativeKey: 'PurgReleaseStrategyControlCode'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AbapCatalog.sqlViewName: 'IPURRELSTCONCODE'
@EndUserText.label: 'Release Indicator in Purchasing Doc'
@VDM.viewType : #BASIC
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
//Commented by VDM CDS Suite Plugin:@ObjectModel.representativeKey: 'ReleaseCode'
//Commented by VDM CDS Suite Plugin:
define view I_PurgRelStrategyControlCode
  as select from t16fb
  association [0..*] to I_PurgRelStrategyControlCodeT as _PurgRelStrategyControlCodeT on $projection.PurgReleaseStrategyControlCode = _PurgRelStrategyControlCodeT.PurgReleaseStrategyControlCode
{

  key frgke as PurgReleaseStrategyControlCode,

      _PurgRelStrategyControlCodeT

      //KZFRE as ,    GFN not available

      //KZFAE as ,    GFN not available

      //TLFAE as      GFN not available
}
```
