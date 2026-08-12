---
name: I_PROCMTHUBPURGORGAPI01
description: "Procmthubpurgorgapi 01"
app_component: MM-PUR-HUB-FND-2CL
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
  - component:MM-PUR-HUB-FND-2CL
  - lob:Sourcing & Procurement
---
# I_PROCMTHUBPURGORGAPI01

**Procmthubpurgorgapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-FND-2CL` |
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
| `ProcmtHubPurchasingOrg` | ✓ | |  | `be_purchorg` |  |  |
| `ProcmtHubPurgOrgUniqueID` |  | |  | `be_purchorg_unique_id` |  |  |
| `ProcmtHubPurgOrgName` |  | |  | `be_purchorg_name` |  |  |
| `ProcurementHubSourceSystemName` |  | | `_ProcmtHubBackendSourceSystem` | `ProcurementHubSourceSystemName` |  |  |
| `_ProcmtHubBackendSourceSystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProcmtHubBackendSourceSystem` | `I_ProcmtHubBackendSourceSystem` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Purchasing Org in Connected System'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@AbapCatalog.sqlViewName: 'IPRCMTPORG'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern : #NONE
@ObjectModel.representativeKey: 'ProcmtHubPurchasingOrg'
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

define view I_ProcmtHubPurgOrgAPI01
  as select from mmpur_c_be_porgr
  association [1..1] to I_ProcmtHubBackendSourceSystem as _ProcmtHubBackendSourceSystem on $projection.ProcurementHubSourceSystem = _ProcmtHubBackendSourceSystem.ProcurementHubSourceSystem
{
      @ObjectModel.foreignKey.association: '_ProcmtHubBackendSourceSystem'
  key be_source_sys                                                as ProcurementHubSourceSystem,
      @ObjectModel.text.element: ['ProcmtHubPurgOrgName']
  key be_purchorg                                                  as ProcmtHubPurchasingOrg,
      be_purchorg_unique_id                                        as ProcmtHubPurgOrgUniqueID,
      @Semantics.text: true
      be_purchorg_name                                             as ProcmtHubPurgOrgName,
      @Semantics.text: true
      _ProcmtHubBackendSourceSystem.ProcurementHubSourceSystemName as ProcurementHubSourceSystemName,
      _ProcmtHubBackendSourceSystem

}
where
      cp_activate =  'X'
  and cp_delete   <> 'X'
```
