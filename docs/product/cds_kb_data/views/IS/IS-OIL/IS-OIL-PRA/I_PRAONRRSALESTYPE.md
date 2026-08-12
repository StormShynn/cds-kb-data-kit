---
name: I_PRAONRRSALESTYPE
description: "PRA ONRR Sales Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRSALESTYPE')/$value
semantic_en: "PRA ONRR Sales Type"
semantic_vi: "PRA ONRR Sales Type — CDS view giao diện dựa trên oiurep_salesty."
keywords:
  - "pra"
  - "onrr"
  - "sales"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAONRRSALESTYPE

**PRA ONRR Sales Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRSALESTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRSalesType` | ✓ | |  | `cast (sales_type_cd as /pra/fp_sales_type_code )` | `CHAR(4)` | ONRR-2014 - Sales Type Code |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TEXT` | `I_PRAONRRSalesTypeText` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRSALESTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAONRRSALESTYPE')/$value)*

```abap
@EndUserText.label: 'PRA ONRR Sales Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRSLSTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ONRRSalesType'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'ONRRSalesTypeCode'

define view I_PRAONRRSalesType
  as select from oiurep_salesty
  association [0..1] to I_PRAONRRSalesTypeText as _TEXT on $projection.ONRRSalesType = _TEXT.ONRRSalesType
{
  key cast (sales_type_cd as /pra/fp_sales_type_code )                         as ONRRSalesType

}
```
