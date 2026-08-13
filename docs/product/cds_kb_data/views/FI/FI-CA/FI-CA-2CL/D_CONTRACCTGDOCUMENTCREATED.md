---
name: D_CONTRACCTGDOCUMENTCREATED
description: "D Contracctgdocumentcreated"
semantic_vi: "View này hiển thị các tài liệu kế toán được tạo và các khóa khớp hợp đồng liên quan, hữu ích cho việc theo dõi và khớp hóa các giao dịch tài chính."
keywords:
  - "accounting document"
  - "tài liệu kế toán"
  - "reconciliation key"
  - "khóa khớp hợp đồng"
  - "financial transaction"
  - "giao dịch tài chính"
  - "fi-ca"
  - "fi"
  - "document"
  - "tài liệu"
  - "component:fi-ca-2cl"
  - "lob:finance"
semantic_en: "This view exposes created accounting documents and their associated reconciliation keys, useful for tracking and reconciling financial transactions."
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
# D_CONTRACCTGDOCUMENTCREATED

**D Contracctgdocumentcreated**

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
@EndUserText.label: 'Contract Accounting Document Created'

@Metadata.allowExtensions: true

@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]

@VDM.usage.type: [#EVENT_SIGNATURE]

define abstract entity D_ContrAcctgDocumentCreated
{
  CAReconciliationKey  : fikey_kk;
  CADocumentType       : blart_kk;
  CADocumentOriginCode : herkf_kk;
  DocumentDate         : bldat;
  CAPostingDate        : budat_kk;
  CAReferenceDocument  : xblnr_kk;
}
```
