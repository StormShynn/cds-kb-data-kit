---
name: D_CITINITIATERESULT
description: D Citinitiateresult
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
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
