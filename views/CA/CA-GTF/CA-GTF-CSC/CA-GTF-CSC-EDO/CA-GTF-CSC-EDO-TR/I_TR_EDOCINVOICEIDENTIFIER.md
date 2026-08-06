---
name: I_TR_EDOCINVOICEIDENTIFIER
description: TR Edocinvoiceidentifier
app_component: CA-GTF-CSC-EDO-TR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - interface-view
  - component:CA-GTF-CSC-EDO-TR
  - lob:Cross-Application Components
---
# I_TR_EDOCINVOICEIDENTIFIER

**TR Edocinvoiceidentifier**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-TR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ElectronicDocUUID` | `ElectronicDocUUID` |
| `TR_ElectronicDocEnvelopeID` | `TR_ElectronicDocEnvelopeID` |
| `TR_ElectronicDocInvoiceID` | `TR_ElectronicDocInvoiceID` |
| `TR_ElectronicDocUniqueID` | `TR_ElectronicDocUniqueID` |
| `TR_EDocBusinessPartnerAlias` | `TR_EDocBusinessPartnerAlias` |
| `TR_ElectronicDocTaxID` | `TR_ElectronicDocTaxID` |
| `TR_ElectronicDocBusPartner` | `TR_ElectronicDocBusPartner` |
| `TR_EDocTaxExclusiveAmount` | `TR_EDocTaxExclusiveAmount` |
| `TR_ElectronicDocTaxAmount` | `TR_ElectronicDocTaxAmount` |
| `TR_EDocTaxInclusiveAmount` | `TR_EDocTaxInclusiveAmount` |
| `TR_EDocCurrencyKey` | `TR_EDocCurrencyKey` |
| `TR_EDocBusPartnerName` | `TR_EDocBusPartnerName` |
| `TR_EDocCancelReason` | `TR_EDocCancelReason` |
| `TR_EDocCancelReasonCode` | `TR_EDocCancelReasonCode` |
| `TR_ElectronicDocCompanyCode` | `_ElectronicDoc.ElectronicDocCompanyCode` |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ElectronicDoc` | `I_ElectronicDoc` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument Turkey Invoice Identifiers'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
 @ObjectModel:{
 usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MIXED
   },
supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET
                           ]
} 
define view entity I_TR_EDocInvoiceIdentifier as select from R_TR_EDocInvoiceIdentifier
association [1..1] to I_ElectronicDoc as _ElectronicDoc on R_TR_EDocInvoiceIdentifier.ElectronicDocUUID = _ElectronicDoc.ElectronicDocUUID
{
  key ElectronicDocUUID,
  TR_ElectronicDocEnvelopeID,
  TR_ElectronicDocInvoiceID,
  TR_ElectronicDocUniqueID,
  TR_EDocBusinessPartnerAlias,
  TR_ElectronicDocTaxID,
  TR_ElectronicDocBusPartner,
  @Semantics.amount.currencyCode: 'TR_EDocCurrencyKey'
  TR_EDocTaxExclusiveAmount,
  @Semantics.amount.currencyCode: 'TR_EDocCurrencyKey'
  TR_ElectronicDocTaxAmount,
  @Semantics.amount.currencyCode: 'TR_EDocCurrencyKey'
  TR_EDocTaxInclusiveAmount,
  TR_EDocCurrencyKey,
  TR_EDocBusPartnerName,
  TR_EDocCancelReason,
  TR_EDocCancelReasonCode,
   _ElectronicDoc.ElectronicDocCompanyCode as TR_ElectronicDocCompanyCode
}
```
