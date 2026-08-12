---
name: I_PLANTPURCHASINGORGANIZATION
description: "Plantpurchasingorganization"
app_component: MM
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
