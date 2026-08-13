---
name: D_CAINVCGDOCCREATEDSOURCEDOC
description: "D Cainvcgdoccreatedsourcedoc"
semantic_vi: "View D_CAINVCGDOCCREATEDSOURCEDOC hiển thị thông tin nguồn tài liệu cho hóa đơn được tạo trong thành phần FI-CA-INV-2CL. Nó được sử dụng để lấy thông tin nguồn tài liệu loại và số cho hóa đơn."
keywords:
  - "invoice"
  - "invoice source document"
  - "đơn hóa đơn"
  - "nguồn tài liệu hóa đơn"
  - "fi-ca-inv-2cl"
  - "source document category"
  - "source document number"
  - "cainvcgsourcedocumentcat"
  - "cainvcgsourcedocumentnumber"
semantic_en: "The D_CAINVCGDOCCREATEDSOURCEDOC view exposes source document information for invoices created in the FI-CA-INV-2CL component. It is used to retrieve source document categories and numbers for invoices."
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# D_CAINVCGDOCCREATEDSOURCEDOC

**D Cainvcgdoccreatedsourcedoc**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvcgSourceDocumentCat` |  | |  | `srcdoccat_kk` |  |  |
| `CAInvcgSourceDocumentNumber` |  | |  | `srcdocno_kk` |  |  |
| `_Parent` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Invcg Doc Created - Source Document'
@ObjectModel: {
  sapObjectNodeType.name: 'ContrAcctgInvoicingDocument',
  supportedCapabilities: [#DATA_STRUCTURE]
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions
define abstract entity D_CAInvcgDocCreatedSourceDoc
{
  CAInvcgSourceDocumentCat    : srcdoccat_kk;
  CAInvcgSourceDocumentNumber : srcdocno_kk;
  _Parent                     : association to parent D_ContrAcctgInvcgDocCreated;
}
```
