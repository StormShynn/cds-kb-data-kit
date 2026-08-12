---
name: I_PLANTPURCHASINGORGANIZATION
description: "Plantpurchasingorganization"
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
  - plant
  - component:MM
  - lob:Sourcing & Procurement
  - bo:Plant
  - bo:PurchasingOrganization
---
# I_PLANTPURCHASINGORGANIZATION

**Plantpurchasingorganization**

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
| `PurchasingOrganization` | ✓ | |  | `ekorg` |  |  |
| `Plant` | ✓ | |  | `werks` |  |  |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.sqlViewName: 'IMMORGPLANT'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@Analytics.dataExtraction.enabled: true
@Analytics.dataCategory:#FACT
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.sapObjectNodeType.name:'PurgOrgPlantAssignment'
//@ObjectModel.representativeKey: 'PurchasingOrganization'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ] 
@EndUserText.label: 'Responsible Purg Org for Plant' 
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_FACT

define view I_PlantPurchasingOrganization
  as select from t024w
  association [1..1] to I_PurchasingOrganization as _PurchasingOrganization on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_Plant                  as _Plant                  on $projection.Plant = _Plant.Plant
{
  @ObjectModel.foreignKey.association: '_PurchasingOrganization'
  key ekorg as PurchasingOrganization,
  @ObjectModel.foreignKey.association: '_Plant'
  key werks as Plant,

      _PurchasingOrganization,
      _Plant

}
```
