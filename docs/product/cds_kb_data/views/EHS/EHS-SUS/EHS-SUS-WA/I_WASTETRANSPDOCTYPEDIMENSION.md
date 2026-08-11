---
name: I_WASTETRANSPDOCTYPEDIMENSION
description: "Waste Analytics Transp Doc Type Dimn"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCTYPEDIMENSION')/$value
semantic_en: "Waste Analytics Transp Doc Type Dimn"
semantic_vi: "Waste Analytics Transp Doc Type Dimn — CDS view giao diện dựa trên Waste Analytics Transp Doc Type Dimn."
keywords:
  - "waste"
  - "analytics"
  - "transp"
  - "doc"
  - "type"
  - "dimn"
  - "envrmt"
  - "desc"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTETRANSPDOCTYPEDIMENSION

**Waste Analytics Transp Doc Type Dimn**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCTYPEDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteTranspDocType` | ✓ | |  |  | `CHAR(10)` | Waste Transportation Document Type ID |
| `EnvWstTranspDocTypeDesc` |  | |  |  | `CHAR(99)` | Waste Transportation Document Type Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCTYPEDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCTYPEDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWANALYTTDTD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey: true

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.representativeKey: 'EnvrmtWasteTranspDocType'
@Metadata.allowExtensions:true

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Waste Analytics Transp Doc Type Dimn'

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
define view I_WasteTranspDocTypeDimension as select distinct from I_WasteTransportationDocType
{
  
  @ObjectModel.text.element: [ 'EnvWstTranspDocTypeDesc' ]
  key EnvrmtWasteTranspDocType,
  
  @Semantics.text: true
  EnvWstTranspDocTypeDesc
  
}
```
