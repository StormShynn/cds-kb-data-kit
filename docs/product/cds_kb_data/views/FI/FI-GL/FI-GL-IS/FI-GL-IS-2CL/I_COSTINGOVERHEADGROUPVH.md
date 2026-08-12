---
name: I_COSTINGOVERHEADGROUPVH
description: "Costingoverheadgroupvh"
app_component: FI-GL-IS-2CL
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
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - value-help
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_COSTINGOVERHEADGROUPVH

**Costingoverheadgroupvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
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
| `CostingOverheadGroup` | ✓ | |  |  |  |  |
| `ValuationArea` | ✓ | |  |  |  |  |
| `CostingOverhead` | ✓ | |  | `OverheadCode` |  |  |
| `_ValuationArea` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICSTOVERHDGRPVH'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
@ObjectModel.usageType: {
  dataClass: #CUSTOMIZING,
  serviceQuality: #A,
  sizeCategory: #M
  }
@Metadata.allowExtensions:true
@EndUserText.label: 'Costing Overheads Group'
@Search.searchable: true

@ObjectModel.representativeKey: 'CostingOverheadGroup'

define view I_CostingOverheadGroupVH
  as select from I_CostingOverheadGroup
{
      @Search.ranking: #HIGH
      @Search.defaultSearchElement: true
  key CostingOverheadGroup,
  key ValuationArea,
  key OverheadCode as CostingOverhead,
      _ValuationArea
}
```
