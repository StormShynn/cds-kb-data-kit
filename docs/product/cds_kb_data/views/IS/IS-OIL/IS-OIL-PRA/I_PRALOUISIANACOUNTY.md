---
name: I_PRALOUISIANACOUNTY
description: "Louisiana County"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALOUISIANACOUNTY')/$value
semantic_en: "Louisiana County"
semantic_vi: "Louisiana County — CDS view giao diện dựa trên dd07l."
keywords:
  - "louisiana"
  - "county"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRALOUISIANACOUNTY

**Louisiana County**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALOUISIANACOUNTY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LouisianaCounty` | ✓ | |  | `cast (domvalue_l as /pra/t9_parish )` | `NUMC(2)` | Tax 2.0 LA - Parish |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRALouisianaCountyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALOUISIANACOUNTY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRALOUISIANACOUNTY')/$value)*

```abap
@EndUserText.label: 'Louisiana County'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVLOUSNACNTY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'LouisianaCounty'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRALouisianaTaxCountyCode'

define view I_PRALouisianaCounty
  as select from dd07l
  association [0..*] to I_PRALouisianaCountyText as _Text on $projection.LouisianaCounty = _Text.LouisianaCounty

{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/t9_parish ) as LouisianaCounty,
      _Text
}
where
      domname  = '/PRA/T9_PARISH'
  and as4local = 'A';
```
