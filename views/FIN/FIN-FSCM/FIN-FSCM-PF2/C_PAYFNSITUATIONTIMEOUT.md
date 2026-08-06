---
name: C_PAYFNSITUATIONTIMEOUT
description: Situation for Timeout Issue
app_component: FIN-FSCM-PF2
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONTIMEOUT')/$value
semantic_en: Situation for Timeout Issue
tags:
  - FIN
  - component:FIN-FSCM-PF2
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-PF2
  - lob:finance
  - metadata-only
---
# C_PAYFNSITUATIONTIMEOUT

**Situation for Timeout Issue**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF2` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONTIMEOUT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PayFnSetUUID` | `RAW(16)` | Object UUID |
| `PayFnRelatedGenericObjectType` | `CHAR(10)` | Linked Object Type - Right Side |
| `PayFnFuncnlApprovalCodeDesc` | `CHAR(36)` | Functional payment approval classifier - Description text |
| `PayFnNotifyTimeoutDurationHr` | `DEC(10)` |  |
| `PayFnApprovalDurationHr` | `DEC(10)` |  |
| `PayFnNumberOfPayments` | `INT4(10)` |  |
| `SitnBaseTemplateID` | `CHAR(40)` | Situation Scenario ID |
| `SitnConfignTemplateID` | `CHAR(40)` | Situation Template ID |
| `SitnTypeID` | `CHAR(40)` | Situation Type ID |
