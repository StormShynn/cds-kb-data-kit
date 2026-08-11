---
name: C_MAINTMBLTRANSHISTORYQUERY
description: "This CDS view allows you to generate a report of mobile transaction history for a set of business object types, mobile users, or mobile applications. This CDS view provides the data to answer the following business questions: Who creates or updates business objects actively? How many business objects are created by the user? How many business objects are created each day? How many business objects are processed per day? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLTRANSHISTORYQUERY')/$value
semantic_en: "This CDS view allows you to generate a report of mobile transaction history for a set of business object types, mobile users, or mobile applications. This CDS view provides the data to answer the following business questions: Who creates or updates business objects actively? How many business objects are created by the user? How many business objects are created each day? How many business objects are processed per day? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Mobile Transaction History - Query — CDS view tiêu dùng dựa trên I_MaintMblTransHistoryCube."
keywords:
  - "mobile"
  - "transaction"
  - "history"
  - "query"
  - "user"
  - "application"
  - "maint"
  - "trans"
  - "business"
  - "object"
  - "type"
  - "data"
  - "handler"
  - "method"
tags:
  - MOB
  - bo:companycode
  - component:MOB-APP-MAO-ERP
  - consumption-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - transaction
---
# C_MAINTMBLTRANSHISTORYQUERY

**This CDS view allows you to generate a report of mobile transaction history for a set of business object types, mobile users, or mobile applications. This CDS view provides the data to answer the following business questions: Who creates or updates business objects actively? How many business objects are created by the user? How many business objects are created each day? How many business objects are processed per day? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLTRANSHISTORYQUERY')/$value) |

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

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLTRANSHISTORYQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTMBLTRANSHISTORYQUERY')/$value)*

```abap
@AbapCatalog: {
  compiler.compareFilter: true,
  sqlViewName: 'CMNTMBLTRANHISTQ'
}

@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@Analytics.query: true

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Mobile Transaction History - Query'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #ANALYTICAL_QUERY,
  supportedCapabilities: [ #ANALYTICAL_QUERY ],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  }
}

@VDM.viewType: #CONSUMPTION

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view C_MaintMblTransHistoryQuery
  as select from I_MaintMblTransHistoryCube
{
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  MobileUserApplication,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Object Key'
  MaintMblTransBusinessObjectKey,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  BusinessObjectType,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Mobile Data Object'
  MobileDataObject,

  @AnalyticsDetails.query: {
    display: #TEXT,
    axis: #FREE
  }
  @EndUserText.label: 'Mobile Data Object Handler Method Type'
  MblDtaObjectHandlerMethodType,

  @AnalyticsDetails.query: {
    display: #TEXT,
    axis: #FREE
  }
  @EndUserText.label: 'Request Type'
  MaintMblApplInbTransReqType,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'OData Mobile Data Object'
  ODataMobileDataObject,
  
  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Entity Type'
  OMDOModelEntityTypeName,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Technical Entity Type'
  OMDOTechnicalEntityType,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'OMDO Operation'
  OMDOOperation,

  @AnalyticsDetails.query: {
    display: #TEXT,
    axis: #FREE
  }
  @EndUserText.label: 'Changed By'
  MaintMblTransChangedByUserUUID,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Changed On'
  LastChangeDate,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Change Year'
  CalendarYear,

  @AnalyticsDetails.query: {
    display: #KEY,
    axis: #FREE
  }
  @EndUserText.label: 'Change Month'
  CalendarMonth,

  @EndUserText.label: 'Number of Mobile Transactions'
  NrOfMaintMblTransHistRecords
}
```
