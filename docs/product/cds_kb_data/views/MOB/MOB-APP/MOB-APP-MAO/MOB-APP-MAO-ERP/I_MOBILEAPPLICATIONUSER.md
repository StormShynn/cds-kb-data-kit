---
name: I_MOBILEAPPLICATIONUSER
description: "This CDS view provides the data to answer the following business questions: How many mobile users exist? Which mobile users are locked? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOBILEAPPLICATIONUSER')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: How many mobile users exist? Which mobile users are locked? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - MOB
  - bo:companycode
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - metadata-only
---
# I_MOBILEAPPLICATIONUSER

**This CDS view provides the data to answer the following business questions: How many mobile users exist? Which mobile users are locked? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOBILEAPPLICATIONUSER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserInternal` |  | |  |  | `CHAR(32)` | User GUID |
| `MobileUserDeviceInternal` |  | |  |  | `CHAR(50)` | Syclo Device Id |
| `MobileUserDeviceUser` |  | |  |  | `CHAR(20)` | Syclo Middleware Device User Id |
| `MobileUserServerInternal` |  | |  |  | `CHAR(50)` | Syclo Middleware Server Serial No. |
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MobileUserGroupInternal` |  | |  |  | `CHAR(30)` | Syclo Middleware User Group Id |
| `MobileUser` |  | |  |  | `CHAR(12)` | User Name |
| `MaintMobileApplicationUserName` |  | |  |  | `CHAR(80)` | User Description |
| `MobileUserLastSessionInternal` |  | |  |  | `CHAR(32)` | Session GUID |
| `MobileUserIsLocked` |  | |  |  | `CHAR(1)` | Lock flag |
| `MobileUserProductRoleIsValid` |  | |  |  | `CHAR(1)` | Flag - No Valid Product Role |
| `MobileUserLogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `MobileUserEmailAddress` |  | |  |  | `CHAR(241)` | Recipient address |
| `MobileUserWebAddress` |  | |  |  | `CHAR(241)` | Recipient address |
| `MobileUserDefaultAddressType` |  | |  |  | `CHAR(10)` | Notification address type |
| `MntMblAppUsrDfltAddrTypeName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `MobileUserCreatedBy` |  | |  |  | `CHAR(12)` | Created by |
| `MobileUserCreationDateTime` |  | |  |  | `DEC(15)` | Creation timestamp |
| `MobileUserChangedBy` |  | |  |  | `CHAR(12)` | Last Changed By |
| `MobileUserChangeDateTime` |  | |  |  | `DEC(15)` | Changed time stamp |
| `CreationDate` |  | |  |  | `DATS(8)` |  |
