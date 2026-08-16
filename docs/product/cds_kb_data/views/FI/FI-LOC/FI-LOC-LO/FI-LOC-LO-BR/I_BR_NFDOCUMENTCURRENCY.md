---
name: I_BR_NFDOCUMENTCURRENCY
description: "BR Nfdocumentcurrency"
semantic_vi: "View I_BR_NFDOCUMENTCURRENCY hiển thị thông tin về đồng tiền của một tài liệu thuế Brazil, có ích khi làm việc với các giao dịch tài chính và tuân thủ thuế."
keywords:
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
  - "fi-loc-lo-br"
  - "currency"
  - "document"
  - "tax"
  - "compliance"
  - "finance"
  - "sap"
  - "cds"
  - "view"
semantic_en: "The I_BR_NFDOCUMENTCURRENCY view exposes information about the currency of a Brazilian tax document, which is useful when working with financial transactions and tax compliance."
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
  - currency
  - document
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDOCUMENTCURRENCY

**BR Nfdocumentcurrency**

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
| `BR_NotaFiscal` | ✓ | |  | `docnum` |  |  |
| `SalesDocumentCurrency` |  | |  | `waerk` |  |  |
| `_SalesDocumentCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocumentCurrency` | `I_Currency` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Currency of Brazil Nota Fiscal Document'
@AbapCatalog.sqlViewName: 'IBRNFDOCCRCY'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AccessControl.personalData.blocking: #NOT_REQUIRED
define view I_BR_NFDocumentCurrency
  as select from j_1bnfdoc as NFDocument
  association [1..1] to I_Currency as _SalesDocumentCurrency on $projection.SalesDocumentCurrency = _SalesDocumentCurrency.Currency
{
  key NFDocument.docnum as BR_NotaFiscal,
  @Semantics.currencyCode:true
  NFDocument.waerk as SalesDocumentCurrency,

  _SalesDocumentCurrency
}
```
