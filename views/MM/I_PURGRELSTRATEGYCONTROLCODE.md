---
name: I_PURGRELSTRATEGYCONTROLCODE
description: Purgrelstrategycontrolcode
app_component: MM
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PurgReleaseStrategyControlCode` | ✓ | |  | `frgke` |
| `_PurgRelStrategyControlCodeT` | | ✓ | | |

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
