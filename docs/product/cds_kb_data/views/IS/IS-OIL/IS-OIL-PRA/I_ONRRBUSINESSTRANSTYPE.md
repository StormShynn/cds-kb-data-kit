---
name: I_ONRRBUSINESSTRANSTYPE
description: "ONRR Business Transaction Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRBUSINESSTRANSTYPE')/$value
semantic_en: "ONRR Business Transaction Type"
semantic_vi: "ONRR Business Transaction Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "onrr"
  - "business"
  - "transaction"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - transaction
---
# I_ONRRBUSINESSTRANSTYPE

**ONRR Business Transaction Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRBUSINESSTRANSTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRBusinessTransactionType` | ✓ | |  | `cast (domvalue_l as /pra/fp_prdt_line_type)` | `CHAR(1)` | ONRR-2014 - PRA Detail Line Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ONRRBusinessTransTypeT` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRBUSINESSTRANSTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRBUSINESSTRANSTYPE')/$value)*

```abap
@EndUserText.label: 'ONRR Business Transaction Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRBUSTRTY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ONRRBusinessTransactionType'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ,
                                     #EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'ONRRDetailLineType'

define view I_ONRRBusinessTransType as select from dd07l
  association [0..*] to I_ONRRBusinessTransTypeT as _Text on $projection.ONRRBusinessTransactionType = _Text.ONRRBusinessTransactionType
{
 @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/fp_prdt_line_type) as ONRRBusinessTransactionType,
      _Text
}
where
      domname  = '/PRA/FP_PRDT_LINE_TYPE'
  and as4local = 'A';
```
