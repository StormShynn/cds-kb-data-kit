---
name: C_PERSSETTLMTDOCDEX
description: This CDS view supports data extraction to SAP BW/4HANA. It enables the data transfer to SAP BW/4HANA for personnel settlement documents. Providing all relevant personnel settlement document information, this CDS view also allows you to build analytical reports. This CDS view provides the data to answer the following business question: Which personnel settlement documents are relevant for SAP BW/4HANA data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PERSSETTLMTDOCDEX')/$value
semantic_en: This CDS view supports data extraction to SAP BW/4HANA. It enables the data transfer to SAP BW/4HANA for personnel settlement documents. Providing all relevant personnel settlement document information, this CDS view also allows you to build analytical reports. This CDS view provides the data to answer the following business question: Which personnel settlement documents are relevant for SAP BW/4HANA data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
semantic_vi: Personnel Settlement Document Extraction — CDS view tiêu dùng dựa trên R_PersSettlmtDocDEX.
keywords:
  - personnel
  - settlement
  - document
  - extraction
  - pers
  - settlmt
  - item
  - type
  - process
tags:
  - LO
  - bo:companycode
  - component:LO-AB
  - consumption-view
  - document
  - LO-AB
  - lob:logistics general
  - bo:salesorder
---
# C_PERSSETTLMTDOCDEX

