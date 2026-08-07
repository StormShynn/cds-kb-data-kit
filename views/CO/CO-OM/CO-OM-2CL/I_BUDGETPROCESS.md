---
name: I_BUDGETPROCESS
description: This CDS view is designed to provide a structured representation of budget processes within an organization. It serves as a foundational view that can be used to access and analyze budget-related data, specifically focusing on the identification and description of different budget processes. This CDS view provides the data to answer the following business questions: What are the different budget processes defined within the organization? How can we access descriptive text information related to each budget process? How can we efficiently search for specific budget processes using text-based criteria? What are the key identifiers for budget processes that can be used in further analytical dimensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPROCESS')/$value
semantic_en: This CDS view is designed to provide a structured representation of budget processes within an organization. It serves as a foundational view that can be used to access and analyze budget-related data, specifically focusing on the identification and description of different budget processes. This CDS view provides the data to answer the following business questions: What are the different budget processes defined within the organization? How can we access descriptive text information related to each budget process? How can we efficiently search for specific budget processes using text-based criteria? What are the key identifiers for budget processes that can be used in further analytical dimensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Budget Process — CDS view giao diện dựa trên budget_d_process.
keywords:
  - budget
  - process
tags:
  - CO
  - bo:companycode
  - budget
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
---
# I_BUDGETPROCESS

**This CDS view is designed to provide a structured representation of budget processes within an organization. It serves as a foundational view that can be used to access and analyze budget-related data, specifically focusing on the identification and description of different budget processes. This CDS view provides the data to answer the following business questions: What are the different budget processes defined within the organization? How can we access descriptive text information related to each budget process? How can we efficiently search for specific budget processes using text-based criteria? What are the key identifiers for budget processes that can be used in further analytical dimensions? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPROCESS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BudgetProcess` | ✓ | |  | `budget_process` | `CHAR(4)` | Budget Process Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BudgetProcessText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPROCESS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETPROCESS')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIBDGTPROC'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Process'
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     representativeKey: 'BudgetProcess',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #X,
         sizeCategory: #S
     },
     supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
}

define view I_BudgetProcess
  as select from budget_d_process
  association [0..*] to I_BudgetProcessText as _Text on $projection.BudgetProcess = _Text.BudgetProcess
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key budget_process as BudgetProcess,

      _Text

}
```
