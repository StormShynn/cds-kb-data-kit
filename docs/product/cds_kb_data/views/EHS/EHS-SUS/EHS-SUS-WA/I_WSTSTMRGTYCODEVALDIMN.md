---
name: I_WSTSTMRGTYCODEVALDIMN
description: "Waste Stream Regulatory Code Value"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WSTSTMRGTYCODEVALDIMN')/$value
semantic_en: "Waste Stream Regulatory Code Value"
semantic_vi: "Waste Stream Regulatory Code Value — CDS view giao diện dựa trên Waste Stream Regulatory Code Value."
keywords:
  - "waste"
  - "stream"
  - "regulatory"
  - "code"
  - "value"
  - "rgty"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WSTSTMRGTYCODEVALDIMN

**Waste Stream Regulatory Code Value**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WSTSTMRGTYCODEVALDIMN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WasteStreamRgtyCodeValue` | ✓ | |  |  | `CHAR(4)` | Waste Stream Regulatory Code Value |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WSTSTMRGTYCODEVALDIMN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WSTSTMRGTYCODEVALDIMN')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWSTSTRGTYCODEVD'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L 
@ObjectModel.representativeKey: 'WasteStreamRgtyCodeValue'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Waste Stream Regulatory Code Value'
define view I_WstStmRgtyCodeValDimn as select distinct from I_WstStmRgtyCodeValGrouped {
  key WasteStreamRgtyCodeValue
}
```