**This CDS view supports data extraction to SAP BW/4HANA. It enables the data transfer to SAP BW/4HANA for personnel settlement documents. Providing all relevant personnel settlement document information, this CDS view also allows you to build analytical reports. This CDS view provides the data to answer the following business question: Which personnel settlement documents are relevant for SAP BW/4HANA data extraction? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PERSSETTLMTDOCDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonnelSettlementDocument` | ✓ | |  |  | `CHAR(10)` | Personnel Settlement Document Number |
| `PersSettlmtDocItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `SettlmtDocCat` |  | |  |  | `CHAR(2)` | Settlement Document Category |
| `SettlmtProcessType` |  | |  |  | `CHAR(4)` | Settlement Process Type |
| `LogisticsDataEntryCat` |  | |  |  | `CHAR(1)` | Entry Category for Logistics Data |
| `SettlmtProcessCat` |  | |  |  | `CHAR(1)` | Settlement Process Category |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `PersSettlmtAcctgTransfSts` |  | |  |  | `CHAR(1)` | Posting Status for Transfer to Financial Accounting |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Settlement Management Document |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `SettlmtApplSts` |  | |  |  | `CHAR(4)` | Application Status for a Settlement Management Document |
| `SettlmtApplStsGrp` |  | |  |  | `CHAR(4)` | Status Group for Settlement Management Documents |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Pricing Procedure |
| `PricingDocument` |  | |  |  | `CHAR(10)` | Number of the Document Condition |
| `PersonWorkAgreement` |  | |  |  | `NUMC(8)` | Personnel Number |
| `PersonnelCostCenter` |  | |  |  | `CHAR(10)` | Worker Cost Center |
| `PersonnelControllingArea` |  | |  |  | `CHAR(4)` | Worker Controlling Area |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Document Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date of Last Document Change |
| `PersSettlmtDocCurrency` |  | |  |  | `CUKY(5)` | Currency of Settlement Document |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Conversion Rate (Not Converted) |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date |
| `PersSettlmtDocTotalNetAmount` |  | |  |  | `CURR(15)` | Net Settlement Amount in Document Currency |
| `PersSettlmtDocIsReversed` |  | |  |  | `CHAR(1)` | Personnel Settlement Document Is Reversed |
| `RvsdPersSettlmtDoc` |  | |  |  | `CHAR(10)` | Reversed Document |
| `PersSettlmtDocActivityReason` |  | |  |  | `CHAR(3)` | Header Activity Reason for Document Creation |
| `PaymentReference` |  | |  |  | `CHAR(30)` | Payment Reference |
| `CndnContrType` |  | |  |  | `CHAR(4)` | Condition Contract Type |
| `SettlmtReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract in Settlement Management |
| `CndnContrProcVar` |  | |  |  | `CHAR(4)` | Condition Contract Process Variant |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Fiscal Period |
| `SettlmtDateCat` |  | |  |  | `CHAR(1)` | Rebates: Settlement Date Type |
| `ActualSettlmtDate` |  | |  |  | `DATS(8)` | Actual Settlement Date |
| `SettlmtDateSequentialID` |  | |  |  | `NUMC(1)` | Settlement Date - Sequential ID |
| `SettlmtDate` |  | |  |  | `DATS(8)` | Rebates: Settlement Date |
| `PersSettlmtDocIncmpltnsRsn` |  | |  |  | `CHAR(4)` | Incompleteness Reason of Settlement Management Document |
| `SettlmtBusProcVar` |  | |  |  | `CHAR(4)` | Settlement Management Process Category |
| `SettlmtBusProcCat` |  | |  |  | `CHAR(2)` | Use Case Type |
| `TotalSettlmtQuantity` |  | |  |  | `QUAN(15)` | Total Quantity of the Business Volume in a Settlement Run |
| `TotalSettlmtQuantityUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Total Quantity |
| `TotalSettlmtNetWeight` |  | |  |  | `QUAN(15)` | Total Net Weight of the Business Volume in a Settlement Run |
| `TotalSettlmtGrossWeight` |  | |  |  | `QUAN(15)` | Total Gross Weight of the Bus Volume in a Settlement Run |
| `TotalSettlmtWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight for Total Weight |
| `TotalSettlmtVolume` |  | |  |  | `QUAN(15)` | Total Volume of the Business Volume in a Settlement Run |
| `TotalSettlmtVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit for Total Volume |
| `SettlmtPeriodStartDate` |  | |  |  | `DATS(8)` | Start Date of Settlement Period |
| `SettlmtPeriodEndDate` |  | |  |  | `DATS(8)` | End Date of Settlement Period |
| `CndnContrProcessCategory` |  | |  |  | `CHAR(2)` | Process Category of a Condition Contract |
| `PostingPartnerCat` |  | |  |  | `CHAR(1)` | Posting Partner |
| `JournalEntryCreationDate` |  | |  |  | `DATS(8)` | Journal Entry Creation Date in UTC |
| `JournalEntryCreationTime` |  | |  |  | `TIMS(6)` | Journal Entry Creation Time in UTC |
| `SettlmtCompensationReason` |  | |  |  | `CHAR(4)` | Compensation Reason for a Settlement Management Document |
| `SettlmtCompnVar` |  | |  |  | `CHAR(4)` | Compensation Variant |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
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
| `PersSettlmtDocItemNetAmount` |  | |  |  | `CURR(15)` | Net Amount of Item in Document Currency |
| `PersSettlmtDocSubtotal1Amount` |  | |  |  | `CURR(13)` | Subtotal 1 Amount |
| `PersSettlmtDocSubtotal2Amount` |  | |  |  | `CURR(13)` | Subtotal 2 Amount |
| `PersSettlmtDocSubtotal3Amount` |  | |  |  | `CURR(13)` | Subtotal 3 Amount |
| `PersSettlmtDocSubtotal4Amount` |  | |  |  | `CURR(13)` | Subtotal 4 Amount |
| `PersSettlmtDocSubtotal5Amount` |  | |  |  | `CURR(13)` | Subtotal 5 Amount |
| `PersSettlmtDocSubtotal6Amount` |  | |  |  | `CURR(13)` | Subtotal 6 Amount |
| `PersSettlmtDocRbteBasisAmount` |  | |  |  | `CURR(13)` | Rebate Basis Amount |
| `PersSettlmtDocItmStstclPrpty` |  | |  |  | `CHAR(1)` | Statistical Property of Settlement Management Item |
| `PersSettlmtDocItmActyReason` |  | |  |  | `CHAR(3)` | Activity Reason for Document Creation |
| `PersSettlmtDocItemText` |  | |  |  | `CHAR(40)` | Short Text |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) not converted |
| `PersSettlmtDocOrder` |  | |  |  | `CHAR(12)` | Order for Account Assignment in Settlement Management |
| `PrcDetnIsIncmplt` |  | |  |  | `CHAR(1)` | Price Determination is Incomplete |
| `PersSettlmtDocItemCat` |  | |  |  | `CHAR(1)` | Item Category |
| `SettlmtItemReltdCndnContr` |  | |  |  | `CHAR(10)` | Related Condition Contract of a Settlement Management Item |
| `PersSettlmtDocItemStatus` |  | |  |  | `CHAR(1)` | Item Status |
| `PersSettlmtDocItemRvsd` |  | |  |  | `CHAR(1)` | Item Was Canceled |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date of Services Rendered |
| `SettlementFiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year of Settlement |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `ProductHierarchy` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `SalesSpcfcProductGroup1` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 1 |
| `SalesSpcfcProductGroup2` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 2 |
| `SalesSpcfcProductGroup3` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 3 |
| `SalesSpcfcProductGroup4` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 4 |
| `SalesSpcfcProductGroup5` |  | |  |  | `CHAR(3)` | Sales-Specific Product Group 5 |
| `BusTransDocReferenceID` |  | |  |  | `CHAR(35)` | Business Transaction Document ID |
| `BusTransDocReferenceItemID` |  | |  |  | `CHAR(10)` | Business Transaction Document Item ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PERSSETTLMTDOCDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PERSSETTLMTDOCDEX')/$value)*

```abap
@EndUserText.label: 'Personnel Settlement Document Extraction'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    compositionRoot: true,
    modelingPattern:#ANALYTICAL_FACT,
    supportedCapabilities: [#CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
    usageType: {
       dataClass:      #MIXED,
       serviceQuality: #D,
       sizeCategory:   #XXL
       },
    sapObjectNodeType.name: 'PersonnelSettlementDocument'
    }
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta: {
            changeDataCapture: {
                mapping:[
                    {
                        table: 'wbrp', role: #MAIN,
                        viewElement: ['PersonnelSettlementDocument', 'PersSettlmtDocItem'],
                        tableElement: ['wbeln', 'posnr']
                    },
                    {
                        table: 'wbrk', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement: [ 'PersonnelSettlementDocument'],
                        tableElement: ['wbeln']
                    }
                    ]
               }
            }
        }
    }
