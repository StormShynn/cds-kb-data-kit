---
name: I_BR_NFTEXTS
description: "BR Nftexts"
semantic_vi: "View BR Nftexts hiển thị dữ liệu văn bản hóa đơn cho một ghi chú tài chính, bao gồm cả văn bản và thông tin liên quan. Nó được sử dụng khi truy cập và xử lý các bản ghi văn bản hóa đơn."
keywords:
  - "invoice text"
  - "văn bản hóa đơn"
  - "fiscal note"
  - "ghi chú tài chính"
  - "invoice data"
  - "dữ liệu hóa đơn"
  - "sap fi"
  - "fi-loc-lo-br"
  - "text data"
  - "dữ liệu văn bản"
semantic_en: "The BR Nftexts view exposes invoice text data for a fiscal note, including the text itself and related information. It is used when accessing and processing invoice text records."
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
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFTEXTS

**BR Nftexts**

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
| `BR_NotaFiscalItem` | ✓ | |  | `itmnum` |  |  |
| `BR_NFTextType` | ✓ | |  | `type` |  |  |
| `BR_NFTextSequenceNumber` | ✓ | |  | `counter` |  |  |
| `BR_NFText` |  | |  | `text` |  |  |
| `BR_NFTaxPartnerTextID` |  | |  | `textid` |  |  |
| `_BR_NFTextType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFTextType` | `I_BR_NFTextType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRNFTEXTS'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Brazil Nota Fiscal Messages'
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
define view I_BR_NFTexts
  as select from logbr_nf_texts
  association [0..1] to I_BR_NFTextType as _BR_NFTextType on _BR_NFTextType.BR_NFTextType = $projection.BR_NFTextType
{
  key docnum  as BR_NotaFiscal,
  key itmnum  as BR_NotaFiscalItem,
      @ObjectModel.foreignKey.association: '_BR_NFTextType'
  key type    as BR_NFTextType,
  key counter as BR_NFTextSequenceNumber,
      text    as BR_NFText,
      textid  as BR_NFTaxPartnerTextID,
      _BR_NFTextType
}
```
