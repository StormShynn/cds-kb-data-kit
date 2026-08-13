---
name: D_CONTRACCTGDOCUMENTCANCELED
description: "D Contracctgdocumentcanceled"
semantic_vi: "View D_CONTRACCTGDOCUMENTCANCELED hiển thị các tài liệu kế toán bị hủy và thông tin khớp toán, hữu ích cho các quá trình phân tích tài chính và khớp toán."
keywords:
  - "accounting document"
  - "tài liệu kế toán"
  - "canceled document"
  - "tài liệu bị hủy"
  - "reconciliation information"
  - "thông tin khớp toán"
  - "fi-ca"
  - "fi"
  - "finance"
  - "finance component"
  - "component fi-ca-2cl"
  - "lob finance"
semantic_en: "The D_CONTRACCTGDOCUMENTCANCELED CDS view exposes canceled accounting documents and their reconciliation information, useful for financial analysis and reconciliation processes."
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - document
  - component:FI-CA-2CL
  - lob:Finance
---
# D_CONTRACCTGDOCUMENTCANCELED

**D Contracctgdocumentcanceled**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAReconciliationKey` |  | |  | `fikey_kk` |  |  |
| `CADocumentType` |  | |  | `blart_kk` |  |  |
| `CADocumentOriginCode` |  | |  | `herkf_kk` |  |  |
| `DocumentDate` |  | |  | `bldat` |  |  |
| `CAPostingDate` |  | |  | `budat_kk` |  |  |
| `CAReferenceDocument` |  | |  | `xblnr_kk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Contract Accounting Document Canceled'

@Metadata.allowExtensions: true

@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

@VDM.usage.type: [#EVENT_SIGNATURE]

define abstract entity D_ContrAcctgDocumentCanceled
{
  CAReconciliationKey  : fikey_kk;
  CADocumentType       : blart_kk;
  CADocumentOriginCode : herkf_kk;
  DocumentDate         : bldat;
  CAPostingDate        : budat_kk;
  CAReferenceDocument  : xblnr_kk;
}
```
