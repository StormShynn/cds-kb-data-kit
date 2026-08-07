---
name: I_MBLCOMMSERVERDETAILS
description: "Mobile Application Middleware Server"
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLCOMMSERVERDETAILS')/$value
semantic_en: "Mobile Application Middleware Server"
tags:
  - MOB
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - metadata-only
---
# I_MBLCOMMSERVERDETAILS

**Mobile Application Middleware Server**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MBLCOMMSERVERDETAILS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserSessionServer` |  | |  |  | `CHAR(32)` | Middleware Server GUID |
| `MobileUserCommServerName` |  | |  |  | `CHAR(100)` | Middleware Server Name |
| `MobileUserServerDomainName` |  | |  |  | `CHAR(100)` | Server Fully Qualified Domain Name |
| `MobileUserServerTargetHost` |  | |  |  | `CHAR(100)` | Name of target host in IP or host notation |
| `MblUsrCommServerSerialNumber` |  | |  |  | `CHAR(50)` | Syclo Middleware Server Serial No. |
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MblUsrCommServerPortOnHost` |  | |  |  | `NUMC(5)` | Port of Host |
| `MblUsrCommServerIsLocked` |  | |  |  | `CHAR(1)` | Lock flag |
| `MblUsrOutboundTriggerIsDsbld` |  | |  |  | `CHAR(1)` | Boolean Type: 'X' == True '' == False |
| `MblUsrOutbTriggerPortOnHost` |  | |  |  | `NUMC(5)` | Port of Host |
| `MblUsrOutboundTriggerURLType` |  | |  |  | `CHAR(1)` | Outbound Trigger URL Type |
| `MblUsrCommServerComponent` |  | |  |  | `CHAR(30)` | System Component |
| `MblUsrCloudPltfrmTenantInt` |  | |  |  | `CHAR(50)` | Cloud Platform Tenant Id |
| `MobileUserOrganizationInternal` |  | |  |  | `CHAR(50)` | Organization Id |
| `MblUsrCommServerLogicalDest` |  | |  |  | `CHAR(32)` | Logical destination (specified in function call) |
| `MblUsrCommServerConfigureURL` |  | |  |  | `CHAR(255)` | Configure UI URL |
| `MobileUserCommServerCreatedBy` |  | |  |  | `CHAR(12)` | Created by |
| `MblUsrCommServerCreatedDteTme` |  | |  |  | `DEC(15)` | Creation timestamp |
| `MobileUserCommServerChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `MblUsrCommServerChangedDteTme` |  | |  |  | `DEC(15)` | Changed time stamp |
