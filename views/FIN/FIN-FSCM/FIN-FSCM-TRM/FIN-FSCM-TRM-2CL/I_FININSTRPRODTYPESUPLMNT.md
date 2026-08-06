---
name: I_FININSTRPRODTYPESUPLMNT
description: This CDS view provides additional properties for the product type in the Manage Financial Transactions app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FININSTRPRODTYPESUPLMNT')/$value
semantic_en: This CDS view provides additional properties for the product type in the Manage Financial Transactions app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-TRM-2CL
  - FIN-FSCM
  - FIN-FSCM-TRM
  - FIN-FSCM-TRM-2CL
  - interface-view
  - lob:finance
  - product
  - transaction
  - metadata-only
---
# I_FININSTRPRODTYPESUPLMNT

**This CDS view provides additional properties for the product type in the Manage Financial Transactions app. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FININSTRPRODTYPESUPLMNT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `FinancialInstrumentProductType` | `CHAR(3)` | Product Type |
| `TreasurySettlementType` | `CHAR(1)` | Settlement Indicator |
| `OptionExerciseType` | `NUMC(1)` | Exercise Type (American or European) |
| `TradeFinanceCategory` | `CHAR(1)` | Trade Finance Category |
| `OptionUnderlyingProductType` | `CHAR(3)` | Underlying Product Type of the Option |
| `OptionUndrlgTransactionType` | `CHAR(3)` | Transaction Type of Underlying |
| `IntrstRateSwapIsCrossCurrency` | `CHAR(1)` | Indicator: Currency swap |
| `ProductTypeCashFlowCalculation` | `CHAR(2)` | Cash Flow Calculation |
