---
name: D_COSTACCTGDOCUMENTREVERSEP
description: "D Costacctgdocumentreversep"
semantic_vi: "View này hiển thị dữ liệu đảo ngược tài khoản kế toán, được sử dụng để đảo ngược hoặc hủy bỏ tài khoản kế toán đã được đăng ký trước đó. Nó được sử dụng khi đảo ngược hoặc sửa lỗi các khoản mục kế toán."
keywords:
  - "accounting document"
  - "dữ liệu tài khoản kế toán"
  - "reverse accounting document"
  - "đảo ngược tài khoản kế toán"
  - "posting date"
  - "ngày đăng ký"
  - "accounting entry"
  - "khoản mục kế toán"
  - "reversal"
  - "hủy bỏ"
  - "ca-gtf-fxu-fi-co"
  - "cross-application components"
semantic_en: "This view exposes accounting document reversal data, which is used to reverse or cancel previously posted accounting documents. It is used when reversing or correcting accounting entries."
app_component: CA-GTF-FXU-FI-CO
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - document
  - component:CA-GTF-FXU-FI-CO
  - lob:Cross-Application Components
---
# D_COSTACCTGDOCUMENTREVERSEP

**D Costacctgdocumentreversep**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocumentHeaderText` |  | |  | `bktxt` |  |  |
| `DocumentDate` |  | |  | `fis_bldat` |  |  |
| `PostingDate` |  | |  | `fis_budat` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities:[#DATA_STRUCTURE]
@EndUserText.label: 'Cost Accounting Document Reverse'

define abstract entity D_CostAcctgDocumentReverseP
{
  AccountingDocumentHeaderText : bktxt;
  //@ObjectModel.mandatory: true
  DocumentDate                 : fis_bldat;
  //@ObjectModel.mandatory: true
  PostingDate                  : fis_budat;
//  @UI.hidden: true
//  WarningsAreIgnored            : bapiignwar;
}
```
