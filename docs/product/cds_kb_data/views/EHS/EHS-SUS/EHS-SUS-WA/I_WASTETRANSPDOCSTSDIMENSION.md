---
name: I_WASTETRANSPDOCSTSDIMENSION
description: "Waste Analytics Transp Doc Status Dimn"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCSTSDIMENSION')/$value
semantic_en: "Waste Analytics Transp Doc Status Dimn"
semantic_vi: "Waste Analytics Transp Doc Status Dimn — CDS view giao diện dựa trên I_EnvWstTranspDocTextStatus."
keywords:
  - "waste"
  - "analytics"
  - "transp"
  - "doc"
  - "status"
  - "dimn"
  - "envrmt"
  - "name"
tags:
  - EHS
  - bo:salesorganization
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTETRANSPDOCSTSDIMENSION

**Waste Analytics Transp Doc Status Dimn**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCSTSDIMENSION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteTranspDocStatus` | ✓ | |  |  | `CHAR(3)` | Waste Transportation Document Status |
| `EnvWstTranspDocStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCSTSDIMENSION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSPDOCSTSDIMENSION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWANALYTTDSD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey: true

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M 
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'EnvrmtWasteTranspDocStatus'

@VDM.viewType: #COMPOSITE
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Waste Analytics Transp Doc Status Dimn'

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

define view I_WasteTranspDocStsDimension as select from I_EnvWstTranspDocTextStatus {
  
  @ObjectModel.text.element: [ 'EnvWstTranspDocStatusName' ]
  key EnvrmtWasteTranspDocStatus,
  
  @Semantics.text: true
  EnvWstTranspDocStatusName
  
} where
Language = $session.system_language
```
