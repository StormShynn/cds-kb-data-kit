---
name: I_PRAOPERATORORPURCHASERCODE
description: "Operator Or Purchaser Code"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOPERATORORPURCHASERCODE')/$value
semantic_en: "Operator Or Purchaser Code"
semantic_vi: "Operator Or Purchaser Code — CDS view giao diện dựa trên dd07l."
keywords:
  - "operator"
  - "purchaser"
  - "code"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAOPERATORORPURCHASERCODE

**Operator Or Purchaser Code**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOPERATORORPURCHASERCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperatorOrPurchaserCode` | ✓ | |  | `cast (domvalue_l as oiux8_operator_purchaser_ind )` | `CHAR(1)` | Tax 2.0 - NM - Operator/Purchaser Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PRAOperatorOrPurchaserCodeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOPERATORORPURCHASERCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAOPERATORORPURCHASERCODE')/$value)*

```abap
@EndUserText.label: 'Operator Or Purchaser Code'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVOPRTPRCHRCD'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'OperatorOrPurchaserCode'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRAOperatorPurchaserCode'

define view I_PRAOperatorOrPurchaserCode
  as select from dd07l
  association [0..*] to I_PRAOperatorOrPurchaserCodeT as _Text on $projection.OperatorOrPurchaserCode = _Text.OperatorOrPurchaserCode

{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as oiux8_operator_purchaser_ind ) as OperatorOrPurchaserCode,
      _Text
}
where
      domname  = 'OIUX8_OPERATOR_PURCHASER_IND'
  and as4local = 'A';
```
