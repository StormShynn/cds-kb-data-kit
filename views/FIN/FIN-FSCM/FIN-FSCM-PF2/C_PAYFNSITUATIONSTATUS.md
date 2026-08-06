---
name: C_PAYFNSITUATIONSTATUS
description: Situation for Status Issue
app_component: FIN-FSCM-PF2
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONSTATUS')/$value
semantic_en: Situation for Status Issue
tags:
  - FIN
  - component:FIN-FSCM-PF2
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-PF2
  - lob:finance
  - metadata-only
---
# C_PAYFNSITUATIONSTATUS

**Situation for Status Issue**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF2` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONSTATUS')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PayFnPaymentUUID` | `RAW(16)` | Payment UUID |
| `PayFnBusinessStatus` | `CHAR(4)` | Payment Business Status |
| `PayFnStatusReasonISOCode` | `CHAR(35)` | Status Reason Standard ISO Code |
| `PayFnBusinessStatusText` | `CHAR(140)` | Payment Business Status Description |
| `PaymentStatusReasonText` | `CHAR(140)` | ISO Code Name |
| `PayFnNotificationDurationHr` | `DEC(10)` |  |
| `SitnBaseTemplateID` | `CHAR(40)` | Situation Scenario ID |
| `SitnConfignTemplateID` | `CHAR(40)` | Situation Template ID |
| `SitnTypeID` | `CHAR(40)` | Situation Type ID |
