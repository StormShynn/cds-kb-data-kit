---
name: I_CONVERSIONGROUPTEXT
description: "Conversion Group - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONVERSIONGROUPTEXT')/$value
semantic_en: "Conversion Group - Text"
semantic_vi: "Conversion Group - Text — CDS view giao diện dựa trên oib01t."
keywords:
  - "conversion"
  - "group"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_CONVERSIONGROUPTEXT

**Conversion Group - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONVERSIONGROUPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConversionGroup` | ✓ | |  | `umrsl` | `CHAR(4)` | Conversion Group (Oil, Natural Gas,..) |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ConversionGroupName` |  | |  | `cast( descr as oiu_vdm_conv_group_desc )` | `CHAR(40)` | Conversion Group Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONVERSIONGROUPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONVERSIONGROUPTEXT')/$value)*

```abap
@EndUserText.label: 'Conversion Group - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVCONVGROUPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ConversionGroup'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING

define view I_ConversionGroupText
  as select from oib01t
{
  key umrsl                                          as ConversionGroup,
      @Semantics.language
  key spras                                          as Language,
      @Semantics.text
      cast( descr as oiu_vdm_conv_group_desc )       as ConversionGroupName
}
```
