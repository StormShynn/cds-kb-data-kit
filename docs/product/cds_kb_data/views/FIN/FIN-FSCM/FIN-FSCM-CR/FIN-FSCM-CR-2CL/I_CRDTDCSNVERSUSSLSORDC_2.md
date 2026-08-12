---
name: I_CRDTDCSNVERSUSSLSORDC_2
description: "This CDS view is designed to provide analytical insights into the relationship between credit decisions and sales orders. It aggregates and analyzes data related to sales orders, credit management, and associated business partners, allowing businesses to understand how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders have associated credit decision documents? What is the distribution of sales orders across different credit risk classes? How are sales orders distributed across various credit segments and business partner groups? What is the geographical distribution of sales orders in terms of country and region? How many sales orders are blocked due to credit decisions? What is the relationship between sales order types and credit management decisions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC_2')/$value
semantic_en: "This CDS view is designed to provide analytical insights into the relationship between credit decisions and sales orders. It aggregates and analyzes data related to sales orders, credit management, and associated business partners, allowing businesses to understand how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders have associated credit decision documents? What is the distribution of sales orders across different credit risk classes? How are sales orders distributed across various credit segments and business partner groups? What is the geographical distribution of sales orders in terms of country and region? How many sales orders are blocked due to credit decisions? What is the relationship between sales order types and credit management decisions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_CRDTDCSNVERSUSSLSORDC_2 — CDS view tổng hợp dựa trên P_DCD4_2."
keywords:
  - "crdtdcsnversusslsordc"
  - "sales"
  - "order"
  - "type"
  - "organization"
  - "division"
  - "distribution"
  - "channel"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - order
  - sales-order
  - bo:salesorder
---
# I_CRDTDCSNVERSUSSLSORDC_2

**This CDS view is designed to provide analytical insights into the relationship between credit decisions and sales orders. It aggregates and analyzes data related to sales orders, credit management, and associated business partners, allowing businesses to understand how credit decisions impact sales activities. This CDS view provides the data to answer the following business questions: How many sales orders have associated credit decision documents? What is the distribution of sales orders across different credit risk classes? How are sales orders distributed across various credit segments and business partner groups? What is the geographical distribution of sales orders in terms of country and region? How many sales orders are blocked due to credit decisions? What is the relationship between sales order types and credit management decisions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC_2')/$value) |

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
| `Country` |  | |  | `cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type)` | `CHAR(3)` | Country/Region |
| `Region` |  | | `_BusinessPartner._CurrentDefaultAddress._StandardAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SalesOrderHasCreditDecisionDoc` |  | |  |  | `CHAR(1)` |  |
| `NumberOfSalesOrders` |  | |  | `cast( 1 as numberofsalesorders )` | `INT4(10)` | Number of Sales Orders |
| `NumberOfCreditDecisionDocs` |  | |  | `cast( NumberOfCreditDecisionDocs as numberofcreditblockedslsords )` | `INT4(10)` | Number of Credit Blocked Sales Orders |
| `_BusinessPartner` | | ✓ | | | | |
| `_CreditManagementBP` | | ✓ | | | | |
| `_CreditSegment` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |
| `_CrdtMBusPartnerGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CreditManagementBP` | `I_CreditManagementBP` | [0..1] |
| `_CreditControlArea2Segment` | `I_CreditControlArea2Segment` | [0..1] |
| `_CreditSegment` | `I_CreditManagementSegment` | [0..1] |
| `_CreditRiskClass` | `I_CreditRiskClass` | [1..1] |
| `_CrdtMBusPartnerGroup` | `I_CrdtMBusPartnerGroup` | [0..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNVERSUSSLSORDC_2')/$value)*

```abap
@EndUserText: { label: 'Credit Decsn vs Sales Order V2 - Cube' }
@Analytics: { internalName: #LOCAL,
              dataCategory: #CUBE }
@VDM: { viewType: #COMPOSITE }
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData:       { blocking: #REQUIRED } }
@ObjectModel: { usageType: { sizeCategory:   #XL,
                             serviceQuality: #D,
                             dataClass:      #MIXED },
                modelingPattern: #ANALYTICAL_CUBE,
                supportedCapabilities: [ #ANALYTICAL_PROVIDER,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE ] }
@Metadata: { allowExtensions:             true,
             ignorePropagatedAnnotations: true }
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view entity I_CrdtDcsnVersusSlsOrdC_2
  as select from P_DCD4_2
  association [0..1] to I_BusinessPartner           as _BusinessPartner           on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_CreditManagementBP        as _CreditManagementBP        on  $projection.BusinessPartner = _CreditManagementBP.BusinessPartner
  association [0..1] to I_CreditControlArea2Segment as _CreditControlArea2Segment on  $projection.CreditControlArea = _CreditControlArea2Segment.CreditControlArea
  association [0..1] to I_CreditManagementSegment   as _CreditSegment             on  $projection.CreditSegment = _CreditSegment.CreditSegment
  association [1..1] to I_CreditRiskClass           as _CreditRiskClass           on  $projection.CreditRiskClass = _CreditRiskClass.CreditRiskClass
  association [0..1] to I_CrdtMBusPartnerGroup      as _CrdtMBusPartnerGroup      on  $projection.CrdtMgmtBusinessPartnerGroup = _CrdtMBusPartnerGroup.CrdtMgmtBusinessPartnerGroup
  association [0..1] to I_Country                   as _Country                   on  $projection.Country = _Country.Country
  association [0..1] to I_Region                    as _Region                    on  $projection.Country = _Region.Country
                                                                                  and $projection.Region  = _Region.Region
{
  key SalesOrder,
      SalesOrderType,
      OrganizationDivision,
      SalesOrganization,
      DistributionChannel,
      CreationDate,

      @ObjectModel.foreignKey.association: '_CreditManagementBP'
      BusinessPartner,
      @ObjectModel.foreignKey.association: '_CrdtMBusPartnerGroup'
      _CreditManagementBP.CrdtMgmtBusinessPartnerGroup                                                        as CrdtMgmtBusinessPartnerGroup,
      @ObjectModel.foreignKey.association: '_CreditRiskClass'
      _CreditManagementBP.CreditRiskClass                                                                     as CreditRiskClass,

      @Consumption.hidden: true
      CreditControlArea,
      @ObjectModel.foreignKey.association: '_CreditSegment'
      _CreditControlArea2Segment.CreditSegment                                                                as CreditSegment,

      @ObjectModel.foreignKey.association: '_Country'
      cast( _BusinessPartner._CurrentDefaultAddress._StandardAddress.Country as farp_country preserving type) as Country,

      @ObjectModel.foreignKey.association: '_Region'
      _BusinessPartner._CurrentDefaultAddress._StandardAddress.Region                                         as Region,

      @Semantics.booleanIndicator:true
      SalesOrderHasCreditDecisionDoc,

      @Aggregation.default: #SUM
      cast( 1 as numberofsalesorders )                                                                        as NumberOfSalesOrders,

      @Aggregation.default: #SUM
      cast( NumberOfCreditDecisionDocs as numberofcreditblockedslsords )                                      as NumberOfCreditDecisionDocs,

      // Associations
      _BusinessPartner,
      _CreditSegment,
      _CreditManagementBP,
      _CreditRiskClass,
      _CrdtMBusPartnerGroup,
      _Country,
      _Region
}
where
  _CreditControlArea2Segment.CreditSegment is not initial
```
