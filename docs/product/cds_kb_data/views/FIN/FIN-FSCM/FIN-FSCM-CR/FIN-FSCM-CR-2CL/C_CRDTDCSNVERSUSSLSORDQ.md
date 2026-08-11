---
name: C_CRDTDCSNVERSUSSLSORDQ
description: "This CDS view tells the user how many sales orders are blocked by a credit decision document in SAP Credit Management. This CDS view provides the data to answer the following business questions: How many and which sales orders have a credit decision document assigned? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNVERSUSSLSORDQ')/$value
semantic_en: "This CDS view tells the user how many sales orders are blocked by a credit decision document in SAP Credit Management. This CDS view provides the data to answer the following business questions: How many and which sales orders have a credit decision document assigned? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Decision Versus Sales Order Query — CDS view tiêu dùng dựa trên I_CrdtDcsnVersusSlsOrdC."
keywords:
  - "credit"
  - "decision"
  - "versus"
  - "sales"
  - "order"
  - "query"
  - "type"
  - "creation"
  - "date"
  - "business"
  - "partner"
  - "crdt"
  - "mgmt"
  - "group"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - consumption-view
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - lob:finance
  - order
  - sales-order
  - bo:salesorder
---
# C_CRDTDCSNVERSUSSLSORDQ

**This CDS view tells the user how many sales orders are blocked by a credit decision document in SAP Credit Management. This CDS view provides the data to answer the following business questions: How many and which sales orders have a credit decision document assigned? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNVERSUSSLSORDQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Order Type |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `NumberOfSalesOrders` |  | |  |  | `INT4(10)` | Number of Sales Orders |
| `NumberOfCreditDecisionDocs` |  | |  |  | `INT4(10)` | Number of Credit Blocked Sales Orders |
| `CreditBlockedSalesOrdersPct` |  | |  | `'NDIV0(NumberOfCreditDecisionDocs / NumberOfSalesOrders) *100' 1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNVERSUSSLSORDQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CRDTDCSNVERSUSSLSORDQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCRDTDCSNSLSORDQ'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #CONSUMPTION
@Analytics.query: true
@OData.publish: true
@EndUserText.label: 'Credit Decision Versus Sales Order Query'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]
define view C_CrdtDcsnVersusSlsOrdQ
  as select from I_CrdtDcsnVersusSlsOrdC
{
  key SalesOrder,
      SalesOrderType,
      CreationDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusinessPartner,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CrdtMgmtBusinessPartnerGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CreditRiskClass,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CreditSegment,
//      SalesOrderHasCreditDecisionDoc,

      NumberOfSalesOrders,
      NumberOfCreditDecisionDocs,

      //  Credit Blocked Sales Orders in Percent,
      @DefaultAggregation: #FORMULA
      @EndUserText.label:'Sales Orders With Credit Block in %'
      @AnalyticsDetails.query.decimals: 2
      @AnalyticsDetails.query.formula:
         'NDIV0(NumberOfCreditDecisionDocs / NumberOfSalesOrders) *100'
      1 as CreditBlockedSalesOrdersPct
}
```
