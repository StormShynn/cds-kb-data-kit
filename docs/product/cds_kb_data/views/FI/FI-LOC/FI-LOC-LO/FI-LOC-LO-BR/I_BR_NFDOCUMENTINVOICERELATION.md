---
name: I_BR_NFDOCUMENTINVOICERELATION
description: "BR Nfdocumentinvoicerelation"
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - document
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDOCUMENTINVOICERELATION

**BR Nfdocumentinvoicerelation**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NFSourceDocumentNumber` | ✓ | | `_BR_NFItem` | `BR_NFSourceDocumentNumber` |  |  |
| `BR_NotaFiscal` |  | | `_BR_NFDocument` | `BR_NotaFiscal` |  |  |
| `BR_NFType` |  | | `_BR_NFDocument` | `BR_NFType` |  |  |
| `BR_NFSNumber` |  | | `_BR_NFDocument` | `BR_NFSNumber` |  |  |
| `BR_NFSVerificationCode` |  | | `_BR_NFDocument` | `BR_NFSVerificationCode` |  |  |
| `BR_NFAuthznProtocolNumber` |  | | `_BR_NFDocument` | `BR_NFAuthznProtocolNumber` |  |  |
| `BR_NFAuthznProtocolNumber16` |  | | `_BR_NFDocument` | `BR_NFAuthznProtocolNumber16` |  |  |
| `BR_NFAuthenticationDate` |  | | `_BR_NFDocument` | `BR_NFAuthenticationDate` |  |  |
| `BR_NFAuthenticationTime` |  | | `_BR_NFDocument` | `BR_NFAuthenticationTime` |  |  |
| `BR_NFeRandomNumber` |  | | `_BR_NFeActive` | `BR_NFeRandomNumber` |  |  |
| `IssuingType` |  | | `_BR_NFeActive` | `IssuingType` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Nota Fiscal and Invoice Relation'
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType:{
  serviceQuality: #D,
  sizeCategory: #XL,
  dataClass: #MIXED
}
///*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view entity I_BR_NFDocumentInvoiceRelation
  as select distinct from I_BR_NFItem     as _BR_NFItem
    inner join            I_BR_NFDocument as _BR_NFDocument on _BR_NFItem.BR_NotaFiscal = _BR_NFDocument.BR_NotaFiscal
    inner join            I_BR_NFeActive  as _BR_NFeActive  on _BR_NFItem.BR_NotaFiscal = _BR_NFeActive.BR_NotaFiscal
{
  key _BR_NFItem.BR_NFSourceDocumentNumber,
      _BR_NFDocument.BR_NotaFiscal,
      _BR_NFDocument.BR_NFType,
      _BR_NFDocument.BR_NFSNumber,
      _BR_NFDocument.BR_NFSVerificationCode,
      _BR_NFDocument.BR_NFAuthznProtocolNumber,
      _BR_NFDocument.BR_NFAuthznProtocolNumber16,
      _BR_NFDocument.BR_NFAuthenticationDate,
      _BR_NFDocument.BR_NFAuthenticationTime,
      _BR_NFeActive.BR_NFeRandomNumber,
      _BR_NFeActive.IssuingType
}
where
  _BR_NFItem.BR_NFSourceDocumentType = 'LI'
```
