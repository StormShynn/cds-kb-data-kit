---
name: D_CITINITIATEPARAMETER
description: "D Citinitiateparameter"
semantic_vi: "View D_CITINITIATEPARAMETER hiển thị các tham số tài khoản cho việc khởi tạo một tài khoản mới trong thành phần FI-LOC-CIT. Nó được sử dụng để lấy các tham số cần thiết để tạo một tài khoản mới."
keywords:
  - "accounting document"
  - "tham số tài khoản"
  - "fi-loc-cit"
  - "component"
  - "parameter"
  - "tài khoản mới"
  - "fi"
  - "finance"
  - "lob:finance"
  - "sap"
  - "cds view"
semantic_en: "The D_CITINITIATEPARAMETER view exposes accounting document parameters for initiating a new accounting document in the FI-LOC-CIT component. It is used to retrieve the necessary parameters for creating a new accounting document."
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - component:FI-LOC-CIT
  - lob:Finance
---
# D_CITINITIATEPARAMETER

**D Citinitiateparameter**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FSItemMappingUUID` |  | |  | `char32` |  |  |
| `FiscalYear` |  | |  | `fis_gjahr_no_conv` |  |  |
| `CompanyCode` |  | |  | `fis_bukrs` |  |  |
| `AccountingDocument` |  | |  | `farp_belnr_d` |  |  |
| `Ledger` |  | |  | `fis_rldnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'CIT Initiate Filter Action Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_CITInitiateParameter
{ 
  @Semantics.uuid
  FSItemMappingUUID: char32;
  FiscalYear: fis_gjahr_no_conv;
  CompanyCode: fis_bukrs;
  AccountingDocument: farp_belnr_d;
  Ledger: fis_rldnr;
}
```
