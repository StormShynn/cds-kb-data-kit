---
name: I_MAINTENANCEACTIVITYTYPE
description: "This CDS view provides the prerequisites for answering the following business questions: Which maintenance activity types exist in the system and can be set?"
app_component: PM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEACTIVITYTYPE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which maintenance activity types exist in the system and can be set?"
semantic_vi: "Maintenance Activity Type — CDS view cơ bản dựa trên t353i."
keywords:
  - "maintenance"
  - "activity"
  - "type"
tags:
  - PM
  - bo:plant
  - component:PM-2CL
  - interface-view
  - lob:plant maintenance
  - PM-2CL
---
# I_MAINTENANCEACTIVITYTYPE

**This CDS view provides the prerequisites for answering the following business questions: Which maintenance activity types exist in the system and can be set?**

| Property | Value |
|---|---|
| App Component | `PM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEACTIVITYTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceActivityType` | ✓ | |  | `cast( t353i.ilart as eam_maint_activity_type preserving type)` | `CHAR(3)` | Maintenance Activity Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaintenanceActivityTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEACTIVITYTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTENANCEACTIVITYTYPE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IMTACTTYPE'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Maintenance Activity Type'
@ObjectModel.representativeKey: 'MaintenanceActivityType'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S

@ObjectModel.sapObjectNodeType.name:'MaintenanceActivityType'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, 
                                      #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

@Metadata: { allowExtensions, ignorePropagatedAnnotations }

define view I_MaintenanceActivityType
  as select from t353i
  association [0..*] to I_MaintenanceActivityTypeText as _Text on $projection.MaintenanceActivityType = _Text.MaintenanceActivityType
{
      @ObjectModel.text.association: '_Text'
  key cast( t353i.ilart as eam_maint_activity_type preserving type) as MaintenanceActivityType,

      --t353i.gar as IsUsedForWarrantyCases,
      --t353i.ver as IsUsedForInsuranceCases,

      _Text
}
```
