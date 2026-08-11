---
name: I_PAYMENTHDRREJECTIONRSN
description: "Payment Header Rejection Reason"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTHDRREJECTIONRSN')/$value
semantic_en: "Payment Header Rejection Reason"
semantic_vi: "Payment Header Rejection Reason — CDS view giao diện dựa trên Payment Header Rejection Reason."
keywords:
  - "payment"
  - "header"
  - "rejection"
  - "reason"
tags:
  - IS
  - bo:salesorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# I_PAYMENTHDRREJECTIONRSN

**Payment Header Rejection Reason**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTHDRREJECTIONRSN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentHeaderRejectionRsn` | ✓ | |  | `rej_cd` | `CHAR(3)` | Payment Processing - High Level Reject Code |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PaymentHdrRejectionRsnText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTHDRREJECTIONRSN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTHDRREJECTIONRSN')/$value)*

```abap
@EndUserText.label: 'Payment Header Rejection Reason'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVPAYHDRREJRSN'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'PaymentHeaderRejectionRsn'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'PRAPaymentHeaderRejectionRsn'
define view I_PaymentHdrRejectionRsn
  as select from /pra/c_pp_rej
  association [0..*] to I_PaymentHdrRejectionRsnText as _Text on $projection.PaymentHeaderRejectionRsn = _Text.PaymentHeaderRejectionRsn
{
      @ObjectModel.text.association: '_Text'
  key rej_cd   as PaymentHeaderRejectionRsn,
      _Text
}
```
