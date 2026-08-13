---
name: D_CITINITIATERESULT
description: "D Citinitiateresult"
semantic_vi: "View D_CITINITIATERESULT cung cấp dữ liệu kết quả khởi xướng thuế thu nhập doanh nghiệp, có thể được sử dụng để phân tích và báo cáo kết quả khởi xướng thuế thu nhập doanh nghiệp trên các mã đơn vị công ty và ngày báo cáo khác nhau."
keywords:
  - "corporate income tax"
  - "tax initiator results"
  - "company code"
  - "reporting date"
  - "fi-loc-cit"
  - "fi"
  - "finance"
  - "tax"
  - "lob:finance"
  - "component:fi-loc-cit"
semantic_en: "The D_CITINITIATERESULT view provides corporate income tax initiator results data, which can be used to analyze and report on corporate income tax initiator results across different company codes and reporting dates."
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
# D_CITINITIATERESULT

**D Citinitiateresult**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FromReportingDate` |  | |  | `dats` |  |  |
| `ToReportingDate` |  | |  | `dats` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `CorporateIncomeTaxHierarchy` |  | |  | `ficite_hryid` |  |  |
| `SourceLedger` |  | |  | `fins_ledger` |  |  |

## Source Code

```abap
@EndUserText.label: 'CIT Initiate Filter Action Result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_CITInitiateResult 
{
  FromReportingDate: abap.dats;
  ToReportingDate: abap.dats;
  CompanyCode : bukrs; 
  CorporateIncomeTaxHierarchy : ficite_hryid; 
  SourceLedger: fins_ledger; 
}
```
