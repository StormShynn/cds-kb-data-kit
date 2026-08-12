---
name: I_MAINTMBLTRANSHISTORYCUBE
description: "This CDS view provides the data to answer the following business questions: Who creates or updates business objects actively? How many business objects are created by the user? How many business objects are created each day? How many business objects are processed perday? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: MOB-APP-MAO-ERP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLTRANSHISTORYCUBE')/$value
semantic_en: "This CDS view provides the data to answer the following business questions: Who creates or updates business objects actively? How many business objects are created by the user? How many business objects are created each day? How many business objects are processed perday? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Mobile Transaction History - Cube — CDS view giao diện dựa trên I_MaintMblTransactionHistory."
keywords:
  - "mobile"
  - "transaction"
  - "history"
  - "cube"
  - "maint"
  - "trans"
  - "record"
  - "user"
  - "application"
  - "business"
  - "object"
  - "type"
  - "data"
tags:
  - MOB
  - bo:companycode
  - component:MOB-APP-MAO-ERP
  - interface-view
  - MOB-APP
  - MOB-APP-MAO
  - MOB-APP-MAO-ERP
  - transaction
---
# I_MAINTMBLTRANSHISTORYCUBE

**This CDS view provides the data to answer the following business questions: Who creates or updates business objects actively? How many business objects are created by the user? How many business objects are created each day? How many business objects are processed perday? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `MOB-APP-MAO-ERP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLTRANSHISTORYCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintMblTransHistoryRecordUUID` | ✓ | |  |  | `CHAR(32)` | Registry Record GUID |
| `MobileUserApplication` |  | |  |  | `CHAR(30)` | Mobile Application Name |
| `MaintMblTransBusinessObjectKey` |  | |  |  | `CHAR(100)` | Mobile transaction history object key |
| `BusinessObjectType` |  | |  |  | `CHAR(10)` | Object type |
| `MobileDataObject` |  | |  |  | `CHAR(40)` | Syclo Mobile Data Object ID |
| `MblDtaObjectHandlerMethodType` |  | |  |  | `CHAR(3)` | Mobile Data Object Handler Method Type |
| `MaintMblApplInbTransReqType` |  | |  |  | `CHAR(1)` | Inbound Transaction: Requesting Type |
| `OMDOTechnicalEntityType` |  | |  |  | `CHAR(40)` | oMDO - Technical Entity Type |
| `OMDOModelEntityTypeName` |  | | `_TechEntyTypeAssgmt` | `OMDOModelEntityTypeName` | `CHAR(128)` | Service Builder: Artifact Name |
| `OMDOOperation` |  | |  |  | `CHAR(30)` | oMDO Operation |
| `ODataMobileDataObject` |  | |  |  | `CHAR(40)` | oData Mobile Data Object Id |
| `MaintMblTransChangedByUserUUID` |  | |  |  | `CHAR(32)` | User GUID |
| `LastChangeDate` |  | |  |  | `DATS(8)` |  |
| `CalendarYear` |  | | `_CalendarDate` | `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` |  | | `_CalendarDate` | `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `NrOfMaintMblTransHistRecords` |  | |  | `1` | `INT1(3)` |  |
| `_CalendarDate` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_InbTransReqTypeText` | | ✓ | | | | |
| `_MblDtaObjHdlrMethodTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TechEntyTypeAssgmt` | `I_OMDOModTechEntyTypeAssgmt` | [0..1] |
| `_CalendarDate` | `I_CalendarDate` | [1..1] |
| `_LastChangedByUser` | `I_MobileApplicationUser` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLTRANSHISTORYCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MAINTMBLTRANSHISTORYCUBE')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: [ '_LastChangedByUser' ]
}

@Analytics: {
  dataCategory: #CUBE,
  internalName: #LOCAL,
  technicalName: 'IMNTMBLTRANHISTC'
}

@EndUserText.label: 'Mobile Transaction History - Cube'

@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}

@ObjectModel: {
  modelingPattern: #ANALYTICAL_CUBE,
  supportedCapabilities: [ #ANALYTICAL_PROVIDER ],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  }
}

@VDM.viewType: #COMPOSITE

define view entity I_MaintMblTransHistoryCube
  as select from I_MaintMblTransactionHistory

  association [0..1] to I_OMDOModTechEntyTypeAssgmt as _TechEntyTypeAssgmt on  _TechEntyTypeAssgmt.ODataMobileDataObject   = $projection.ODataMobileDataObject
                                                                           and _TechEntyTypeAssgmt.OMDOTechnicalEntityType = $projection.OMDOTechnicalEntityType
  association [1..1] to I_CalendarDate              as _CalendarDate       on  _CalendarDate.CalendarDate = $projection.LastChangeDate
  association [1..1] to I_MobileApplicationUser     as _LastChangedByUser  on  _LastChangedByUser.MobileUserInternal = $projection.MaintMblTransChangedByUserUUID
{
  key MaintMblTransHistoryRecordUUID,

      MobileUserApplication,
      MaintMblTransBusinessObjectKey,
      BusinessObjectType,
      MobileDataObject,
      MblDtaObjectHandlerMethodType,
      MaintMblApplInbTransReqType,
      OMDOTechnicalEntityType,
      _TechEntyTypeAssgmt.OMDOModelEntityTypeName,
      OMDOOperation,
      ODataMobileDataObject,
      @ObjectModel.foreignKey.association: '_LastChangedByUser'
      MaintMblTransChangedByUserUUID,
      @EndUserText.label: 'Changed On'
      @ObjectModel.foreignKey.association: '_CalendarDate'
      LastChangeDate,
      _CalendarDate.CalendarYear,
      _CalendarDate.CalendarMonth,

      @Aggregation.default: #SUM
      @EndUserText.label: 'Number of Mobile Transactions'
      1 as NrOfMaintMblTransHistRecords,

      _CalendarDate,
      _CalendarDate._CalendarYear,
      _CalendarDate._CalendarMonth,
      _LastChangedByUser,
      _InbTransReqTypeText,
      _MblDtaObjHdlrMethodTypeText
}
```
