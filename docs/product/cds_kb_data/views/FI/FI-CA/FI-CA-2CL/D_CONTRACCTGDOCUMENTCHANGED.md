---
name: D_CONTRACCTGDOCUMENTCHANGED
description: "D Contracctgdocumentchanged"
semantic_vi: "View này hiển thị các tài liệu kế toán đã thay đổi và thông tin khớp toán, hữu ích cho việc theo dõi các bản cập nhật tài liệu tài chính."
keywords:
  - "accounting document"
  - "tài liệu kế toán"
  - "financial document"
  - "đơn tài chính"
  - "reconciliation"
  - "khớp toán"
  - "fi"
  - "fi-ca"
  - "document change"
  - "cập nhật tài liệu"
semantic_en: "This view exposes changed accounting documents and their reconciliation information, useful for tracking financial document updates."
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
# D_CONTRACCTGDOCUMENTCHANGED

**D Contracctgdocumentchanged**

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
@EndUserText.label: 'Contract Accounting Document Changed'

@Metadata.allowExtensions: true

@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

@VDM.usage.type: [#EVENT_SIGNATURE]

define abstract entity D_ContrAcctgDocumentChanged
{
  CAReconciliationKey  : fikey_kk;
  CADocumentType       : blart_kk;
  CADocumentOriginCode : herkf_kk;
  DocumentDate         : bldat;
  CAPostingDate        : budat_kk;
  CAReferenceDocument  : xblnr_kk;
}
```
