---
name: I_WASTEHAZARDTYPEDIMENSION
description: "Waste Hazard Type dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEHAZARDTYPEDIMENSION')/$value
semantic_en: "Waste Hazard Type dimension"
semantic_vi: "Waste Hazard Type dimension — CDS view giao diện dựa trên I_WasteHazardType."
keywords:
  - "waste"
  - "hazard"
  - "type"
  - "dimension"
  - "envrmt"
  - "charc"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTEHAZARDTYPEDIMENSION

**Waste Hazard Type dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEHAZARDTYPEDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteHazardCharcID` | ✓ | |  |  | `CHAR(2)` | Waste Type ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEHAZARDTYPEDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEHAZARDTYPEDIMENSION')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:
{
  usageType:
  {
    dataClass: #MIXED,
    sizeCategory: #S,
    serviceQuality: #C
  },
  representativeKey: 'EnvrmtWasteHazardCharcID'
}
@Metadata.allowExtensions:true

@VDM.viewType: #COMPOSITE

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@EndUserText.label: 'Waste Hazard Type dimension'
define view entity I_WasteHazardTypeDimension as select from I_WasteHazardType
{
  @ObjectModel.text.element: ['EnvrmtWasteHazardCharcName']
  key EnvrmtWasteHazardCharcID,

  @Semantics.text:true
  _Text[1:Language=$session.system_language].EnvrmtWasteHazardCharcName
}
```
