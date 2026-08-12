---
name: I_BANKMESSAGESITUATION
description: "Bank Message"
app_component: LOD-FSN-AGT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKMESSAGESITUATION')/$value
semantic_en: "Bank Message"
semantic_vi: "I_BANKMESSAGESITUATION — CDS view giao diện dựa trên I_BankMessage."
keywords:
  - "bankmessagesituation"
  - "bank"
  - "message"
  - "type"
  - "sender"
  - "long"
  - "receiver"
  - "identifier"
tags:
  - LOD
  - component:LOD-FSN-AGT
  - interface-view
  - LOD-FSN
  - LOD-FSN-AGT
---
# I_BANKMESSAGESITUATION

**Bank Message**

| Property | Value |
|---|---|
| App Component | `LOD-FSN-AGT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKMESSAGESITUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BankMessageUUID` | ✓ | |  |  | `RAW(16)` | Globally Unique Identifier |
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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKMESSAGESITUATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BANKMESSAGESITUATION')/$value)*

```abap
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@EndUserText: { label: 'Bank Message' }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  representativeKey: 'BankMessageUUID',
  semanticKey: [ 'BankMessageIdentifier' ],
  usageType.dataClass: #TRANSACTIONAL,
  usageType.serviceQuality: #C,
  usageType.sizeCategory: #L,
  supportedCapabilities:[#SITUATION_ANCHOR, #SITUATION_TRIGGER, #SITUATION_DATACONTEXT],
  modelingPattern: #SITUATION_TRIGGER
}
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define root view entity I_BankMessageSituation
  as select from I_BankMessage
{
  key BankMessageUUID,
      BankMessageMessageType,
      BankMessageSenderLongID,
      BankMessageReceiverLongID,
      BankMessageIdentifier,
      BankMessageDirection,
      BankMessageStatus,
      BankMessageRoutingCategory,
      CompanyCode,
      BankMessageBCMBatchNumber,

      BkMessageOriginApplicationType,
      @Semantics.booleanIndicator: true
      BankMessageIsExpired,
      BankMessageExpirationDate,
      @Semantics.booleanIndicator: true
      BankMessageIsSensitive,

      @EndUserText: { label: 'Created By', quickInfo: 'Created By' }
      CreatedByUser,
      @EndUserText: { label: 'Created On', quickInfo: 'Created On' }
      CreationDateTime,
      @EndUserText: { label: 'Last Changed By', quickInfo: 'Last Changed By' }
      LastChangedByUser,
      @EndUserText: { label: 'Last Changed On', quickInfo: 'Last Changed On' }
      LastChangeDateTime
}
```
