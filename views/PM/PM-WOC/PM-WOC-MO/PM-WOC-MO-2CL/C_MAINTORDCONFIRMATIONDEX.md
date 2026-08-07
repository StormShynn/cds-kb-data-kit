---
name: C_MAINTORDCONFIRMATIONDEX
description: "This CDS view is designed to extract and provide detailed information related to maintenance order confirmations. It serves as a data source for analytics and reporting purposes, enabling users to access transactional data associated with maintenance orders, including details about work performed, personnel involved, and confirmation statuses. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDCONFIRMATIONDEX')/$value
semantic_en: "This CDS view is designed to extract and provide detailed information related to maintenance order confirmations. It serves as a data source for analytics and reporting purposes, enabling users to access transactional data associated with maintenance orders, including details about work performed, personnel involved, and confirmation statuses. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Maintenance Order Conf Data Extractor — CDS view tiêu dùng dựa trên I_MaintenanceOrderConfirmation."
keywords:
  - "maintenance"
  - "order"
  - "conf"
  - "data"
  - "extractor"
  - "maint"
  - "cntr"
  - "value"
  - "confirmation"
  - "entry"
  - "operation"
  - "counter"
  - "routing"
  - "number"
tags:
  - PM
  - bo:companycode
  - component:PM-WOC-MO-2CL
  - consumption-view
  - lob:plant maintenance
  - order
  - PM-WOC
  - PM-WOC-MO
  - PM-WOC-MO-2CL
  - transaction
---
# C_MAINTORDCONFIRMATIONDEX

**This CDS view is designed to extract and provide detailed information related to maintenance order confirmations. It serves as a data source for analytics and reporting purposes, enabling users to access transactional data associated with maintenance orders, including details about work performed, personnel involved, and confirmation statuses. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDCONFIRMATIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrderConf` | ✓ | |  |  | `NUMC(10)` | Completion confirmation number for the operation |
| `MaintOrderConfCntrValue` | ✓ | |  |  | `NUMC(8)` | Confirmation counter |
| `MaintOrderConfirmationEntryDte` |  | |  |  | `DATS(8)` | Entry Date of Confirmation |
| `MaintOrderOperationCounter` |  | |  |  | `NUMC(8)` | General counter for order |
| `MaintOrderRoutingNumber` |  | |  |  | `NUMC(10)` | Routing Number of Operations in the Order |
| `EnteredByUser` |  | |  |  | `CHAR(12)` | User who Entered the Confirmation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Change |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID |
| `ConfirmationText` |  | |  |  | `CHAR(40)` | Confirmation text |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `VarianceReasonCode` |  | |  |  | `CHAR(4)` | Reason for Variance |
| `NmbrOfMaintTechnicianCapSplits` |  | |  |  | `INT1(3)` | Split number |
| `ActualWorkQuantity` |  | |  |  | `QUAN(7)` | Actual work |
| `ActualWorkQuantityUnit` |  | |  |  | `UNIT(3)` | Unit for Work |
| `ActivityType` |  | |  |  | `CHAR(6)` | Activity Type for Confirmation |
| `ActualDuration` |  | |  |  | `QUAN(5)` | Actual Duration for Confirmation |
| `ActualDurationUnit` |  | |  |  | `UNIT(3)` | Unit for actual duration |
| `MaintenanceOrder` |  | |  |  | `CHAR(12)` | Order Number |
| `MaintenanceOrderOperation` |  | |  |  | `CHAR(4)` | Maintenance Order Operation |
| `MaintenanceOrderSubOperation` |  | |  |  | `CHAR(4)` | Maintenance Order Suboperation |
| `IsFinalConfirmation` |  | |  |  | `CHAR(1)` | Checkbox |
| `RemainingWorkQuantity` |  | |  |  | `QUAN(7)` | Remaining Work |
| `RemainingWorkQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Remaining Work |
| `IsReversed` |  | |  |  | `CHAR(1)` | Indicator: Document was reversed |
| `IsReversal` |  | |  |  | `CHAR(1)` | Checkbox |
| `CancldMaintOrderConfCntrValue` |  | |  |  | `NUMC(8)` | Confirmation Counter of Cancelled Confirmation |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDCONFIRMATIONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MAINTORDCONFIRMATIONDEX')/$value)*

```abap
@VDM.viewType: #CONSUMPTION
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck:#MANDATORY
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'MaintenanceOrderConfirmation'
@EndUserText.label: 'Maintenance Order Conf Data Extractor'
@ObjectModel: {
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL
  }
  }
@Analytics: {
dataCategory: #FACT,
dataExtraction: {
  enabled: true,
      delta.changeDataCapture: {

 mapping:[
             {
                    table: 'AFRU', role: #MAIN,
                    viewElement: ['MaintOrderConf','MaintOrderConfCntrValue'],
                    tableElement: ['RUECK','RMZHL']

                 },
                 {
                    table: 'AFVC', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['MaintOrderRoutingNumber','MaintOrderOperationCounter'],
                    tableElement: ['AUFPL','APLZL']

                 }

                 ]
                 }
            }
        }
@Analytics.technicalName: 'CPMORDCONFDEX'
define view entity C_MaintOrdConfirmationDEX
  as select from I_MaintenanceOrderConfirmation
{
  key MaintOrderConf,
  key MaintOrderConfCntrValue,
      MaintOrderConfirmationEntryDte,
      MaintOrderOperationCounter,
      MaintOrderRoutingNumber,
      EnteredByUser,
      LastChangeDate,
      LastChangedByUser,
      PostingDate,
      WorkCenterInternalID,
      ConfirmationText,
      Language,
      VarianceReasonCode,
      NmbrOfMaintTechnicianCapSplits,
      @Semantics.quantity.unitOfMeasure: 'ActualWorkQuantityUnit'
      ActualWorkQuantity,
      ActualWorkQuantityUnit,
      ActivityType,
      @Semantics.quantity.unitOfMeasure: 'ACTUALDURATIONUNIT' 
      ActualDuration,
      ActualDurationUnit,
      MaintenanceOrder,
      MaintenanceOrderOperation,
      MaintenanceOrderSubOperation,
      @EndUserText.label: 'Is Final Confirmation'
      IsFinalConfirmation,
      @Semantics.quantity.unitOfMeasure: 'RemainingWorkQuantityUnit'
      RemainingWorkQuantity,
      RemainingWorkQuantityUnit,
      IsReversed,
      @EndUserText.label: 'Is Reversal'
      IsReversal,
      CancldMaintOrderConfCntrValue
}
```
