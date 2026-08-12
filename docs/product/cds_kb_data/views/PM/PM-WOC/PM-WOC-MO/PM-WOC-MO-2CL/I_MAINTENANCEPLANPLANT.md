---
name: I_MAINTENANCEPLANPLANT
description: "Maintenance Planning Plant"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEPLANPLANT')/$value
semantic_en: "Maintenance Planning Plant"
semantic_vi: "Maintenance Planning Plant — CDS view giao diện dựa trên t399i."
keywords:
  - "maintenance"
  - "planning"
  - "plant"
  - "name1"
  - "name2"
tags:
  - PM
  - bo:maintenanceorder
  - component:PM-WOC-MO-2CL
  - interface-view
  - lob:plant maintenance
  - plan
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
---
# I_MAINTENANCEPLANPLANT

**Maintenance Planning Plant**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEPLANPLANT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenancePlanningPlant` | ✓ | |  | `iwerk` | `CHAR(4)` | Maintenance Planning Plant |
| `PlantName1` |  | | `_MaintenancePlant` | `name1` | `CHAR(30)` | Name |
| `PlantName2` |  | | `_MaintenancePlant` | `name2` | `CHAR(30)` | Name 2 |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaintenancePlant` | `t001w` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEPLANPLANT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEPLANPLANT')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@Analytics: { dataExtraction : { enabled: true , delta.changeDataCapture.automatic: true } }
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'MaintenancePlanningPlant'
@Analytics.technicalName: 'IPLANPLANT'
@ObjectModel.sapObjectNodeType.name: 'Plant'
@EndUserText.label: 'Maintenance Planning Plant'
@Search.searchable: true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]

@Metadata.ignorePropagatedAnnotations

define view entity I_MaintenancePlanPlant
  as select from t399i
  association [0..1] to t001w as _MaintenancePlant on t399i.iwerk = _MaintenancePlant.werks
{
      @ObjectModel.text.element: ['PlantName1']
      @Search: {defaultSearchElement: true, ranking: #HIGH}
   key t399i.iwerk              as MaintenancePlanningPlant,
      @Search: {defaultSearchElement: true, ranking: #HIGH}
      @Semantics.text
      _MaintenancePlant.name1  as PlantName1,
      _MaintenancePlant.name2  as PlantName2
}
```
