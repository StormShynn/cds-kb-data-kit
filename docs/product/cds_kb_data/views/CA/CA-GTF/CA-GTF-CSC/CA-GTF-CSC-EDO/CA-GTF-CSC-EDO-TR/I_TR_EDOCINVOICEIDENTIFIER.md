---
name: I_TR_EDOCINVOICEIDENTIFIER
description: "TR Edocinvoiceidentifier"
app_component: CA-GTF-CSC-EDO-TR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
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
# I_TR_EDOCINVOICEIDENTIFIER

**TR Edocinvoiceidentifier**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-TR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ElectronicDocUUID` | ✓ | |  |  | `CHAR(32)` | eDocument: GUID |
| `TR_ElectronicDocEnvelopeID` |  | |  |  | `CHAR(36)` | eDocument Turkey: FIT Envelope ID |
| `TR_ElectronicDocInvoiceID` |  | |  |  | `CHAR(16)` | eDocument Turkey: Invoice ID |
| `TR_ElectronicDocUniqueID` |  | |  |  | `CHAR(36)` | eDocument Turkey: FIT Invoice UUID |
| `TR_EDocBusinessPartnerAlias` |  | |  |  | `CHAR(255)` | Alias |
| `TR_ElectronicDocTaxID` |  | |  |  | `CHAR(11)` | eDocument Turkey: VKN/TCKN |
| `TR_ElectronicDocBusPartner` |  | |  |  | `CHAR(10)` | Business Partner |
| `TR_EDocTaxExclusiveAmount` |  | |  |  | `DEC(23)` |  |
| `TR_ElectronicDocTaxAmount` |  | |  |  | `DEC(23)` |  |
| `TR_EDocTaxInclusiveAmount` |  | |  |  | `DEC(23)` |  |
| `TR_EDocCurrencyKey` |  | |  |  | `CUKY(5)` | Currency Key |
| `TR_EDocBusPartnerName` |  | |  |  | `CHAR(50)` | Business Partner Name |
| `TR_EDocCancelReason` |  | |  |  | `CHAR(255)` | eDocument Turkey: Cancellation Reason |
| `TR_EDocCancelReasonCode` |  | |  |  | `CHAR(2)` | eDocument Turkey: Cancellation Reason Code |
| `TR_ElectronicDocCompanyCode` |  | | `_ElectronicDoc` | `ElectronicDocCompanyCode` | `CHAR(4)` | Company Code |

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
