---
name: C_CRDTDCSNDOCAPPRVLSITNTMPL
description: DCD Approval Hierarchy Situation
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNDOCAPPRVLSITNTMPL')/$value
semantic_en: DCD Approval Hierarchy Situation
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
# C_CRDTDCSNDOCAPPRVLSITNTMPL

**DCD Approval Hierarchy Situation**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNDOCAPPRVLSITNTMPL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CaseUUID` |  | |  |  | `CHAR(32)` | Technical Case Key (Case GUID) |
| `CrdtDecisionDocApprvlHierUUID` |  | |  |  | `RAW(16)` | UUID serving as key (parent key, root key) |
| `CreditDecisionDocApprvlHierLvl` |  | |  |  | `INT2(5)` | Approval Level |
| `CreditDecisionDocumentApprover` |  | |  |  | `CHAR(12)` | Approver |
| `CreditDecisionDocApprvrGroup` |  | |  |  | `CHAR(40)` | Approver Group |
| `CreditDecisionDocApprvlStatus` |  | |  |  | `CHAR(1)` | Status |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class at Time of Credit Decision |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
