---
name: C_FRTCOSTALLOCDOCDEX
description: This CDS view is used for data extraction to SAP BW/4HANA. It supports the transfer of settlement data to SAP BW/4HANA for freight cost allocation documents. All relevant information for freight cost allocation documents is provided in this extraction view, allowing you to build the desired analytical reports. This CDS view provides the data to answer the following business question: Which freight cost allocation documents are relevant for data extraction to SAP BW/4HANA? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FRTCOSTALLOCDOCDEX')/$value
semantic_en: This CDS view is used for data extraction to SAP BW/4HANA. It supports the transfer of settlement data to SAP BW/4HANA for freight cost allocation documents. All relevant information for freight cost allocation documents is provided in this extraction view, allowing you to build the desired analytical reports. This CDS view provides the data to answer the following business question: Which freight cost allocation documents are relevant for data extraction to SAP BW/4HANA? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - consumption-view
  - document
  - LO-AB
  - lob:logistics general
  - metadata-only
---
# C_FRTCOSTALLOCDOCDEX

**This CDS view is used for data extraction to SAP BW/4HANA. It supports the transfer of settlement data to SAP BW/4HANA for freight cost allocation documents. All relevant information for freight cost allocation documents is provided in this extraction view, allowing you to build the desired analytical reports. This CDS view provides the data to answer the following business question: Which freight cost allocation documents are relevant for data extraction to SAP BW/4HANA? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FRTCOSTALLOCDOCDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FreightCostAllocationDocument` |  | |  |  | `CHAR(10)` | Freight Cost Allocation Document Number |
| `FrtCostAllocDocumentItem` |  | |  |  | `NUMC(6)` | Document Item |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `SettlmtProcessCat` |  | |  |  | `CHAR(1)` | Settlement Process Category |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtCat` |  | |  |  | `CHAR(1)` | Settlement Category |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `FrtCostAllocAcctgTransfSts` |  | |  |  | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Pricing Procedure |
| `PricingDocument` |  | |  |  | `CHAR(10)` | Number of the Document Condition |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `FrtCostAllocDocCurrency` |  | |  |  | `CUKY(5)` | Currency of Freight Cost Allocation Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `FrtCostAllocDocTotGrossAmount` |  | |  |  | `CURR(15)` | Gross Settlement Amount in Document Currency |
| `FrtCostAllocDocTotalNetAmount` |  | |  |  | `CURR(15)` | Net Settlement Amount in Document Currency |
| `FrtCostAllocDocIsReversed` |  | |  |  | `CHAR(1)` | Freight Cost Allocation Document is Reversed |
| `RvsdFrtCostAllocDoc` |  | |  |  | `CHAR(10)` | Reversed Document |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `FrtCostAllocDocActivityReason` |  | |  |  | `CHAR(3)` | Header Activity Reason for Document Creation |
| `SettlmtClassificationCat` |  | |  |  | `CHAR(1)` | Settlement Classification Category |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `FrtCostAllocDocIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `FrtCostAllocBusProcCat` |  | |  |  | `CHAR(2)` | Use Case Type |
| `JournalEntryCreationDate` |  | |  |  | `DATS(8)` | Journal Entry Creation Date in UTC |
| `JournalEntryCreationTime` |  | |  |  | `TIMS(6)` | Journal Entry Creation Time in UTC |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `InventoryValuationType` |  | |  |  | `CHAR(10)` | Valuation Type |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `SettlmtQuantity` |  | |  |  | `QUAN(13)` | Quantity of Settlement Management Document Item |
| `SettlmtQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure of Settlement Management Doc Item Quantity |
| `NetPriceAmount` |  | |  |  | `CURR(11)` | Net Price in Document Currency |
| `NetPriceQuantity` |  | |  |  | `DEC(5)` | Price Unit of Settlement Management Document Item |
| `NetPriceQuantityUnit` |  | |  |  | `UNIT(3)` | Settlement Management Document Item Price Unit |
| `SettlmtToBaseQuantityNmrtr` |  | |  |  | `DEC(5)` | Numerator Converting Qty in Settlement Document to Base Unit |
| `SettlmtToBaseQuantityDnmntr` |  | |  |  | `DEC(5)` | Denominator Converting Qty in Settlement Doc. to Base Unit |
| `SettlmtToNetPriceQtyNmrtr` |  | |  |  | `DEC(5)` | Numerator for Converting Settl. UoM to Settl. Price UoM |
| `SettlmtToNetPriceQtyDnmntr` |  | |  |  | `DEC(5)` | Denominator for Converting Settl. UoM to Settl. Price UoM |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ItemNetWeight` |  | |  |  | `QUAN(15)` | Net Weight |
| `ItemGrossWeight` |  | |  |  | `QUAN(15)` | Gross Weight |
| `ItemWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `ItemVolume` |  | |  |  | `QUAN(15)` | Volume |
| `ItemVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `ProductPurchasePointsQtyUnit` |  | |  |  | `UNIT(3)` | Points Unit |
| `ProductPurchasePointsQty` |  | |  |  | `QUAN(13)` | Number of Points |
| `FrtCostAllocItemGrossAmount` |  | |  |  | `CURR(15)` | Gross Amount of Item in Document Currency |
| `FrtCostAllocItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of Item in Document Currency |
| `FrtCostAllocSubtotal1Amount` |  | |  |  | `CURR(13)` | Subtotal 1 Amount |
| `FrtCostAllocSubtotal2Amount` |  | |  |  | `CURR(13)` | Subtotal 2 Amount |
| `FrtCostAllocSubtotal3Amount` |  | |  |  | `CURR(13)` | Subtotal 3 Amount |
| `FrtCostAllocSubtotal4Amount` |  | |  |  | `CURR(13)` | Subtotal 4 Amount |
| `FrtCostAllocSubtotal5Amount` |  | |  |  | `CURR(13)` | Subtotal 5 Amount |
| `FrtCostAllocSubtotal6Amount` |  | |  |  | `CURR(13)` | Subtotal 6 Amount |
| `FrtCostAllocEffctvItemAmount` |  | |  |  | `CURR(13)` | Effective Amount of Item |
| `FrtCostAllocItmStstclPrpty` |  | |  |  | `CHAR(1)` | Statistical Property of Settlement Management Item |
| `SettlmtSourceDoc` |  | |  |  | `CHAR(10)` | Document Number of the Source Document |
| `SettlmtSourceDocItem` |  | |  |  | `NUMC(6)` | Item of the Source Document |
| `SettlmtSourceDocCat` |  | |  |  | `CHAR(2)` | Document Category of Source Document |
| `SettlmtSourceDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Source Document in Settlement Management |
| `FrtCostAllocItmActivityReason` |  | |  |  | `CHAR(3)` | Activity Reason for Document Creation |
| `FrtCostAllocDocItemText` |  | |  |  | `CHAR(40)` | Short Text |
| `SupplierProductID` |  | |  |  | `CHAR(35)` | Material Number Used by Supplier |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Price Determination Is Incomplete |
| `SettlmtPrecdgDoc` |  | |  |  | `CHAR(10)` | Preceding Document of the Settlement Management Document |
| `SettlmtPrecdgDocItem` |  | |  |  | `NUMC(6)` | Item of Preceding Document |
| `SettlmtPrecdgDocCat` |  | |  |  | `CHAR(2)` | Document Category of Preceding Document |
| `SettlmtPrecdgDocFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of a Preceding Document in Settlement Management |
| `FrtCostAllocDocItmCat` |  | |  |  | `CHAR(1)` | Item Category |
| `SettlmtItemReltdPurgDoc` |  | |  |  | `CHAR(10)` | Related Purchasing Document of a Settlement Management Item |
| `SettlmtItemReltdPurgDocItem` |  | |  |  | `NUMC(5)` | Related Purchasing Document Item of a Settlmt Mgmt Item |
| `SettlmtItemReltdBillgDoc` |  | |  |  | `CHAR(10)` | Related Billing Document of a Settlement Management Item |
| `SettlmtItemReltdBillgDocItem` |  | |  |  | `NUMC(6)` | Related Billing Document Item of a Settlmt Mgmt Item |
| `FreightCostAllocationOrder` |  | |  |  | `CHAR(12)` | Order for Account Assignment |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date of Services Rendered |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `SettlementFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Settlement |
| `FrtCostAllocRefDocType` |  | |  |  | `CHAR(4)` | Type of Reference Document for Settlement Management |
| `FrtCostAllocRefDoc` |  | |  |  | `CHAR(20)` | Reference Document for Settlement Management |
| `FrtCostAllocRefDocFsclYr` |  | |  |  | `NUMC(4)` | Year of Reference Document |
| `FrtCostAllocRefDocLgclSyst` |  | |  |  | `CHAR(10)` | Logical System of Reference Document for Smt Mgmt |
| `FrtCostAllocRefDocCompanyCode` |  | |  |  | `CHAR(4)` | Company Code of Reference Document for Settlement Management |
| `FrtCostAllocRefDocItem` |  | |  |  | `NUMC(10)` | Reference Document Item for Settlement Management Document |
| `FrtCostAllocRefDocCat` |  | |  |  | `CHAR(2)` | Reference Document Category in Settlement Management |
| `FrtCostAllocAddlRefDocType` |  | |  |  | `CHAR(4)` | Type of Additional Reference Document for Settlmt Mgmt |
| `FrtCostAllocAddlRefDoc` |  | |  |  | `CHAR(20)` | Additional Reference Document for Settlement Management |
| `FrtCostAllocAddlRefDocFsclYr` |  | |  |  | `NUMC(4)` | Year of Additional Reference Document |
| `FrtCostAllocAddlRefLgclSyst` |  | |  |  | `CHAR(10)` | Logical System of Additional Reference Document for Smt Mgmt |
| `FrtCostAllocAddlRefDocItem` |  | |  |  | `NUMC(10)` | Additional Reference Doc Item for Settlement Mgmt. Document |
| `FrtCostAllocAddlRefDocCat` |  | |  |  | `CHAR(2)` | Additional Reference Document Category |
| `ProductHierarchy` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `SalesSpcfcProductGroup1` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 1 |
| `SalesSpcfcProductGroup2` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 2 |
| `SalesSpcfcProductGroup3` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 3 |
| `SalesSpcfcProductGroup4` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 4 |
| `SalesSpcfcProductGroup5` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 5 |
