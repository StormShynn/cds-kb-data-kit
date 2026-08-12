---
name: I_ENVRMTWASTECODEDIMENSION
description: "Waste Code dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTWASTECODEDIMENSION')/$value
semantic_en: "Waste Code dimension"
semantic_vi: "Waste Code dimension — CDS view giao diện dựa trên I_EnvrmtWasteCodesGrouped."
keywords:
  - "waste"
  - "code"
  - "dimension"
  - "envrmt"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_ENVRMTWASTECODEDIMENSION

**Waste Code dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTWASTECODEDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteCode` | ✓ | |  |  | `CHAR(20)` | Waste Code |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTWASTECODEDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENVRMTWASTECODEDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IEWASTECODED'
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L 
@ObjectModel.representativeKey: 'EnvrmtWasteCode'
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Waste Code dimension'
define view I_EnvrmtWasteCodeDimension as select from I_EnvrmtWasteCodesGrouped 
{
  key EnvrmtWasteCode
}
```
