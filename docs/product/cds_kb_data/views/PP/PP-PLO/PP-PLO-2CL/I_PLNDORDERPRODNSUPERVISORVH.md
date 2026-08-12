---
name: I_PLNDORDERPRODNSUPERVISORVH
description: "Plndorderprodnsupervisorvh"
app_component: PP-PLO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PLO
  - interface-view
  - value-help
  - component:PP-PLO-2CL
  - lob:Manufacturing
---
# I_PLNDORDERPRODNSUPERVISORVH

**Plndorderprodnsupervisorvh**

| Property | Value |
|---|---|
| App Component | `PP-PLO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  |  |  |  |
| `ProductionSupervisor` | ✓ | |  |  |  |  |
| `ProductionSupervisorName` |  | |  |  |  |  |
| `_Plant` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck:#MANDATORY
@VDM.viewType: #COMPOSITE
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Search.searchable: true
@ObjectModel.representativeKey: 'ProductionSupervisor'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #META
@ObjectModel.dataCategory: #VALUE_HELP
@Consumption.ranked: true
@EndUserText.label: 'Production Supervisor'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]

define view entity I_PlndOrderProdnSupervisorVH 
as select from I_ProductionSupervisor as ProductionSupervisor
{
      @Search: {defaultSearchElement: true, ranking: #MEDIUM, fuzzinessThreshold: 0.8}
      @ObjectModel.foreignKey.association: '_Plant'
  key ProductionSupervisor.Plant,
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.element:[ 'ProductionSupervisorName' ] 
  key ProductionSupervisor.ProductionSupervisor,      
      @Semantics.text: true
      ProductionSupervisor.ProductionSupervisorName,

      @Consumption.hidden: true
      _Plant

}
```
