---
name: I_CONVERSIONGROUP
description: "Conversion Group Status"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONVERSIONGROUP')/$value
semantic_en: "Conversion Group Status"
semantic_vi: "Conversion Group Status — CDS view giao diện dựa trên oib01."
keywords:
  - "conversion"
  - "group"
  - "status"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_CONVERSIONGROUP

**Conversion Group Status**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONVERSIONGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConversionGroup` | ✓ | |  | `umrsl` | `CHAR(4)` | Conversion Group (Oil, Natural Gas,..) |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ConversionGroupText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONVERSIONGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONVERSIONGROUP')/$value)*

```abap
@EndUserText.label: 'Conversion Group Status'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVCONVGROUP'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ConversionGroup'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'PRAConversionGroup'

define view I_ConversionGroup
  as select from oib01
  association [0..*] to I_ConversionGroupText as _Text on $projection.ConversionGroup = _Text.ConversionGroup
{
      @ObjectModel.text.association: '_Text'
  key umrsl  as ConversionGroup,
      _Text
}
```
