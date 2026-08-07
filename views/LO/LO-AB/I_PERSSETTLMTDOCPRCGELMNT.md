---
name: I_PERSSETTLMTDOCPRCGELMNT
description: "This CDS view provides information about pricing elements on the header level of personnel settlement documents. This CDS view provides the data to answer the following business questions: Which condition types are relevant for a personnel settlement document? What is the base value of the relevant pricing conditions for a personnel settlement document? Which calculation type was used for the relevant pricing conditions for a personnel settlement document? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSSETTLMTDOCPRCGELMNT')/$value
semantic_en: "This CDS view provides information about pricing elements on the header level of personnel settlement documents. This CDS view provides the data to answer the following business questions: Which condition types are relevant for a personnel settlement document? What is the base value of the relevant pricing conditions for a personnel settlement document? Which calculation type was used for the relevant pricing conditions for a personnel settlement document? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - pricing
  - metadata-only
---
# I_PERSSETTLMTDOCPRCGELMNT

**This CDS view provides information about pricing elements on the header level of personnel settlement documents. This CDS view provides the data to answer the following business questions: Which condition types are relevant for a personnel settlement document? What is the base value of the relevant pricing conditions for a personnel settlement document? Which calculation type was used for the relevant pricing conditions for a personnel settlement document? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSSETTLMTDOCPRCGELMNT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonnelSettlementDocument` |  | |  |  | `CHAR(10)` | Personnel Settlement Document Number |
| `PricingProcedureStep` |  | |  |  | `NUMC(3)` | Step Number |
| `PricingProcedureCounter` |  | |  |  | `NUMC(3)` | Pricing Procedure Counter |
| `ConditionApplication` |  | |  |  | `CHAR(2)` | Application |
| `ConditionType` |  | |  |  | `CHAR(4)` | Condition Type |
| `PriceConditionDeterminationDte` |  | |  |  | `DATS(8)` | Condition Pricing Date |
| `ConditionCalculationType` |  | |  |  | `CHAR(3)` | Calculation Type for Condition |
| `ConditionBaseAmount` |  | |  |  | `DEC(24)` | Amount of the Condition Basis |
| `ConditionBaseQuantity` |  | |  |  | `DEC(24)` | Quantity of the Condition Basis |
| `ConditionRateAmount` |  | |  |  | `DEC(24)` | Condition Amount |
| `ConditionRateRatio` |  | |  |  | `DEC(24)` | Condition Ratio (in Percent or Per Mille) |
| `ConditionRateRatioUnit` |  | |  |  | `UNIT(3)` | Condition Rate Ratio Unit |
| `ConditionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ConditionQuantity` |  | |  |  | `DEC(5)` | Condition Pricing Unit |
| `ConditionQuantityUnit` |  | |  |  | `UNIT(3)` | Condition Unit in the Document |
| `ConditionCategory` |  | |  |  | `CHAR(1)` | Condition Category (Examples: Tax, Freight, Price, Cost) |
| `ConditionIsForStatistics` |  | |  |  | `CHAR(1)` | Condition is used for statistics |
| `IsRelevantForAccrual` |  | |  |  | `CHAR(1)` | Condition is Relevant for Accrual  (e.g. Freight) |
| `CndnIsRelevantForInvoiceList` |  | |  |  | `CHAR(1)` | Settlement Document List Condition |
| `ConditionOrigin` |  | |  |  | `CHAR(1)` | Origin of the Condition |
| `IsGroupCondition` |  | |  |  | `CHAR(1)` | Group Condition |
| `ConditionRecord` |  | |  |  | `CHAR(10)` | Number of Condition Record |
| `ConditionSequentialNumber` |  | |  |  | `NUMC(3)` | Sequential Number of the Condition |
| `TaxCode` |  | |  |  | `CHAR(2)` | Tax on Sales/Purchases Code |
| `WithholdingTaxCode` |  | |  |  | `CHAR(2)` | Withholding Tax Code |
| `CndnRoundingOffDiffAmount` |  | |  |  | `CURR(5)` | Rounding-Off Difference of a Condition |
| `ConditionAmount` |  | |  |  | `CURR(15)` | Condition Value |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `ConditionControl` |  | |  |  | `CHAR(1)` | Condition Control |
| `ConditionInactiveReason` |  | |  |  | `CHAR(1)` | Condition is Inactive |
| `ConditionClass` |  | |  |  | `CHAR(1)` | Condition Class |
| `PrcgProcedureCounterForHeader` |  | |  |  | `NUMC(3)` | Pricing Procedure Counter for Header |
| `FactorForConditionBasisValue` |  | |  |  | `FLTP(16)` | Factor for Condition Basis Value |
| `StructureCondition` |  | |  |  | `CHAR(1)` | Structure Condition |
| `PeriodFactorForCndnBasisValue` |  | |  |  | `FLTP(16)` | Period Factor for Condition Basis Value |
| `PricingScaleType` |  | |  |  | `CHAR(1)` | Scale Type |
| `PricingScaleBasis` |  | |  |  | `CHAR(3)` | Scale Basis Indicator |
| `ConditionScaleBaseAmount` |  | |  |  | `DEC(24)` | Scale Base Amount |
| `ConditionScaleBaseQuantity` |  | |  |  | `DEC(24)` | Scale Base Quantity |
| `ConditionScaleBasisUnit` |  | |  |  | `UNIT(3)` | Condition Scale Unit of Measure |
| `ConditionScaleBasisCurrency` |  | |  |  | `CUKY(5)` | Scale Currency |
| `CndnIsRelevantForIntcoBilling` |  | |  |  | `CHAR(1)` | Condition for Intercompany Billing |
| `ConditionIsManuallyChanged` |  | |  |  | `CHAR(1)` | Condition Changed Manually |
| `ConditionIsForConfiguration` |  | |  |  | `CHAR(1)` | Condition Used for Variant Configuration |
| `VariantCondition` |  | |  |  | `CHAR(26)` | Variant Condition Key |
