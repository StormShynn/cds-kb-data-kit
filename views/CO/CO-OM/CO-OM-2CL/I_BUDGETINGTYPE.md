---
name: I_BUDGETINGTYPE
description: "This CDS view provides a textual representation of budget types, including language-dependent descriptions. It is designed to facilitate the understanding and categorization of different budget subcategories by providing their descriptions in various languages. This CDS view provides the data to answer the following business questions: What are the descriptions of different budget types in various languages? How can budget subcategories be identified and understood across different linguistic contexts? What language-specific information is available for each budget type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPE')/$value
semantic_en: "This CDS view provides a textual representation of budget types, including language-dependent descriptions. It is designed to facilitate the understanding and categorization of different budget subcategories by providing their descriptions in various languages. This CDS view provides the data to answer the following business questions: What are the descriptions of different budget types in various languages? How can budget subcategories be identified and understood across different linguistic contexts? What language-specific information is available for each budget type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Budget Type — CDS view giao diện dựa trên bdgt_d_subcateg."
keywords:
  - "budget"
  - "type"
  - "budgeting"
  - "release"
  - "status"
  - "consumable"
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
# I_BUDGETINGTYPE

**This CDS view provides a textual representation of budget types, including language-dependent descriptions. It is designed to facilitate the understanding and categorization of different budget subcategories by providing their descriptions in various languages. This CDS view provides the data to answer the following business questions: What are the descriptions of different budget types in various languages? How can budget subcategories be identified and understood across different linguistic contexts? What language-specific information is available for each budget type? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BudgetingType` | ✓ | |  | `budget_subcategory` | `CHAR(8)` | Budget Type (Subcategory) |
| `PubSecBudgetReleaseStatus` |  | |  | `budget_release_status` | `CHAR(1)` | Budget Release Status |
| `PubSecBudgetIsConsumable` |  | |  | `budget_consumable` | `CHAR(1)` | Consumable Budget |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BudgetingTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUDGETINGTYPE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIBDGTTYPE'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Type'
@ObjectModel.resultSet.sizeCategory: #XS
@Search.searchable: true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel: {
     representativeKey: 'BudgetingType',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
}

define view I_BudgetingType 
  as select from bdgt_d_subcateg
  association [0..*] to I_BudgetingTypeText as _Text on $projection.BudgetingType = _Text.BudgetingType
{
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key budget_subcategory    as BudgetingType,
      budget_release_status as PubSecBudgetReleaseStatus,
      budget_consumable     as PubSecBudgetIsConsumable,
  _Text
    
}
```
