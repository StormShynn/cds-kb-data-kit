---
name: C_SERVICECOSTRATEDEX
description: "This CDS view serves primarily as a data source which can be consumed by tools for data extraction. This CDS view provides data about cost rates assigned to a particular activity type, service cost level, work item or an employee who provides the service and so on. This CDS view provides the data to answer the following business questions: Which cost rates are associated with which activity type/service cost level/work item/employee? Which currencies are used in the applied cost rates? Is the cost rate valid? Is the cost rate an intercompany cost rate? Who is the sender and the receiver company (company code) for a given cost rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICECOSTRATEDEX')/$value
semantic_en: "This CDS view serves primarily as a data source which can be consumed by tools for data extraction. This CDS view provides data about cost rates assigned to a particular activity type, service cost level, work item or an employee who provides the service and so on. This CDS view provides the data to answer the following business questions: Which cost rates are associated with which activity type/service cost level/work item/employee? Which currencies are used in the applied cost rates? Is the cost rate valid? Is the cost rate an intercompany cost rate? Who is the sender and the receiver company (company code) for a given cost rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Service Cost Rate — CDS view tiêu dùng dựa trên I_ServiceCostRate_2."
keywords:
  - "Service Cost Rate"
  - "service"
  - "cost"
  - "rate"
  - "accounting"
  - "ledger"
  - "currency"
  - "role"
  - "company"
  - "code"
  - "controlling"
  - "area"
tags:
  - CO
  - bo:companycode
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - consumption-view
  - lob:controlling
---
# C_SERVICECOSTRATEDEX

**This CDS view serves primarily as a data source which can be consumed by tools for data extraction. This CDS view provides data about cost rates assigned to a particular activity type, service cost level, work item or an employee who provides the service and so on. This CDS view provides the data to answer the following business questions: Which cost rates are associated with which activity type/service cost level/work item/employee? Which currencies are used in the applied cost rates? Is the cost rate valid? Is the cost rate an intercompany cost rate? Who is the sender and the receiver company (company code) for a given cost rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICECOSTRATEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingCostRateUUID` | ✓ | |  |  | `RAW(16)` | Cost Rate UUID |
| `Ledger` |  | | `_Rate` | `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency and Valuation Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `IsIntercompanyRate` |  | |  |  | `CHAR(1)` | Intercompany Cost Rate Indicator |
| `ReceivingCompanyCode` |  | |  |  | `CHAR(4)` | Receiving Company Code |
| `ServiceCostLevel` |  | |  |  | `NUMC(4)` | Service Cost Level |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `ValidityStartFiscalYear` |  | |  |  | `NUMC(4)` | From Fiscal Year |
| `ValidityStartFiscalPeriod` |  | |  |  | `NUMC(3)` | From Period |
| `ValidityStartFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ValidityEndFiscalYear` |  | |  |  | `NUMC(4)` | To Fiscal Year |
| `ValidityEndFiscalPeriod` |  | |  |  | `NUMC(3)` | To Period |
| `ValidityEndFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `CostCtrActivityTypeQtyUnit` |  | |  |  | `UNIT(3)` | Activity Unit |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CostRateVarblAmount` |  | |  |  | `CURR(23)` | Variable Rate |
| `CostRateScaleFactor` |  | |  |  | `DEC(5)` | Per |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_AccountingCostRate` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICECOSTRATEDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICECOSTRATEDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@EndUserText.label: 'Service Cost Rate'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
    usageType: {
        sizeCategory: #L,
        serviceQuality: #D,
        dataClass: #MIXED
    }
    ,supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
    ,modelingPattern: #ANALYTICAL_FACT
    ,sapObjectNodeType.name: 'AccountingCostRate'
}

@VDM.viewType: #CONSUMPTION

@Analytics:{
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
          mapping: [
            {
            role: #MAIN,
            table: 'ACCOSTRATE',
            tableElement: [ 'RATEUUID' ],
            viewElement: [ 'AccountingCostRateUUID' ]
            },
            {
            role: #LEFT_OUTER_TO_ONE_JOIN,
            table: 'PRPS',
            tableElement: [ 'PSPNR' ],
            viewElement: [ 'WBSElementInternalID' ]
            },
            {
            role: #LEFT_OUTER_TO_ONE_JOIN,
            table: 'CSSL',
            tableElement: [ 'KOKRS', 'KOSTL','LSTAR','GJAHR' ],
            viewElement: [ 'ControllingArea','CostCenter','ActivityType','ValidityStartFiscalYear' ]
            }
          ]
        }
    }
}

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'CRT',
  dataSources: ['_Rate'],
  quota: {
    maximumFields: 340,
    maximumBytes: 10000
  }
}

define view entity C_ServiceCostRateDEX
  as select from I_ServiceCostRate_2 as _Rate
  association [1..1] to E_AccountingCostRate as _Extension on $projection.AccountingCostRateUUID = _Extension.AccountingCostRateUUID
{
  key AccountingCostRateUUID,
      _Rate.Ledger,
      CurrencyRole,
      CompanyCode,
      ControllingArea,
      CostCenter,
      ActivityType,
      IsIntercompanyRate,
      ReceivingCompanyCode,
      ServiceCostLevel,
      PersonnelNumber,
      WBSElementInternalID,
      WBSElementExternalID,
      WorkItem,
      TimeSheetOvertimeCategory,
      @Semantics.fiscal.year: true
      ValidityStartFiscalYear,
      @Semantics.fiscal.period: true
      ValidityStartFiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      ValidityStartFiscalYearPeriod,
      @Semantics.businessDate.from: true
      ValidityStartDate,
      @Semantics.fiscal.year: true
      ValidityEndFiscalYear,
      @Semantics.fiscal.period: true
      ValidityEndFiscalPeriod,
      @Semantics.fiscal.yearPeriod: true
      ValidityEndFiscalYearPeriod,
      @Semantics.businessDate.to: true
      ValidityEndDate,
      CostCtrActivityTypeQtyUnit,
      Currency,
      @Semantics.amount.currencyCode: 'Currency'
      CostRateVarblAmount,
      CostRateScaleFactor
}
```
