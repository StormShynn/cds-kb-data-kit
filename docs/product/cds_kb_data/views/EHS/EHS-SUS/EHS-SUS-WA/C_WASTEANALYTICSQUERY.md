---
name: C_WASTEANALYTICSQUERY
description: "This CDS view retrieves the outgoing and confirmed quantities of waste products that are part of waste transportation documents, along with the corresponding units of measure. This CDS view provides the data to answer the following business questions: How much waste has been transported and disposed of during a certain period? How much waste is still pending transportation? How much waste has been tracked in the My Waste Transportation Documents app for a specific product, waste code, disposal facility, and so on. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WASTEANALYTICSQUERY')/$value
semantic_en: "This CDS view retrieves the outgoing and confirmed quantities of waste products that are part of waste transportation documents, along with the corresponding units of measure. This CDS view provides the data to answer the following business questions: How much waste has been transported and disposed of during a certain period? How much waste is still pending transportation? How much waste has been tracked in the My Waste Transportation Documents app for a specific product, waste code, disposal facility, and so on. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Waste Data Analytics - Query — CDS view tiêu dùng (master data) dựa trên I_WasteAnalyticsCube."
keywords:
  - "waste"
  - "data"
  - "analytics"
  - "query"
  - "envrmt"
  - "transp"
  - "matl"
  - "assgd"
  - "code"
  - "stream"
  - "rgty"
  - "value"
tags:
  - EHS
  - bo:companycode
  - component:EHS-SUS-WA
  - consumption-view
  - document
  - EHS-SUS
  - EHS-SUS-WA
  - product
---
# C_WASTEANALYTICSQUERY

**This CDS view retrieves the outgoing and confirmed quantities of waste products that are part of waste transportation documents, along with the corresponding units of measure. This CDS view provides the data to answer the following business questions: How much waste has been transported and disposed of during a certain period? How much waste is still pending transportation? How much waste has been tracked in the My Waste Transportation Documents app for a specific product, waste code, disposal facility, and so on. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WASTEANALYTICSQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteTranspDocUUID` | ✓ | |  |  | `RAW(16)` | Waste Transportation Document UUID |
| `EnvWstTranspDocMatlAssgdUUID` | ✓ | |  |  | `RAW(16)` | Waste Transportation Document Material Assigned |
| `EnvrmtWasteCodeUUID` | ✓ | |  |  | `RAW(16)` | NodeID |
| `WasteStreamRgtyCode` | ✓ | |  |  | `CHAR(4)` | Waste Stream Regulatory Code |
| `WasteStreamRgtyCodeValue` | ✓ | |  |  | `CHAR(4)` | Waste Stream Regulatory Code Value |
| `EnvrmtWastePartnerNmbr` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `EHSMainLocationID` | ✓ | |  |  | `CHAR(20)` | Location ID |
| `EHSMainLocationName` |  | |  |  | `CHAR(60)` | Location |
| `CmplRqVersUUID` |  | |  |  | `RAW(16)` | Compliance Requirement UUID |
| `ClassifiedAsDangerousGood` |  | |  |  | `CHAR(2)` | Classified As |
| `WasteTranspDocID` |  | |  |  | `CHAR(20)` | ID of Waste Transportation Document |
| `EnvrmtWasteTranspDocType` |  | |  |  | `CHAR(10)` | Waste Transportation Document Type ID |
| `EnvrmtWasteTranspDocStatus` |  | |  |  | `CHAR(3)` | Waste Transportation Document Status |
| `CmplRqVersPermitNumber` |  | |  |  | `CHAR(80)` | Permit Number |
| `EnvWstTranspDocPrintedDate` |  | |  |  | `DATS(8)` | Waste Transportation Document Print Date |
| `EnvWstTranspDocHandoverDate` |  | |  |  | `DATS(8)` | Waste Transportation Document Handover Date |
| `EnvWstTranspDocTakeAcceptDate` |  | |  |  | `DATS(8)` | Transportation Document Take/Accept date |
| `EnvrmtWasteTransptrRegnID` |  | |  |  | `CHAR(20)` | Waste Registration Number |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `EnvWstTranspDocDisposerDate` |  | |  |  | `DATS(8)` | Transportation Document Take/Accept date |
| `EnvrmtWasteGnrtrUUID` |  | |  |  | `RAW(16)` | Waste Generator UUID |
| `EnvrmtWasteGnrtrID` |  | |  |  | `CHAR(20)` | Waste Generator ID |
| `WasteRegistrationNumber` |  | |  |  | `CHAR(60)` | Waste Registration Number |
| `WasteTransferRequestNumber` |  | |  |  | `CHAR(20)` | Number of Waste Transfer Request |
| `EHSLocationID` |  | |  |  | `CHAR(20)` | Location ID |
| `WasteTransfReqStatus` |  | |  |  | `CHAR(2)` | Status of Waste Transfer Request |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `WasteDisposalChannelNumber` |  | |  |  | `CHAR(20)` | Disposal Channel Number |
| `WasteDisposalChannelName` |  | |  |  | `CHAR(40)` | Disposal Channel Name |
| `EnvrmtWasteFcltyRegistrationID` |  | |  |  | `CHAR(20)` | Waste Registration Number |
| `EnvrmtWastePartFcltyName` |  | |  |  | `CHAR(60)` | Waste Disposal Facility Name |
| `Material` |  | |  |  | `CHAR(40)` | Product |
| `WasteStreamContainerType` |  | |  |  | `CHAR(4)` | Waste Stream Container Type |
| `EnvrmtWasteMgmtMethCode` |  | |  |  | `CHAR(10)` | Waste Management Method Code |
| `EnvrmtWasteCode` |  | |  |  | `CHAR(20)` | Waste Code |
| `EnvrmtWasteCodeShortDesc` |  | |  |  | `CHAR(132)` | Normalized text used for searching |
| `EnvrmtWasteHazardCharcID` |  | |  |  | `CHAR(2)` | Waste Type ID |
| `CmplRqVers` |  | |  |  | `CHAR(40)` | Compliance Requirement Version ID |
| `CmplRqVersName` |  | |  |  | `CHAR(255)` | Name of the Compliance Requirement Version |
| `WasteStreamRgtyCodeValueText` |  | |  |  | `CHAR(255)` | Description (Extra Long) |
| `EnvrmtWasteOutgoingQuantity` |  | |  | `1` | `INT1(3)` |  |
| `EnvrmtWasteConfirmedQuantity` |  | |  | `1` | `INT1(3)` |  |
| `EnvrmtWasteOutgoingQtyCode` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `EnvrmtWasteConfirmedQtyCode` |  | |  |  | `UNIT(3)` | Base Unit of Measure |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WASTEANALYTICSQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_WASTEANALYTICSQUERY')/$value)*

```abap
@AbapCatalog:
{
  sqlViewName: 'CWANALYTSQ',
  compiler.compareFilter: true
}

