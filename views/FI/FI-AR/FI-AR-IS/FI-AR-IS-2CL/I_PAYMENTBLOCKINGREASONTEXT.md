---
name: I_PAYMENTBLOCKINGREASONTEXT
description: Paymentblockingreasontext
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-IS
  - interface-view
  - text-view
  - payment
  - text
  - component:FI-AR-IS-2CL
  - lob:Finance
---
# I_PAYMENTBLOCKINGREASONTEXT

**Paymentblockingreasontext**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `PaymentBlockingReason` | ✓ | |  | `cast (zahls as farp_dzlspr)` |  |  |
| `PaymentBlockingReasonName` |  | |  | `cast (textl as farp_payment_block_reason_name )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//Documentation about annotations can be found at http://help.sap.com searching for CDS annotations //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.sizeCategory: #M //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.serviceQuality: #A //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #CUSTOMIZING //Inserted by VDM CDS Suite Plugin
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET , #SQL_DATA_SOURCE , #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Payment Blocking Reason - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIPAYBLOCKREAST'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'PaymentBlockingReason'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

define view I_PaymentBlockingReasonText
  as select from t008t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key spras                       as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold:   1.0
  key cast (zahls as farp_dzlspr) as PaymentBlockingReason,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold:   0.8
      @Semantics.text:true
      cast (textl as farp_payment_block_reason_name )  as PaymentBlockingReasonName,
      _Language
};
```
