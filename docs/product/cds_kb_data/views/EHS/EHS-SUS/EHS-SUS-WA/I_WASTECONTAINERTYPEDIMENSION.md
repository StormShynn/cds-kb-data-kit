---
name: I_WASTECONTAINERTYPEDIMENSION
description: "Waste Analytics Container Type Dimn"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTECONTAINERTYPEDIMENSION')/$value
semantic_en: "Waste Analytics Container Type Dimn"
semantic_vi: "Waste Analytics Container Type Dimn — CDS view giao diện dựa trên I_WasteStreamContainerType."
keywords:
  - "waste"
  - "analytics"
  - "container"
  - "type"
  - "dimn"
  - "stream"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTECONTAINERTYPEDIMENSION

**Waste Analytics Container Type Dimn**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTECONTAINERTYPEDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WasteStreamContainerType` | ✓ | |  |  | `CHAR(4)` | Waste Stream Container Type |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTECONTAINERTYPEDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTECONTAINERTYPEDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWANALYTCNTD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey: true

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'WasteStreamContainerType'
@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Waste Analytics Container Type Dimn'

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_WasteContainerTypeDimension as select from I_WasteStreamContainerType {
  
  @ObjectModel.text.element: [ 'WasteStreamContainerTypeText' ]
  key WasteStreamContainerType,
  
  @Semantics.text: true
  _Text[1: Language = $session.system_language].WasteStreamContainerTypeText
}
```