@AccessControl: { authorizationCheck: #PRIVILEGED_ONLY }

@VDM.viewType: #CONSUMPTION

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata: { allowExtensions: true,
             ignorePropagatedAnnotations: true 
             }
@Analytics.query: true

@OData.publish: true

@ObjectModel:
{
  usageType:
  {
    dataClass: #MASTER,
    sizeCategory: #XL,
    serviceQuality: #D
  },
  supportedCapabilities: [#ANALYTICAL_QUERY],
  modelingPattern: #ANALYTICAL_QUERY
}

@EndUserText.label: 'Waste Data Analytics - Query'
define view C_WasteAnalyticsQuery
  with parameters
    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_DATE
    @Semantics.businessDate.at: true
    P_Date     : sydatum,

    @Consumption.hidden: true
    @Environment.systemField: #SYSTEM_LANGUAGE
    P_Language : sylangu

  as select from I_WasteAnalyticsCube( P_Date: $parameters.P_Date,
                                   P_Language: $parameters.P_Language )
{
      @UI.hidden: true
  key EnvrmtWasteTranspDocUUID,
      @UI.hidden: true
  key EnvWstTranspDocMatlAssgdUUID,
      @UI.hidden: true
  key EnvrmtWasteCodeUUID,
      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT } }
      @EndUserText.label: 'Regulatory Code'
  key WasteStreamRgtyCode,
      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT } }
      @EndUserText.label: 'Regulatory Code Value'
  key WasteStreamRgtyCodeValue,
      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT_KEY } }
      @EndUserText.label: 'Transporter'
  key EnvrmtWastePartnerNmbr,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter : { selectionType : #SINGLE, multipleSelections : true}
  key EHSMainLocationID,

      @Semantics.text: true
      EHSMainLocationName,

      @UI.hidden: true
      CmplRqVersUUID,
      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT } }
      @EndUserText.label: 'Classified As'
      ClassifiedAsDangerousGood,

      /* Transportation Document */
      @AnalyticsDetails: { query: { axis: #FREE, display: #KEY } }
      @EndUserText.label: 'Transportation Document ID'
      WasteTranspDocID,
      @AnalyticsDetails: { query: { axis: #FREE } }
      @EndUserText.label: 'Transportation Document Type'
      EnvrmtWasteTranspDocType,
      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT } }
      @EndUserText.label: 'Transportation Document Status'
      EnvrmtWasteTranspDocStatus,
      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT } }
      @EndUserText.label: 'Permit Number'
      CmplRqVersPermitNumber,
      @AnalyticsDetails: { query: { axis: #FREE } }
      @EndUserText.label: 'Sent Date'
      EnvWstTranspDocPrintedDate,

      @AnalyticsDetails: { query: { axis: #FREE } }
      @EndUserText.label: 'Handover Date'
      EnvWstTranspDocHandoverDate,
      /* Transporter */

      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT_KEY } }
      @EndUserText.label: 'Transporter Date'
      EnvWstTranspDocTakeAcceptDate,

      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT_KEY } }
      @EndUserText.label: 'Transporter Registration Number'
      EnvrmtWasteTransptrRegnID,

      /*Disposer*/

      @EndUserText.label: 'Disposer'
      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT_KEY } }
      BusinessPartner,

      @EndUserText.label: 'Disposer Date'
      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT_KEY } }
      EnvWstTranspDocDisposerDate,

      /* Waste Generator */

      @UI.hidden: true
      EnvrmtWasteGnrtrUUID,

      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT_KEY } }
      @EndUserText.label: 'Waste Generator'
      EnvrmtWasteGnrtrID,

      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT_KEY } }
      @EndUserText.label: 'Waste Generator Registration Number'
      WasteRegistrationNumber,

      /* Waste Transfer Request */
      @AnalyticsDetails: { query: { axis: #FREE, display: #KEY } }
      @EndUserText.label: 'Waste Transfer Request Number'
      WasteTransferRequestNumber,
      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT_KEY } }
      @EndUserText.label: 'Point of Waste Generation'
      EHSLocationID,
      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT } }
      @EndUserText.label: 'Waste Transfer Request Status'
      WasteTransfReqStatus,
      @AnalyticsDetails: { query: { axis: #FREE } }
      @EndUserText.label: 'Cost Center'
      CostCenter,

      /* Disposal Channel */

      @AnalyticsDetails: { query: { axis: #FREE } }
      @EndUserText.label: 'Disposal Channel Number'
      WasteDisposalChannelNumber,
      @AnalyticsDetails: { query: { axis: #FREE } }
      @EndUserText.label: 'Disposal Channel Name'
      WasteDisposalChannelName,
      @AnalyticsDetails: { query: { axis: #FREE } }
      @EndUserText.label: 'Disposal Facility Registration ID'
      EnvrmtWasteFcltyRegistrationID,
      @AnalyticsDetails: { query: { axis: #FREE } }
      @EndUserText.label: 'Disposal Facility Name'
      EnvrmtWastePartFcltyName,

      /* Product */
      @AnalyticsDetails: { query: { axis: #ROWS, display: #TEXT_KEY } }
      @EndUserText.label: 'Product'
      Material,

      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT } }
      @EndUserText.label: 'Container Type'
      WasteStreamContainerType,

      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT_KEY } }
      @EndUserText.label: 'R&D Code'
      EnvrmtWasteMgmtMethCode,

      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT } }
      @EndUserText.label: 'Waste Code'
      @ObjectModel.text.element: [ 'EnvrmtWasteCodeShortDesc' ]
      EnvrmtWasteCode,

      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT } }
      @EndUserText.label: 'Waste Code Description'
      @Semantics.text: true
      EnvrmtWasteCodeShortDesc,

      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT } }
      @EndUserText.label: 'Waste Type'
      EnvrmtWasteHazardCharcID,

      @AnalyticsDetails: { query: { axis: #FREE } }
      @EndUserText.label: 'Regulation'
      CmplRqVers,

      @AnalyticsDetails: { query: { axis: #FREE, display: #TEXT } }
      @EndUserText.label: 'Regulation Name'
      CmplRqVersName,

      @AnalyticsDetails: { query: { axis: #FREE } }
      @EndUserText.label: 'Regulatory Code Value Text'
      WasteStreamRgtyCodeValueText,

      /* Key Figures */

      @EndUserText.label: 'Outgoing Quantity'
      @Aggregation.default: #FORMULA
      @AnalyticsDetails:{
        query: { axis: #COLUMNS,
                 formula: 'EnvrmtWasteOutgoingQuantity',
                 decimals: 3 },
        exceptionAggregationSteps:
          [
           { exceptionAggregationBehavior: '#SUM',
             exceptionAggregationElements: ['EnvrmtWasteTranspDocUUID','EnvWstTranspDocMatlAssgdUUID'] }] }
//      @Semantics.quantity: { unitOfMeasure: 'EnvrmtWasteOutgoingQtyCode' }       
      1 as EnvrmtWasteOutgoingQuantity,

      @EndUserText.label: 'Confirmed Quantity'
      @Aggregation.default: #FORMULA
      @AnalyticsDetails:{
        query: { axis: #COLUMNS,
                 formula: 'EnvrmtWasteConfirmedQuantity',
                 decimals: 3 },
        exceptionAggregationSteps:
          [
          { exceptionAggregationBehavior: '#SUM',
             exceptionAggregationElements: ['EnvrmtWasteTranspDocUUID','EnvWstTranspDocMatlAssgdUUID'] }] }
//      @Semantics.quantity: { unitOfMeasure: 'EnvrmtWasteConfirmedQtyCode' }       
      1 as EnvrmtWasteConfirmedQuantity,

      @EndUserText.label: 'Outgoing Quantity Unit of Measure'
//      @Semantics.unitOfMeasure: true
      EnvrmtWasteOutgoingQtyCode,

      @EndUserText.label: 'Confirmed Quantity Unit of Measure'
//      @Semantics.unitOfMeasure: true
      EnvrmtWasteConfirmedQtyCode
}
```
