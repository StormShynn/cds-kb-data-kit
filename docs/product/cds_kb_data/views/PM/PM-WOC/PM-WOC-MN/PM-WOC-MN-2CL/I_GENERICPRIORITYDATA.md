---
name: I_GENERICPRIORITYDATA
description: "This CDS view provides the prerequisites for answering the following business questions: Which priority type contains the priority? Which shift factor needs to be applied in the calculation of the start date? Which unit needs to be applied for the shift factor in the calculation of the start date? Which shift factor needs to be applied in the calculation of the end date? Which unit needs to be applied for the shift factor in the calculation of the end date? What is the color code for priority?"
app_component: PM-WOC-MN-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
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
