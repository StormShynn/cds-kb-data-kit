---
name: C_SOLVEDDSPUTCASESTSDURNQ
description: This CDS view provides details of solved dispute cases in SAP Dispute Management and the duration in which they were in a specific case status. This CDS view provides the data to answer the following business questions: How long did a solved dispute case stay in a specific status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FI-AR-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SOLVEDDSPUTCASESTSDURNQ')/$value
semantic_en: This CDS view provides details of solved dispute cases in SAP Dispute Management and the duration in which they were in a specific case status. This CDS view provides the data to answer the following business questions: How long did a solved dispute case stay in a specific status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Solved Dispute Case Status Durn - Query — CDS view tiêu dùng dựa trên I_SolvedDsputCaseStsDurnC.
keywords:
  - solved
  - dispute
  - case
  - status
  - durn
  - query
  - company
  - code
  - customer
tags:
  - FI
  - bo:companycode
  - component:FI-AR-IS-2CL
  - consumption-view
  - FI-AR
  - FI-AR-IS
  - FI-AR-IS-2CL
  - lob:finance
  - bo:salesorder
---
# C_SOLVEDDSPUTCASESTSDURNQ

**This CDS view provides details of solved dispute cases in SAP Dispute Management and the duration in which they were in a specific case status. This CDS view provides the data to answer the following business questions: How long did a solved dispute case stay in a specific status? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-AR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SOLVEDDSPUTCASESTSDURNQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` | ✓ | |  |  | `CHAR(32)` | UUID in Character Format |
| `DisputeCaseStatus` | ✓ | |  |  | `NUMC(2)` | Case: Status |
| `CaseID` |  | |  |  | `CHAR(12)` | Case ID |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Customer` |  | |  |  | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `DisputeCaseProcessor` |  | |  |  | `CHAR(12)` | Processor |
| `DisputeCaseCoordinator` |  | |  |  | `CHAR(12)` | Coordinator of Dispute Case |
| `CaseCreationDate` |  | |  |  | `DATS(8)` | Created On |
| `CaseClosingDate` |  | |  |  | `DATS(8)` | Closed On |
| `CustomerAccountGroup` |  | |  |  | `CHAR(4)` | Customer Account Group |
| `CustomerBasicAuthorizationGrp` |  | |  |  | `CHAR(4)` | Authorization Group |
| `DisputeCaseReason` |  | |  |  | `CHAR(4)` | Reason for Case |
| `DisputeCasePriority` |  | |  |  | `NUMC(1)` | Priority |
| `DisputeCaseRootCause` |  | |  |  | `CHAR(4)` | Root Cause Code |
| `StatusProfile` |  | |  |  | `CHAR(8)` | Case: Status Profile |
| `CaseType` |  | |  |  | `CHAR(4)` | Case Type |
| `DisputeCaseStatusDurnInDays` |  | |  |  | `INT4(10)` | Solved Case Status Duration in Days |
| `DisputeCaseStatusAvgDurnInDays` |  | |  | `'NDIV0( DisputeCaseStatusDurnInDays / NumberOfDisputeCases )' 1` | `INT1(3)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SOLVEDDSPUTCASESTSDURNQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SOLVEDDSPUTCASESTSDURNQ')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CSLVDDSPSTSDURNQ'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics.query: true
@OData.publish: true
@EndUserText.label: 'Solved Dispute Case Status Durn - Query'
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY ]

define view C_SolvedDsputCaseStsDurnQ
  as select from I_SolvedDsputCaseStsDurnC
{
  key DisputeCaseUUID,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key DisputeCaseStatus,
      CaseID,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Customer,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DisputeCaseProcessor,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DisputeCaseCoordinator,
      CaseCreationDate,
      CaseClosingDate,
      CustomerAccountGroup,
      CustomerBasicAuthorizationGrp,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DisputeCaseReason,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DisputeCasePriority,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DisputeCaseRootCause,
      @AnalyticsDetails.query.display: #KEY_TEXT
      StatusProfile,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CaseType,

      // Key Figure: Case Status Duration in Days
      DisputeCaseStatusDurnInDays,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Solved Case Status Avg Duration in Days'
      @AnalyticsDetails.query.decimals: 1
      @AnalyticsDetails.query.formula:
              'NDIV0( DisputeCaseStatusDurnInDays / NumberOfDisputeCases )'
      1 as DisputeCaseStatusAvgDurnInDays
}
```
