---
name: C_MAINTMBLTRANSHISTORYQUERY
description: This CDS view allows you to generate a report of mobile transaction history for a set of business object types, mobile users, or mobile applications. This CDS view provides the data to answer the following business questions: Who creates or updates business objects actively? How many business objects are created by the user? How many business objects are created each day? How many business objects are processed per day? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLTRANSHISTORYQUERY')/$value
semantic_en: This CDS view allows you to generate a report of mobile transaction history for a set of business object types, mobile users, or mobile applications. This CDS view provides the data to answer the following business questions: Who creates or updates business objects actively? How many business objects are created by the user? How many business objects are created each day? How many business objects are processed per day? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - MOB
  - bo:companycode
  - component:MOB-APP-MAO-ERP
  - consumption-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - transaction
  - metadata-only
---
# C_MAINTMBLTRANSHISTORYQUERY

**This CDS view allows you to generate a report of mobile transaction history for a set of business object types, mobile users, or mobile applications. This CDS view provides the data to answer the following business questions: Who creates or updates business objects actively? How many business objects are created by the user? How many business objects are created each day? How many business objects are processed per day? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLTRANSHISTORYQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MaintMblTransBusinessObjectKey` |  | |  |  | `CHAR(100)` | Mobile transaction history object key |
| `BusinessObjectType` |  | |  |  | `CHAR(10)` | Object type |
| `MobileDataObject` |  | |  |  | `CHAR(40)` | Syclo Mobile Data Object ID |
| `MblDtaObjectHandlerMethodType` |  | |  |  | `CHAR(3)` | Mobile Data Object Handler Method Type |
| `MaintMblApplInbTransReqType` |  | |  |  | `CHAR(1)` | Inbound Transaction: Requesting Type |
| `ODataMobileDataObject` |  | |  |  | `CHAR(40)` | oData Mobile Data Object Id |
| `OMDOModelEntityTypeName` |  | |  |  | `CHAR(128)` | Service Builder: Artifact Name |
| `OMDOTechnicalEntityType` |  | |  |  | `CHAR(40)` | oMDO - Technical Entity Type |
| `OMDOOperation` |  | |  |  | `CHAR(30)` | oMDO Operation |
| `MaintMblTransChangedByUserUUID` |  | |  |  | `CHAR(32)` | User GUID |
| `LastChangeDate` |  | |  |  | `DATS(8)` |  |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `NrOfMaintMblTransHistRecords` |  | |  |  | `INT1(3)` |  |
