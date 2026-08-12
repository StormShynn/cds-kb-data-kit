---
name: I_PROCMTHUBBACKENDSOURCESYSTEM
description: "Procmthubbackendsourcesystem"
app_component: MM-PUR-HUB-REQ-2CL
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
  - MM-PUR-HUB
  - interface-view
  - component:MM-PUR-HUB-REQ-2CL
  - lob:Sourcing & Procurement
---
# I_PROCMTHUBBACKENDSOURCESYSTEM

**Procmthubbackendsourcesystem**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-REQ-2CL` |
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
| `ProcurementHubSourceSystem` | ✓ | |  | `be_source_sys` |  |  |
| `ProcurementHubSourceSystemName` |  | |  | `be_source_sys_name` |  |  |
| `ProcmtHubLogicalSystem` |  | |  | `logsys` |  |  |
| `ProcmtHubBackendBusSyst` |  | |  | `be_business_system` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPROCHUBCKENDSYS'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Connected System in Central Procurement'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION]
@Metadata.allowExtensions:true
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.modelingPattern: #NONE
@AbapCatalog.preserveKey:true
@ObjectModel.representativeKey: 'ProcurementHubSourceSystem'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

define view I_ProcmtHubBackendSourceSystem as select from mmpur_c_be_syreg 

{
  @ObjectModel.text.element : 'ProcurementHubSourceSystemName'
  @Consumption.labelElement: 'ProcurementHubSourceSystemName'
  key be_source_sys as ProcurementHubSourceSystem,
  @Semantics.text: true
  be_source_sys_name as ProcurementHubSourceSystemName,
  logsys as ProcmtHubLogicalSystem,
  be_business_system as ProcmtHubBackendBusSyst
 
}
```
