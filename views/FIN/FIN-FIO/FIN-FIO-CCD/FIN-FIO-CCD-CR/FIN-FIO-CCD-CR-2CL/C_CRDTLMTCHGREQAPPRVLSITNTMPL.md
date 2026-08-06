---
name: C_CRDTLMTCHGREQAPPRVLSITNTMPL
description: Credit Limit Request Approval Template
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTLMTCHGREQAPPRVLSITNTMPL')/$value
semantic_en: Credit Limit Request Approval Template
tags:
  - FIN
  - component:FIN-FIO-CCD-CR-2CL
  - consumption-view
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-CR
  - FIN-FIO-CCD-CR-2CL
  - lob:finance
  - metadata-only
---
# C_CRDTLMTCHGREQAPPRVLSITNTMPL

**Credit Limit Request Approval Template**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTLMTCHGREQAPPRVLSITNTMPL')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CaseUUID` | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CrdtLmtChgReqApprvlHierUUID` | `RAW(16)` | UUID serving as key (parent key, root key) |
| `CrdtLmtChgReqApprvlHierLevel` | `INT2(5)` | Approval Level |
| `CreditLimitChangeReqApprover` | `CHAR(12)` | Approver |
| `CreditLimitChgReqApprvrGroup` | `CHAR(40)` | Approver Group |
| `CreditLimitChgReqApprvlStatus` | `CHAR(1)` | Status |
| `CreditSegment` | `CHAR(10)` | Credit Segment |
| `CaseID` | `CHAR(12)` | Case ID |
