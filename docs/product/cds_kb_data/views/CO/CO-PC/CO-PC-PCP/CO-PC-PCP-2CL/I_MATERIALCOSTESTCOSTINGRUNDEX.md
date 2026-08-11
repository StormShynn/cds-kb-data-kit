---
name: I_MATERIALCOSTESTCOSTINGRUNDEX
description: "This CDS view provides the header information of costing runs for material cost estimates, containing the relevant dates and error log related information. This view is intended to be used for data extraction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALCOSTESTCOSTINGRUNDEX')/$value
semantic_en: "This CDS view provides the header information of costing runs for material cost estimates, containing the relevant dates and error log related information. This view is intended to be used for data extraction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Material Cost Est Costing Run Extraction — CDS view cơ bản (transactional data) dựa trên P_MaterialCostEstCostingRun."
keywords:
  - "material"
  - "cost"
  - "est"
  - "costing"
  - "run"
  - "extraction"
  - "estimated"
  - "date"
  - "version"
  - "status"
  - "estimate"
  - "validity"
  - "start"
tags:
  - CO
  - bo:companycode
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - interface-view
  - lob:controlling
  - material
---
# I_MATERIALCOSTESTCOSTINGRUNDEX

**This CDS view provides the header information of costing runs for material cost estimates, containing the relevant dates and error log related information. This view is intended to be used for data extraction. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALCOSTESTCOSTINGRUNDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EstimatedCostCostingRun` | ✓ | |  |  | `CHAR(8)` | Name of Costing Run |
| `EstimatedCostCostingRunDate` | ✓ | |  |  | `DATS(8)` | Costing Run Date |
| `CostingVersion` | ✓ | |  |  | `NUMC(2)` | Costing Version |
| `CostingRunStatus` |  | |  |  | `CHAR(2)` | Costing Status |
| `CostEstimateValidityStartDate` |  | |  |  | `DATS(8)` | Costing Date From |
| `MaterialValuationDate` |  | |  |  | `DATS(8)` | Valuation Date of a Cost Estimate |
| `QuantityStructureDate` |  | |  |  | `DATS(8)` | Quantity Structure Date for Costing |
| `CostEstimateValidityEndDate` |  | |  |  | `DATS(8)` | Costing Date To |
| `CostingVariant` |  | |  |  | `CHAR(4)` | Marked Costing Variant (Release Standard Cost Estimate) |
| `CostingType` |  | |  |  | `CHAR(2)` | Costing Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Entered By |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on Which Cost Estimate Was Created |
| `CostEstimateTransferControl` |  | |  |  | `CHAR(4)` | Transfer Control |
| `CostingRunStatusHistorySqnc` |  | |  |  | `NUMC(3)` | Counter for Costing Run History |
| `CostingErrorLogID` |  | |  |  | `NUMC(12)` | Error Management Number |
| `CostingErrorLogObject` |  | |  |  | `CHAR(4)` | Object ID for Processing Within PPC Error Analysis |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALCOSTESTCOSTINGRUNDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATERIALCOSTESTCOSTINGRUNDEX')/$value)*

```abap
@EndUserText.label: 'Material Cost Est Costing Run Extraction'
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@AbapCatalog: {
  sqlViewName: 'IMATESTRUNDEX',
  compiler.compareFilter: true,
  preserveKey: true
 }

@ObjectModel: {
sapObjectNodeType.name: 'MaterialCostEstimateCostingRun',
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory: #M
  },
  supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}

@Analytics: {
        dataCategory: #FACT,
        dataExtraction: {
           enabled: true,
           delta.changeDataCapture:{
              automatic: false,
              mapping: [
                    { viewElement: ['EstimatedCostCostingRun', 'EstimatedCostCostingRunDate', 'CostingVersion'],
                      role: #MAIN,
                      table: 'KALA',
                      tableElement: ['KALAID', 'KALADAT', 'TVERS' ]},
                    { viewElement: ['EstimatedCostCostingRun', 'EstimatedCostCostingRunDate', 'CostingVersion', 'CostingRunStatus', 'CostingRunStatusHistorySqnc' ],
                      role: #LEFT_OUTER_TO_ONE_JOIN,
                      table: 'KALF',
                      tableElement: ['KALAID', 'KALADAT', 'TVERS', 'FEH_STAT', 'HISTCNT']}
                    ]
          }
        }
}

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view I_MaterialCostEstCostingRunDEX
  as select from           P_MaterialCostEstCostingRun    as c
    left outer to one join P_MatlCostEstCostgRunLastError as log on  c.EstimatedCostCostingRun     = log.EstimatedCostCostingRun
                                                                 and c.EstimatedCostCostingRunDate = log.EstimatedCostCostingRunDate
                                                                 and c.CostingVersion              = log.CostingVersion
                                                                 and c.CostingRunStatus            = log.CostingRunStatus
{
  key c.EstimatedCostCostingRun,
  key c.EstimatedCostCostingRunDate,
  key c.CostingVersion,

      c.CostingRunStatus,
      c.CostEstimateValidityStartDate,
      c.MaterialValuationDate,
      c.QuantityStructureDate,
      c.CostEstimateValidityEndDate,
      c.CostingVariant,
      c.CostingType,
      c.CompanyCode,
      c.ControllingArea,
      @Semantics.user.createdBy: true
      c.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      c.CreationDate,
      c.CostEstimateTransferControl,

      log.CostingRunStatusHistorySqnc,
      log.CostingErrorLogID,
      log.CostingErrorLogObject
}
```
