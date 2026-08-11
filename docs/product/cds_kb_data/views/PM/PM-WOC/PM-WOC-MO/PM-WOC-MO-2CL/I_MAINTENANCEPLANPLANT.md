---
name: I_MAINTENANCEPLANPLANT
description: "Maintenance Planning Plant"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
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
