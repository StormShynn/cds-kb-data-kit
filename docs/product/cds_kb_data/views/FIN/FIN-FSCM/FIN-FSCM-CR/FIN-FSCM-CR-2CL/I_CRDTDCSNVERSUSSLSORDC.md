---
name: I_CRDTDCSNVERSUSSLSORDC
description: "This CDS view is designed to provide a comprehensive analysis of the relationship between credit decisions and sales orders. It aggregates data related to sales orders and their corresponding credit management details, allowing businesses to assess how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders are associated with specific credit decisions? What is the distribution of sales orders across different credit risk classes? How do sales orders vary across different credit segments and business partner groups? What is the impact of credit control areas on sales order processing? How many sales orders have been blocked or affected due to credit decisions? What are the trends in sales order creation dates in relation to credit management activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC')/$value
semantic_en: "This CDS view is designed to provide a comprehensive analysis of the relationship between credit decisions and sales orders. It aggregates data related to sales orders and their corresponding credit management details, allowing businesses to assess how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders are associated with specific credit decisions? What is the distribution of sales orders across different credit risk classes? How do sales orders vary across different credit segments and business partner groups? What is the impact of credit control areas on sales order processing? How many sales orders have been blocked or affected due to credit decisions? What are the trends in sales order creation dates in relation to credit management activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Credit Decsn Versus Sales Order - Cube — CDS view giao diện dựa trên P_DCD_4."
keywords:
  - "credit"
  - "decsn"
  - "versus"
  - "sales"
  - "order"
  - "cube"
  - "type"
  - "organization"
  - "division"
  - "distribution"
  - "channel"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - order
  - sales-order
  - bo:salesorder
---
# I_CRDTDCSNVERSUSSLSORDC

**This CDS view is designed to provide a comprehensive analysis of the relationship between credit decisions and sales orders. It aggregates data related to sales orders and their corresponding credit management details, allowing businesses to assess how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders are associated with specific credit decisions? What is the distribution of sales orders across different credit risk classes? How do sales orders vary across different credit segments and business partner groups? What is the impact of credit control areas on sales order processing? How many sales orders have been blocked or affected due to credit decisions? What are the trends in sales order creation dates in relation to credit management activities? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Order Type |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CrdtMgmtBusinessPartnerGroup` |  | | `_CreditManagementBP` | `CrdtMgmtBusinessPartnerGroup` | `NUMC(4)` | Customer Credit Group |
| `CreditRiskClass` |  | | `_CreditManagementBP` | `CreditRiskClass` | `CHAR(3)` | Risk Class |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `CreditSegment` |  | | `_CreditControlArea2Segment` | `CreditSegment` | `CHAR(10)` | Credit Segment |
| `SalesOrderHasCreditDecisionDoc` |  | |  |  | `CHAR(1)` |  |
| `NumberOfSalesOrders` |  | |  | `cast( 1 as numberofsalesorders )` | `INT4(10)` | Number of Sales Orders |
| `NumberOfCreditDecisionDocs` |  | |  | `cast( NumberOfCreditDecisionDocs as numberofcreditblockedslsords )` | `INT4(10)` | Number of Credit Blocked Sales Orders |
| `_CreditManagementBP` | | ✓ | | | | |
| `_CreditSegment` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |
| `_CrdtMBusPartnerGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditManagementBP` | `I_CreditManagementBP` | [0..1] |
| `_CreditControlArea2Segment` | `I_CreditControlArea2Segment` | [0..1] |
| `_CreditSegment` | `I_CreditManagementSegment` | [0..1] |
| `_CreditRiskClass` | `I_CreditRiskClass` | [1..1] |
| `_CrdtMBusPartnerGroup` | `I_CrdtMBusPartnerGroup` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC')/$value)*

```abap
@EndUserText.label: 'Credit Decsn Versus Sales Order - Cube'
@AbapCatalog.sqlViewName: 'ICRDTDCSNSLSORDC'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE ]
define view I_CrdtDcsnVersusSlsOrdC
  as select from P_DCD_4
  association [0..1] to I_CreditManagementBP        as _CreditManagementBP        on $projection.BusinessPartner = _CreditManagementBP.BusinessPartner
  association [0..1] to I_CreditControlArea2Segment as _CreditControlArea2Segment on $projection.CreditControlArea = _CreditControlArea2Segment.CreditControlArea
  association [0..1] to I_CreditManagementSegment   as _CreditSegment             on $projection.CreditSegment = _CreditSegment.CreditSegment
  association [1..1] to I_CreditRiskClass           as _CreditRiskClass           on $projection.CreditRiskClass = _CreditRiskClass.CreditRiskClass
  association [0..1] to I_CrdtMBusPartnerGroup      as _CrdtMBusPartnerGroup      on $projection.CrdtMgmtBusinessPartnerGroup = _CrdtMBusPartnerGroup.CrdtMgmtBusinessPartnerGroup

{
  key SalesOrder,
      SalesOrderType,
      OrganizationDivision,
      SalesOrganization,
      DistributionChannel,
      CreationDate,
      //  @Consumption.hidden: true
      //  SoldToParty,
      @ObjectModel.foreignKey.association: '_CreditManagementBP'
      BusinessPartner,
      @ObjectModel.foreignKey.association: '_CrdtMBusPartnerGroup'
      _CreditManagementBP.CrdtMgmtBusinessPartnerGroup                   as CrdtMgmtBusinessPartnerGroup,
      @ObjectModel.foreignKey.association: '_CreditRiskClass'
      _CreditManagementBP.CreditRiskClass                                as CreditRiskClass,

      @Consumption.hidden: true
      CreditControlArea,
      @ObjectModel.foreignKey.association: '_CreditSegment'
      _CreditControlArea2Segment.CreditSegment                           as CreditSegment,
//      @Semantics.booleanIndicator: true
      SalesOrderHasCreditDecisionDoc,

      @DefaultAggregation: #SUM
      cast( 1 as numberofsalesorders )                                   as NumberOfSalesOrders,

      @DefaultAggregation: #SUM
      cast( NumberOfCreditDecisionDocs as numberofcreditblockedslsords ) as NumberOfCreditDecisionDocs,

      _CreditSegment,
      _CreditManagementBP,
      _CreditRiskClass,
      _CrdtMBusPartnerGroup
}
where
  _CreditControlArea2Segment.CreditSegment is not initial
```
