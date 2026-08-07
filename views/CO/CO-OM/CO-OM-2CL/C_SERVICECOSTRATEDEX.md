---
name: C_SERVICECOSTRATEDEX
description: This CDS view serves primarily as a data source which can be consumed by tools for data extraction. This CDS view provides data about cost rates assigned to a particular activity type, service cost level, work item or an employee who provides the service and so on. This CDS view provides the data to answer the following business questions: Which cost rates are associated with which activity type/service cost level/work item/employee? Which currencies are used in the applied cost rates? Is the cost rate valid? Is the cost rate an intercompany cost rate? Who is the sender and the receiver company (company code) for a given cost rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICECOSTRATEDEX')/$value
semantic_en: This CDS view serves primarily as a data source which can be consumed by tools for data extraction. This CDS view provides data about cost rates assigned to a particular activity type, service cost level, work item or an employee who provides the service and so on. This CDS view provides the data to answer the following business questions: Which cost rates are associated with which activity type/service cost level/work item/employee? Which currencies are used in the applied cost rates? Is the cost rate valid? Is the cost rate an intercompany cost rate? Who is the sender and the receiver company (company code) for a given cost rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Service Cost Rate
tags:
  - CO
  - bo:companycode
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - consumption-view
  - lob:controlling
  - metadata-only
---
# C_SERVICECOSTRATEDEX

**This CDS view serves primarily as a data source which can be consumed by tools for data extraction. This CDS view provides data about cost rates assigned to a particular activity type, service cost level, work item or an employee who provides the service and so on. This CDS view provides the data to answer the following business questions: Which cost rates are associated with which activity type/service cost level/work item/employee? Which currencies are used in the applied cost rates? Is the cost rate valid? Is the cost rate an intercompany cost rate? Who is the sender and the receiver company (company code) for a given cost rate? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SERVICECOSTRATEDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingCostRateUUID` |  | |  |  | `RAW(16)` | Cost Rate UUID |
| `AccountingCostRateUUID` |  | |  |  | `RAW(16)` | Cost Rate UUID |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency and Valuation Type |
| `CurrencyRole` |  | |  |  | `CHAR(2)` | Currency and Valuation Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `ActivityType` |  | |  |  | `CHAR(6)` | Activity Type |
| `IsIntercompanyRate` |  | |  |  | `CHAR(1)` | Intercompany Cost Rate Indicator |
| `IsIntercompanyRate` |  | |  |  | `CHAR(1)` | Intercompany Cost Rate Indicator |
| `ReceivingCompanyCode` |  | |  |  | `CHAR(4)` | Receiving Company Code |
| `ReceivingCompanyCode` |  | |  |  | `CHAR(4)` | Receiving Company Code |
| `ServiceCostLevel` |  | |  |  | `NUMC(4)` | Service Cost Level |
| `ServiceCostLevel` |  | |  |  | `NUMC(4)` | Service Cost Level |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `PersonnelNumber` |  | |  |  | `NUMC(8)` | Personnel Number |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `WorkItem` |  | |  |  | `CHAR(10)` | Work Item ID |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `TimeSheetOvertimeCategory` |  | |  |  | `CHAR(4)` | Overtime Category |
| `ValidityStartFiscalYear` |  | |  |  | `NUMC(4)` | From Fiscal Year |
| `ValidityStartFiscalYear` |  | |  |  | `NUMC(4)` | From Fiscal Year |
| `ValidityStartFiscalPeriod` |  | |  |  | `NUMC(3)` | From Period |
| `ValidityStartFiscalPeriod` |  | |  |  | `NUMC(3)` | From Period |
| `ValidityStartFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `ValidityStartFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ValidityEndFiscalYear` |  | |  |  | `NUMC(4)` | To Fiscal Year |
| `ValidityEndFiscalYear` |  | |  |  | `NUMC(4)` | To Fiscal Year |
| `ValidityEndFiscalPeriod` |  | |  |  | `NUMC(3)` | To Period |
| `ValidityEndFiscalPeriod` |  | |  |  | `NUMC(3)` | To Period |
| `ValidityEndFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `ValidityEndFiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year + Fiscal Period |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `CostCtrActivityTypeQtyUnit` |  | |  |  | `UNIT(3)` | Activity Unit |
| `CostCtrActivityTypeQtyUnit` |  | |  |  | `UNIT(3)` | Activity Unit |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CostRateVarblAmount` |  | |  |  | `CURR(23)` | Variable Rate |
| `CostRateVarblAmount` |  | |  |  | `CURR(23)` | Variable Rate |
| `CostRateScaleFactor` |  | |  |  | `DEC(5)` | Per |
| `CostRateScaleFactor` |  | |  |  | `DEC(5)` | Per |
