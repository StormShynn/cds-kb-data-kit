---
name: C_PRODCOSTESTCOSTCOMPDEX
description: "This CDS view provides detailed extraction of product cost estimate cost component information from transactional sources for analytical and reporting purposes in SAP S/4HANA. It enables users to analyze cost components associated with cost estimates, helping to break down total and fixed costs by company and controlling area currencies. The view is intended for mass data extraction and analytics over cost calculation processes. What are the cost component breakdowns for each cost estimate? How do total and fixed costs vary across valuation variants, cost component structures, or company codes? How can I extract granular cost component details for large-scale reporting and analytics? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: CO-PC-PCP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTESTCOSTCOMPDEX')/$value
semantic_en: "This CDS view provides detailed extraction of product cost estimate cost component information from transactional sources for analytical and reporting purposes in SAP S/4HANA. It enables users to analyze cost components associated with cost estimates, helping to break down total and fixed costs by company and controlling area currencies. The view is intended for mass data extraction and analytics over cost calculation processes. What are the cost component breakdowns for each cost estimate? How do total and fixed costs vary across valuation variants, cost component structures, or company codes? How can I extract granular cost component details for large-scale reporting and analytics? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Product Cost Estimate Cost Component DEX — CDS view tiêu dùng dựa trên I_ProdCostEstCostComponent."
keywords:
  - "product"
  - "cost"
  - "estimate"
  - "component"
  - "dex"
  - "costing"
  - "reference"
  - "object"
  - "type"
  - "date"
  - "version"
tags:
  - CO
  - bo:companycode
  - CO-PC
  - CO-PC-PCP
  - CO-PC-PCP-2CL
  - component:CO-PC-PCP-2CL
  - consumption-view
  - lob:controlling
  - product
  - transaction
  - bo:material
---
# C_PRODCOSTESTCOSTCOMPDEX

**This CDS view provides detailed extraction of product cost estimate cost component information from transactional sources for analytical and reporting purposes in SAP S/4HANA. It enables users to analyze cost components associated with cost estimates, helping to break down total and fixed costs by company and controlling area currencies. The view is intended for mass data extraction and analytics over cost calculation processes. What are the cost component breakdowns for each cost estimate? How do total and fixed costs vary across valuation variants, cost component structures, or company codes? How can I extract granular cost component details for large-scale reporting and analytics? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `CO-PC-PCP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTESTCOSTCOMPDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostingReferenceObject` | ✓ | |  |  | `CHAR(1)` | Reference Object |
| `CostEstimate` | ✓ | |  |  | `NUMC(12)` | Cost Estimate |
| `CostingType` | ✓ | |  |  | `CHAR(2)` | Costing Type |
| `CostingDate` | ✓ | |  |  | `DATS(8)` | Costing Date (Key) |
| `CostingVersion` | ✓ | |  |  | `NUMC(2)` | Costing Version |
| `ValuationVariant` | ✓ | |  |  | `CHAR(3)` | Valuation Variant in Costing |
| `CostIsEnteredManually` | ✓ | |  |  | `CHAR(1)` | Costs Entered Manually in Additive or Automatic Cost Est. |
| `CostComponentStructure` | ✓ | |  |  | `CHAR(2)` | Cost Component Structure - CGM and Sales/Administr. Costs |
| `CostComponent` | ✓ | |  |  | `NUMC(3)` | Cost Component Number |
| `CostEstimateValidityStartDate` |  | |  |  | `DATS(8)` | Costing Date From |
| `CostingVariant` |  | |  |  | `CHAR(4)` | Costing Variant |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostingLotSize` |  | |  |  | `QUAN(13)` | Lot Size for Product Costing |
| `ValuationQuantityUnit` |  | |  |  | `UNIT(3)` | Valuation Unit of Measure |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ControllingAreaCurrency` |  | |  |  | `CUKY(5)` | Global Currency |
| `TotalCostInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Total Cost in Company Code Currency |
| `FixedCostInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Fixed Cost in Company Code Currency |
| `TotalCostInCtrlgAreaCurrency` |  | |  |  | `CURR(23)` | Total Cost in Controlling Area Currency |
| `FixedCostInCtrlgAreaCurrency` |  | |  |  | `CURR(23)` | Fixed Cost in Controlling Area Currency |
| `CostCompIsForSalesAndAdminCost` |  | |  |  | `CHAR(1)` | Cost Component for Sales and Administration Costs |
| `CostCompIsForCOGM` |  | |  |  | `CHAR(1)` | Cost Component for Cost of Goods Manufactured |
| `CostCompIsForInvtryValuation` |  | |  |  | `CHAR(1)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTESTCOSTCOMPDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRODCOSTESTCOSTCOMPDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED

@Analytics.dataCategory: #FACT
@Analytics.dataExtraction.enabled: true

@EndUserText.label: 'Product Cost Estimate Cost Component DEX'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'ProdCostEstCostComponent'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #D, sizeCategory: #XL }

@VDM.viewType: #CONSUMPTION

define view entity C_ProdCostEstCostCompDEX
  as select from I_ProdCostEstCostComponent

{
  key CostingReferenceObject,
  key CostEstimate,
  key CostingType,
  key CostingDate,
  key CostingVersion,
  key ValuationVariant,
  key CostIsEnteredManually,
  key CostComponentStructure,
  key CostComponent,


      CostEstimateValidityStartDate,
      CostingVariant,
      CompanyCode,

      @Semantics.quantity.unitOfMeasure: 'ValuationQuantityUnit'
      CostingLotSize,

      ValuationQuantityUnit,

      CompanyCodeCurrency,
      ControllingAreaCurrency,


      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      TotalCostInCompanyCodeCurrency,

      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      FixedCostInCompanyCodeCurrency,

      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      TotalCostInCtrlgAreaCurrency,

      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      FixedCostInCtrlgAreaCurrency,

      @Semantics.booleanIndicator: true
      CostCompIsForSalesAndAdminCost,

      @Semantics.booleanIndicator: true
      CostCompIsForCOGM,

      @Semantics.booleanIndicator: true
      CostCompIsForInvtryValuation
}
```
