---
name: I_INDIANINDEXZONE
description: "Indian Index Zone"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDIANINDEXZONE')/$value
semantic_en: "Indian Index Zone"
semantic_vi: "Indian Index Zone — CDS view giao diện dựa trên dd07l."
keywords:
  - "indian"
  - "index"
  - "zone"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_INDIANINDEXZONE

**Indian Index Zone**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDIANINDEXZONE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IndianIndexZone` | ✓ | |  | `cast (domvalue_l as /pra/fp_index_zone )` | `CHAR(3)` | ONRR-2014 - Index Zone |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IndianIndexZoneText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDIANINDEXZONE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INDIANINDEXZONE')/$value)*

```abap
@EndUserText.label: 'Indian Index Zone'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVINDINDEXZONE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'IndianIndexZone'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'ONRRIndexZone'

define view I_IndianIndexZone
  as select from dd07l
  association [0..*] to I_IndianIndexZoneText as _Text on $projection.IndianIndexZone = _Text.IndianIndexZone
{
  @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/fp_index_zone )                         as IndianIndexZone,
  _Text
}
where
      domname  = '/PRA/FP_INDEX_ZONE'
  and as4local = 'A';
```
