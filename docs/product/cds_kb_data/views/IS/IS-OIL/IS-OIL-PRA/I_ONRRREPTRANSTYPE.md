---
name: I_ONRRREPTRANSTYPE
description: "ONRR Reported Transaction Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPTRANSTYPE')/$value
semantic_en: "ONRR Reported Transaction Type"
semantic_vi: "ONRR Reported Transaction Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "onrr"
  - "reported"
  - "transaction"
  - "type"
  - "trans"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - transaction
---
# I_ONRRREPTRANSTYPE

**ONRR Reported Transaction Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPTRANSTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRReportedTransType` | ✓ | |  | `cast (domvalue_l as /pra/fp_transaction_code )` | `CHAR(2)` | ONRR-2014 - Transaction Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ONRRRepTransTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPTRANSTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRREPTRANSTYPE')/$value)*

```abap
@EndUserText.label: 'ONRR Reported Transaction Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRREPTRTY'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ONRRReportedTransType'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'ONRRTransactionCode'

define view I_ONRRRepTransType
  as select from dd07l
  association [0..*] to I_ONRRRepTransTypeText as _Text on $projection.ONRRReportedTransType = _Text.ONRRReportedTransType
{
  @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/fp_transaction_code )                          as ONRRReportedTransType,
  _Text

}
where
      domname  = '/PRA/FP_TRANSACTION_CODE'
  and as4local = 'A';
```
