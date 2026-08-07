---
name: I_MAINTMBLTRANSHISTORYCUBE
description: Mobile Transaction History - Cube
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLTRANSHISTORYCUBE')/$value
semantic_en: Mobile Transaction History - Cube
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - transaction
  - metadata-only
---
# I_MAINTMBLTRANSHISTORYCUBE

**Mobile Transaction History - Cube**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLTRANSHISTORYCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintMblTransHistoryRecordUUID` |  | |  |  | `CHAR(32)` | Registry Record GUID |
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MaintMblTransBusinessObjectKey` |  | |  |  | `CHAR(100)` | Mobile transaction history object key |
| `BusinessObjectType` |  | |  |  | `CHAR(10)` | Object type |
| `MobileDataObject` |  | |  |  | `CHAR(40)` | Syclo Mobile Data Object ID |
| `MblDtaObjectHandlerMethodType` |  | |  |  | `CHAR(3)` | Mobile Data Object Handler Method Type |
| `MaintMblApplInbTransReqType` |  | |  |  | `CHAR(1)` | Inbound Transaction: Requesting Type |
| `OMDOTechnicalEntityType` |  | |  |  | `CHAR(40)` | oMDO - Technical Entity Type |
| `OMDOModelEntityTypeName` |  | |  |  | `CHAR(128)` | Service Builder: Artifact Name |
| `OMDOOperation` |  | |  |  | `CHAR(30)` | oMDO Operation |
| `ODataMobileDataObject` |  | |  |  | `CHAR(40)` | oData Mobile Data Object Id |
| `MaintMblTransChangedByUserUUID` |  | |  |  | `CHAR(32)` | User GUID |
| `LastChangeDate` |  | |  |  | `DATS(8)` |  |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `NrOfMaintMblTransHistRecords` |  | |  |  | `INT1(3)` |  |
