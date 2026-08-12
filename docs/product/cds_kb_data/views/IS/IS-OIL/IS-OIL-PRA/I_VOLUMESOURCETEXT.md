---
name: I_VOLUMESOURCETEXT
description: "Volume Source - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMESOURCETEXT')/$value
semantic_en: "Volume Source - Text"
semantic_vi: "Volume Source - Text — CDS view giao diện dựa trên oiu_pr_vlsrc_tx."
keywords:
  - "volume"
  - "source"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - bo:salesorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_VOLUMESOURCETEXT

**Volume Source - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMESOURCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VolumeSource` | ✓ | |  | `vs_cd` | `CHAR(1)` | Volume Source Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `VolumeSourceName` |  | |  | `vs_de` | `CHAR(50)` | Volume source description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMESOURCETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VOLUMESOURCETEXT')/$value)*

```abap
@EndUserText.label: 'Volume Source - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVVOLUMESOURCET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'VolumeSource'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_VolumeSourceText
  as select from oiu_pr_vlsrc_tx
{
  key vs_cd        as VolumeSource,
      @Semantics.language
  key spras        as Language,
      @Semantics.text
      vs_de        as VolumeSourceName
}
```
