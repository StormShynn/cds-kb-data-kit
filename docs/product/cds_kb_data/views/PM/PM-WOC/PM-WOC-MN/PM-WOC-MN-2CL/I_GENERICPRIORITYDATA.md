---
name: I_GENERICPRIORITYDATA
description: "This CDS view provides the prerequisites for answering the following business questions: Which priority type contains the priority? Which shift factor needs to be applied in the calculation of the start date? Which unit needs to be applied for the shift factor in the calculation of the start date? Which shift factor needs to be applied in the calculation of the end date? Which unit needs to be applied for the shift factor in the calculation of the end date? What is the color code for priority?"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYDATA')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Which priority type contains the priority? Which shift factor needs to be applied in the calculation of the start date? Which unit needs to be applied for the shift factor in the calculation of the start date? Which shift factor needs to be applied in the calculation of the end date? Which unit needs to be applied for the shift factor in the calculation of the end date? What is the color code for priority?"
semantic_vi: "Generic Priority Data — CDS view giao diện dựa trên I_GenericPriority."
keywords:
  - "generic"
  - "priority"
  - "data"
  - "type"
  - "code"
  - "start"
  - "date"
  - "shift"
  - "factor"
  - "strt"
  - "unit"
tags:
  - PM
  - bo:plant
  - component:PM-WOC-MN-2CL
  - interface-view
  - lob:plant maintenance
  - PM-WOC
  - PM-WOC-MN
  - PM-WOC-MN-2CL
---
# I_GENERICPRIORITYDATA

**This CDS view provides the prerequisites for answering the following business questions: Which priority type contains the priority? Which shift factor needs to be applied in the calculation of the start date? Which unit needs to be applied for the shift factor in the calculation of the start date? Which shift factor needs to be applied in the calculation of the end date? Which unit needs to be applied for the shift factor in the calculation of the end date? What is the color code for priority?**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GenericPriorityType` | ✓ | |  |  | `CHAR(2)` | Priority Type |
| `PriorityCode` | ✓ | |  |  | `CHAR(1)` | Priority |
| `GenericStartDateShiftFactor` |  | |  |  | `NUMC(2)` | Relative Start Date for Task/Notification in Days |
| `GenericStrtDateShiftFactorUnit` |  | |  |  | `UNIT(3)` | Relative Start Date Unit |
| `GenericEndDateShiftFactor` |  | |  |  | `NUMC(2)` | Relative End Date for Task/Notification in Days |
| `GenericEndDateShiftFactorUnit` |  | |  |  | `UNIT(3)` | Relative End Date Unit |
| `GenericPriorityColorCode` |  | |  |  | `NUMC(1)` | Priority color code |
| `_GenericPriorityType` | | ✓ | | | | |
| `_GenericPriorityText` | | ✓ | | | | |
| `_GenericStrtDateShiftFctrUnit` | | ✓ | | | | |
| `_GenericEndDateShiftFactorUnit` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERICPRIORITYDATA')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Generic Priority Data'

@VDM.viewType: #COMPOSITE
@ObjectModel.representativeKey: 'PriorityCode'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true
  }
}
@Analytics.technicalName: 'IGENERICPRIODATA'

@ObjectModel: {
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #S
  },
  supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}

@ObjectModel.sapObjectNodeType.name:'NotificationPriorityType'
define view entity I_GenericPriorityData
  as select from I_GenericPriority
{
      @ObjectModel.foreignKey.association: '_GenericPriorityType'
  key GenericPriorityType,

  key PriorityCode,

      GenericStartDateShiftFactor,

      @ObjectModel.foreignKey.association: '_GenericStrtDateShiftFctrUnit'
      GenericStrtDateShiftFactorUnit,

      GenericEndDateShiftFactor,

      @ObjectModel.foreignKey.association: '_GenericEndDateShiftFactorUnit'
      GenericEndDateShiftFactorUnit,

      GenericPriorityColorCode,

      // Propagate association(s)
      _GenericPriorityType,
      _GenericPriorityText,
      _GenericStrtDateShiftFctrUnit,
      _GenericEndDateShiftFactorUnit

}
```
