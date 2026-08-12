---
name: I_MAINTACTYTYPESTDVH
description: "Maintenance Activity Type"
app_component: PM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTACTYTYPESTDVH')/$value
semantic_en: "Maintenance Activity Type"
semantic_vi: "Maintenance Activity Type — CDS view giao diện dựa trên I_MaintenanceActivityType."
keywords:
  - "maintenance"
  - "activity"
  - "type"
tags:
  - PM
  - component:PM-2CL
  - interface-view
  - lob:plant maintenance
  - PM-2CL
---
# I_MAINTACTYTYPESTDVH

**Maintenance Activity Type**

| Property | Value |
|---|---|
| App Component | `PM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTACTYTYPESTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceActivityType` | ✓ | |  |  | `CHAR(3)` | Maintenance Activity Type |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTACTYTYPESTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTACTYTYPESTDVH')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IMAT__VH',
                compiler.compareFilter: true }
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl: {
  authorizationCheck: #CHECK,
  privilegedAssociations: ['_Text'] }

@VDM.viewType: #COMPOSITE

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'MaintenanceActivityType',
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ],
  resultSet.sizeCategory: #XS,
  usageType: { 
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S } } 

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Maintenance Activity Type'
define view I_MaintActyTypeStdVH as select from I_MaintenanceActivityType {
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.9
  @Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT
  @Search.ranking: #HIGH
  key MaintenanceActivityType,

  _Text
}
```
