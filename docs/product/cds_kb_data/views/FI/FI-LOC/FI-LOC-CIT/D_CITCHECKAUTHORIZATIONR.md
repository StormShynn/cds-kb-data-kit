---
name: D_CITCHECKAUTHORIZATIONR
description: "D Citcheckauthorizationr"
semantic_vi: "View D_CITCHECKAUTHORIZATIONR cung cấp dữ liệu về quyền hạn đối với cơ cấu thuế thu nhập doanh nghiệp của một mã công ty, chỉ ra liệu việc chỉnh sửa và phân loại có được phép hay không."
keywords:
  - "corporate income tax"
  - "cơ cấu thuế thu nhập doanh nghiệp"
  - "company code"
  - "mã công ty"
  - "authorization"
  - "quyền hạn"
  - "fi-loc-cit"
  - "fi"
  - "fi-loc"
  - "component:fi-loc-cit"
  - "lob:finance"
semantic_en: "The D_CITCHECKAUTHORIZATIONR CDS view provides corporate income tax hierarchy authorization data for a company code, indicating whether editing and classifying are allowed."
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
# D_CITCHECKAUTHORIZATIONR

**D Citcheckauthorizationr**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `CorporateIncomeTaxHierarchy` |  | |  | `ficite_hryid` |  |  |
| `CITHierCoCodeEditingIsAllowed` |  | |  | `boole_d` |  |  |
| `CITHierCoCodeClassfctnIsAllwd` |  | |  | `boole_d` |  |  |

## Source Code

```abap
@EndUserText.label: 'CIT CheckAuthorization Function Result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define abstract entity D_CITCheckAuthorizationR
{
    CompanyCode : bukrs;
    CorporateIncomeTaxHierarchy : ficite_hryid; 
    CITHierCoCodeEditingIsAllowed: boole_d; 
    CITHierCoCodeClassfctnIsAllwd: boole_d; 
    
}
```
