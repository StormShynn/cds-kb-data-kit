---
name: I_BANKMESSAGESITUATION
description: "Bank Message"
app_component: LOD-FSN-AGT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKMESSAGESITUATION')/$value
semantic_en: "Bank Message"
tags:
  - LOD
  - component:LOD-FSN-AGT
  - interface-view
  - LOD-FSN
  - LOD-FSN-AGT
  - metadata-only
---
# I_BANKMESSAGESITUATION

**Bank Message**

| Property | Value |
|---|---|
| App Component | `LOD-FSN-AGT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKMESSAGESITUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankMessageUUID` |  | |  |  | `RAW(16)` | Globally Unique Identifier |
| `BankMessageMessageType` |  | |  |  | `CHAR(32)` | Message Type |
| `BankMessageSenderLongID` |  | |  |  | `CHAR(64)` | Sender ID |
| `BankMessageReceiverLongID` |  | |  |  | `CHAR(64)` | Receiver ID |
| `BankMessageIdentifier` |  | |  |  | `CHAR(64)` | Message ID |
| `BankMessageDirection` |  | |  |  | `CHAR(3)` | Message Direction |
| `BankMessageStatus` |  | |  |  | `CHAR(5)` | Status |
| `BankMessageRoutingCategory` |  | |  |  | `CHAR(10)` | Routing Category |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `BankMessageBCMBatchNumber` |  | |  |  | `NUMC(10)` | BCM Batch Number |
| `BkMessageOriginApplicationType` |  | |  |  | `CHAR(10)` | Origin Application |
| `BankMessageIsExpired` |  | |  |  | `CHAR(1)` | Expired (indicates if e.g. a message is expired) |
| `BankMessageExpirationDate` |  | |  |  | `DATS(8)` | Expiration Date |
| `BankMessageIsSensitive` |  | |  |  | `CHAR(1)` | Sensitive Data |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `CreationDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | User Name |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
