---
name: I_PRALEASEPLANTINDICATOR
description: "PRA Lease Plant Indicator"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEASEPLANTINDICATOR')/$value
semantic_en: "PRA Lease Plant Indicator"
semantic_vi: "PRA Lease Plant Indicator — CDS view giao diện dựa trên dd07l."
keywords:
  - "pra"
  - "lease"
  - "plant"
  - "indicator"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - plan
---
# I_PRALEASEPLANTINDICATOR

**PRA Lease Plant Indicator**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEASEPLANTINDICATOR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IsLeaseOrPlant` | ✓ | |  | `cast (domvalue_l as oiu_lse_plt_cd )` | `CHAR(1)` | Lease Plant Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRALeasePlantIndicatorText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEASEPLANTINDICATOR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALEASEPLANTINDICATOR')/$value)*

```abap
@EndUserText.label: 'PRA Lease Plant Indicator'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVLSEPLANTIND'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'IsLeaseOrPlant'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRALeasePlantIndicator'

define view I_PRALeasePlantIndicator
  as select from dd07l

  association [0..*] to I_PRALeasePlantIndicatorText as _Text on $projection.IsLeaseOrPlant = _Text.IsLeaseOrPlant

{
      @ObjectModel.text.association: '_Text'
  @Semantics.booleanIndicator: true
  key cast (domvalue_l as oiu_lse_plt_cd ) as IsLeaseOrPlant,
      _Text
}
where
      domname  = 'OIU_LSE_PLT_CD'
  and as4local = 'A';
```
