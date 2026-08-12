---
name: I_WASTEHAZARDTYPEDIMENSION
description: "Waste Hazard Type dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
