---
name: I_APMPAYMENTORDER
description: APM Payment Order
app_component: FIN-FSCM-PF
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTORDER')/$value
semantic_en: APM Payment Order
tags:
  - FIN
  - component:FIN-FSCM-PF
  - FIN-FSCM
  - FIN-FSCM-PF
  - interface-view
  - lob:finance
  - order
  - payment
  - metadata-only
---
# I_APMPAYMENTORDER

**APM Payment Order**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_APMPAYMENTORDER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaymentOrderUUID` |  | |  |  | `RAW(16)` | Globally Unique Identifier |
| `ClearingArea` |  | |  |  | `CHAR(6)` | Clearing Area |
| `APMPaymentOrderDate` |  | |  |  | `DATS(8)` | Payment Order Date |
| `APMPaymentOrderNumber` |  | |  |  | `NUMC(12)` | Payment Order Number From Number Range |
| `APMPayOrderProcessStatusCode` |  | |  |  | `CHAR(3)` | Technical Status of Payment Order |
| `PaymentOrderType` |  | |  |  | `CHAR(6)` | Payment Order Type |
| `APMPlannedProcessingDate` |  | |  |  | `DATS(8)` | Execution Date (Planned) |
| `APMPlannedProcessingTime` |  | |  |  | `TIMS(6)` | Execution Time (Planned) |
| `APMInternalCreationProcess` |  | |  |  | `CHAR(4)` | Creation Process of Payment Object |
| `APMFormat` |  | |  |  | `CHAR(10)` | Format |
| `APMMedium` |  | |  |  | `CHAR(4)` | Medium |
| `APMChannel` |  | |  |  | `CHAR(10)` | Channel |
| `PaymentOrderScenario` |  | |  |  | `CHAR(1)` | Payment Scenario Description |
| `CreationUserName` |  | |  |  | `CHAR(12)` | Creating User |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Creation Time |
| `PaytInformationIdentification` |  | |  |  | `CHAR(35)` | External Payment Order Number |
| `APMObjectListDate` |  | |  |  | `DATS(8)` | Object List Date |
| `APMObjectListNumber` |  | |  |  | `NUMC(12)` | Object List Number from Number Range (Secondary Key) |
