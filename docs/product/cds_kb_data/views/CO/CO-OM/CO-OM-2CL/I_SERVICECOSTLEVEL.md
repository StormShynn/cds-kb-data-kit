---
name: I_SERVICECOSTLEVEL
description: "Servicecostlevel"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - service
  - component:CO-OM-2CL
  - lob:Controlling
---
# I_SERVICECOSTLEVEL

**Servicecostlevel**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceCostLevel` | ✓ | |  | `srv_cost_level` |  |  |
| `ValidityStartDate` | ✓ | |  | `start_date` |  |  |
| `ValidityEndDate` |  | |  | `end_date` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ServiceCostLevelText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISRV_COST_LVL'
//@ClientDependent: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Service Cost Level'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #UI_PROVIDER_PROJECTION_SOURCE]

define view I_ServiceCostLevel
  as select from fcoc_sc_level as ServiceCostLevel
  association [0..*] to I_ServiceCostLevelText as _Text on $projection.ServiceCostLevel = _Text.ServiceCostLevel
{
      @ObjectModel.text.association: '_Text'
  key srv_cost_level      as ServiceCostLevel,
  key start_date          as ValidityStartDate,

      end_date            as ValidityEndDate,

      _Text
}
```