@VDM.viewType: #CONSUMPTION
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
    }

define view entity C_PersSettlmtDocDEX
  as select from R_PersSettlmtDocDEX as PersSettlmtDocDEX
{
  key PersonnelSettlementDocument,
  key PersSettlmtDocItem,

      PersSettlmtDocDEX.SettlmtDocType,
      PersSettlmtDocDEX.SettlmtDocCat,
      PersSettlmtDocDEX.SettlmtProcessType,
      PersSettlmtDocDEX.LogisticsDataEntryCat,
      PersSettlmtDocDEX.SettlmtProcessCat,
      PersSettlmtDocDEX.PostingDate,
      PersSettlmtDocDEX.PersSettlmtAcctgTransfSts,
      PersSettlmtDocDEX.DocumentDate,
      PersSettlmtDocDEX.DocumentReferenceID,
      PersSettlmtDocDEX.AssignmentReference,
      PersSettlmtDocDEX.SettlmtApplSts,
      PersSettlmtDocDEX.SettlmtApplStsGrp,
      PersSettlmtDocDEX.PricingProcedure,
      PersSettlmtDocDEX.PricingDocument,
      PersSettlmtDocDEX.PersonWorkAgreement,
      PersSettlmtDocDEX.PersonnelCostCenter,
      PersSettlmtDocDEX.PersonnelControllingArea,
      PersSettlmtDocDEX.CompanyCode,
      PersSettlmtDocDEX.SalesOrganization,
      PersSettlmtDocDEX.DistributionChannel,
      PersSettlmtDocDEX.Division,
      PersSettlmtDocDEX.SalesOffice,
      PersSettlmtDocDEX.SalesGroup,
      PersSettlmtDocDEX.CreatedByUser,
      PersSettlmtDocDEX.CreationDate,
      PersSettlmtDocDEX.CreationTime,
      PersSettlmtDocDEX.LastChangeDate,
      PersSettlmtDocDEX.PersSettlmtDocCurrency,
      PersSettlmtDocDEX.ExchangeRate,
      PersSettlmtDocDEX.ExchangeRateType,
      PersSettlmtDocDEX.ExchangeRateIsFixed,
      PersSettlmtDocDEX.ExchangeRateDate,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocDEX.PersSettlmtDocTotalNetAmount,
      PersSettlmtDocDEX.PersSettlmtDocIsReversed,
      PersSettlmtDocDEX.RvsdPersSettlmtDoc,
      PersSettlmtDocDEX.PersSettlmtDocActivityReason,
      PersSettlmtDocDEX.PaymentReference,
      PersSettlmtDocDEX.CndnContrType,
      PersSettlmtDocDEX.SettlmtReltdCndnContr,
      PersSettlmtDocDEX.CndnContrProcVar,
      PersSettlmtDocDEX.FiscalPeriod,
      PersSettlmtDocDEX.SettlmtDateCat,
      PersSettlmtDocDEX.ActualSettlmtDate,
      PersSettlmtDocDEX.SettlmtDateSequentialID,
      PersSettlmtDocDEX.SettlmtDate,
      PersSettlmtDocDEX.PersSettlmtDocIncmpltnsRsn,
      PersSettlmtDocDEX.SettlmtBusProcVar,
      PersSettlmtDocDEX.SettlmtBusProcCat,
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtQuantityUnit'
      PersSettlmtDocDEX.TotalSettlmtQuantity,
      PersSettlmtDocDEX.TotalSettlmtQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      PersSettlmtDocDEX.TotalSettlmtNetWeight,
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      PersSettlmtDocDEX.TotalSettlmtGrossWeight,
      PersSettlmtDocDEX.TotalSettlmtWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtVolumeUnit'
      PersSettlmtDocDEX.TotalSettlmtVolume,
      PersSettlmtDocDEX.TotalSettlmtVolumeUnit,
      PersSettlmtDocDEX.SettlmtPeriodStartDate,
      PersSettlmtDocDEX.SettlmtPeriodEndDate,
      PersSettlmtDocDEX.CndnContrProcessCategory,
      PersSettlmtDocDEX.PostingPartnerCat,
      PersSettlmtDocDEX.JournalEntryCreationDate,
      PersSettlmtDocDEX.JournalEntryCreationTime,
      PersSettlmtDocDEX.SettlmtCompensationReason,
      PersSettlmtDocDEX.SettlmtCompnVar,

      /* Item */
      PersSettlmtDocDEX.Product,
      PersSettlmtDocDEX.ProductGroup,
      PersSettlmtDocDEX.Plant,
      PersSettlmtDocDEX.PricingDate,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SettlmtQuantityUnit'
      PersSettlmtDocDEX.SettlmtQuantity,
      PersSettlmtDocDEX.SettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocDEX.NetPriceAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      PersSettlmtDocDEX.NetPriceQuantity,
      PersSettlmtDocDEX.NetPriceQuantityUnit,
      PersSettlmtDocDEX.SettlmtToBaseQuantityNmrtr,
      PersSettlmtDocDEX.SettlmtToBaseQuantityDnmntr,
      PersSettlmtDocDEX.SettlmtToNetPriceQtyNmrtr,
      PersSettlmtDocDEX.SettlmtToNetPriceQtyDnmntr,
      PersSettlmtDocDEX.BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      PersSettlmtDocDEX.ItemNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      PersSettlmtDocDEX.ItemGrossWeight,
      PersSettlmtDocDEX.ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      PersSettlmtDocDEX.ItemVolume,
      PersSettlmtDocDEX.ItemVolumeUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocDEX.PersSettlmtDocItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocDEX.PersSettlmtDocSubtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocDEX.PersSettlmtDocSubtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocDEX.PersSettlmtDocSubtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocDEX.PersSettlmtDocSubtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocDEX.PersSettlmtDocSubtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocDEX.PersSettlmtDocSubtotal6Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocDEX.PersSettlmtDocRbteBasisAmount,
      PersSettlmtDocDEX.PersSettlmtDocItmStstclPrpty,
      PersSettlmtDocDEX.PersSettlmtDocItmActyReason,
      PersSettlmtDocDEX.PersSettlmtDocItemText,
      PersSettlmtDocDEX.BusinessArea,
      PersSettlmtDocDEX.ControllingArea,
      PersSettlmtDocDEX.CostCenter,
      PersSettlmtDocDEX.ProfitCenter,
      PersSettlmtDocDEX.WBSElementInternalID,
      PersSettlmtDocDEX.PersSettlmtDocOrder,
      PersSettlmtDocDEX.PrcDetnIsIncmplt,

      PersSettlmtDocDEX.PersSettlmtDocItemCat,

      PersSettlmtDocDEX.SettlmtItemReltdCndnContr,

      PersSettlmtDocDEX.PersSettlmtDocItemStatus,
      PersSettlmtDocDEX.PersSettlmtDocItemRvsd,
      PersSettlmtDocDEX.ServicesRenderedDate,
      PersSettlmtDocDEX.SettlementFiscalYear,
      PersSettlmtDocDEX.GLAccount,
      PersSettlmtDocDEX.ProductHierarchy,
      PersSettlmtDocDEX.SalesSpcfcProductGroup1,
      PersSettlmtDocDEX.SalesSpcfcProductGroup2,
      PersSettlmtDocDEX.SalesSpcfcProductGroup3,
      PersSettlmtDocDEX.SalesSpcfcProductGroup4,
      PersSettlmtDocDEX.SalesSpcfcProductGroup5,
      PersSettlmtDocDEX.BusTransDocReferenceID,
      PersSettlmtDocDEX.BusTransDocReferenceItemID,

      /* Associations */
      @Consumption.hidden: true
      PersSettlmtDocDEX._PersonWorkAgreement
}
```
