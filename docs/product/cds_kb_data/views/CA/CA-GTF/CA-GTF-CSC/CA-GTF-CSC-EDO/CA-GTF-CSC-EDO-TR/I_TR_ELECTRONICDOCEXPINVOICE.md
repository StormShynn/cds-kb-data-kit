---
name: I_TR_ELECTRONICDOCEXPINVOICE
description: "TR Electronicdocexpinvoice"
app_component: CA-GTF-CSC-EDO-TR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_TR_ELECTRONICDOCEXPINVOICE

**TR Electronicdocexpinvoice**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-TR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  |  |  |
| `TR_ElectronicDocUniqueID` |  | |  |  |  |  |
| `TR_ElectronicDocEnvelopeID` |  | |  |  |  |  |
| `TR_ElectronicDocInvoiceID` |  | |  |  |  |  |
| `TR_EDocBusinessPartnerAlias` |  | |  |  |  |  |
| `TR_ElectronicDocTaxID` |  | |  |  |  |  |
| `TR_EDocTradeRefNumber` |  | |  |  |  |  |
| `TR_EDocCustomRegNumber` |  | |  |  |  |  |
| `TR_EDocRealExportDate` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `TR_EDocTaxExclusiveAmount` |  | |  |  |  |  |
| `TR_ElectronicDocTaxAmount` |  | |  |  |  |  |
| `TR_EDocTaxInclusiveAmount` |  | |  |  |  |  |
| `SalesCurrency` |  | |  |  |  |  |
| `TR_EDocShipToPartyName` |  | |  |  |  |  |
| `TR_EDocCancelReason` |  | |  |  |  |  |
| `TR_EDocCancelReasonCode` |  | |  |  |  |  |
| `TR_ElectronicDocCompanyCode` |  | | `_ElectronicDoc` | `ElectronicDocCompanyCode` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ElectronicDoc` | `I_ElectronicDoc` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'eDocument Turkey Export Invoice'
@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
 @ObjectModel:{
 usageType:{
  serviceQuality: #A,
  sizeCategory: #M,
  dataClass: #MIXED },
supportedCapabilities: [ #SQL_DATA_SOURCE, 
                           #CDS_MODELING_DATA_SOURCE,  
                           #CDS_MODELING_ASSOCIATION_TARGET
                           ]
}  
define view entity I_TR_ElectronicDocExpInvoice as select from R_TR_ElectronicDocExpInvoice
association [1..1] to I_ElectronicDoc as _ElectronicDoc on R_TR_ElectronicDocExpInvoice.ElectronicDocUUID = _ElectronicDoc.ElectronicDocUUID
{
  key ElectronicDocUUID,
      TR_ElectronicDocUniqueID,
      TR_ElectronicDocEnvelopeID,
      TR_ElectronicDocInvoiceID,
      TR_EDocBusinessPartnerAlias,
      TR_ElectronicDocTaxID,
      TR_EDocTradeRefNumber,
      TR_EDocCustomRegNumber,
      TR_EDocRealExportDate,
//      TR_ElectronicDocumentCustomer,
      ShipToParty,
      TR_EDocTaxExclusiveAmount,
      TR_ElectronicDocTaxAmount,
      TR_EDocTaxInclusiveAmount,
      SalesCurrency,
      TR_EDocShipToPartyName,
      TR_EDocCancelReason,
      TR_EDocCancelReasonCode,
      _ElectronicDoc.ElectronicDocCompanyCode as TR_ElectronicDocCompanyCode
}
```
