---
name: I_TRDGCONTR
description: "Trading Contract"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTR')/$value
semantic_en: "Trading Contract"
semantic_vi: "Trading Contract — CDS view giao diện dựa trên R_TrdgContr."
keywords:
  - "Trading Contract"
  - "trading"
  - "contract"
  - "type"
  - "category"
  - "trdg"
  - "contr"
  - "process"
  - "purpose"
tags:
  - LO
  - component:LO-GT
  - contract
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGCONTR

**Trading Contract**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTR')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradingContract` | ✓ | |  |  | `CHAR(10)` | Trading Contract |
| `TradingContractType` |  | |  |  | `CHAR(4)` | Trading Contract Type |
| `TradingContractCategory` |  | |  |  | `CHAR(1)` | Trading Contract Category |
| `TrdgContrBusProcessCategory` |  | |  |  | `CHAR(2)` | Business Process Category |
| `TradingContractPurpose` |  | |  |  | `CHAR(2)` | Purpose of Trading Contract |
| `TrdgContrApplicationStatus` |  | |  |  | `CHAR(1)` | Application Status of Trading Contract |
| `SalesDocumentType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `SalesDocumentCondition` |  | |  |  | `CHAR(10)` | Sales Document Condition |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `TrdgContrPersonResponsible` |  | |  |  | `CHAR(12)` | Trading Contract: Person Responsible |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Created At |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `LastChangeTime` |  | |  |  | `TIMS(6)` | Time of Change |
| `TrdgContrDate` |  | |  |  | `DATS(8)` | Document Date |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `SalesDocumentDate` |  | |  |  | `DATS(8)` | Sales Document Date |
| `SalesOrderReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `SDDocumentCollectiveNumber` |  | |  |  | `CHAR(10)` | Collective Number (SD) |
| `CustomerPurchaseOrderType` |  | |  |  | `CHAR(4)` | Customer Purchase Order Type |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  | `CHAR(4)` | Purchase order number supplement |
| `BindingPeriodValidityStartDate` |  | |  |  | `DATS(8)` | Quotation/Inquiry is Valid From |
| `BindingPeriodValidityEndDate` |  | |  |  | `DATS(8)` | Date Until Which Bid/Quotation is Binding (Valid-To Date) |
| `TrdgContrSlsValidityStartDate` |  | |  |  | `DATS(8)` | Sales Validity Start Date |
| `TrdgContrSlsValidityEndDate` |  | |  |  | `DATS(8)` | Sales Validity End Date |
| `TrdgContrProdUsgeCat` |  | |  |  | `CHAR(3)` | Product Usage Category |
| `ForeignTrade` |  | |  |  | `CHAR(10)` | Number of foreign trade data in MM and SD documents |
| `TrdgContrSlsPersonName` |  | |  |  | `CHAR(35)` | Name of orderer |
| `PhoneNumber1` |  | |  |  | `CHAR(16)` | Customer Telephone Number |
| `TrdgContrSlsNrOfFollowUps` |  | |  |  | `DEC(3)` | Sales Number of Contacts |
| `DocumentReferenceID` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `TradingContractCurrency` |  | |  |  | `CUKY(5)` | Currency of Trading Contract |
| `TrdgContrTotalNetAmount` |  | |  |  | `CURR(15)` | Net Value of the Sales Document in Document Currency |
| `TradingContractExchangeRate` |  | |  |  | `DEC(9)` | Trading Contract Exchange Rate  (Not Converted) |
| `TrdgContrExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type |
| `TrdgContrExchangeRateDate` |  | |  |  | `DATS(8)` | Exchange Rate Date in Trading Contract |
| `TradingContractSalesCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `TrdgContrSalesExchangeRate` |  | |  |  | `DEC(9)` | Sales Exchange Rate |
| `TrdgContrSalesExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type in Sales |
| `TrdgContrSalesPricingDate` |  | |  |  | `DATS(8)` | Sales Pricing Date |
| `TrdgContrSalesPricingProcedure` |  | |  |  | `CHAR(6)` | Sales Pricing Procedure |
| `CustomerTaxClassification1` |  | |  |  | `CHAR(1)` | Alternative Tax Classification |
| `CustomerTaxClassification2` |  | |  |  | `CHAR(1)` | Tax Classification 2 for Customer |
| `CustomerTaxClassification3` |  | |  |  | `CHAR(1)` | Tax Classification 3 for Customer |
| `CustomerTaxClassification4` |  | |  |  | `CHAR(1)` | Tax Classification 4 for Customer |
| `CustomerTaxClassification5` |  | |  |  | `CHAR(1)` | Tax Classification 5 for Customer |
| `CustomerTaxClassification6` |  | |  |  | `CHAR(1)` | Tax Classification 6 for Customer |
| `CustomerTaxClassification7` |  | |  |  | `CHAR(1)` | Tax Classification 7 for Customer |
| `CustomerTaxClassification8` |  | |  |  | `CHAR(1)` | Tax Classification 8 for Customer |
| `CustomerTaxClassification9` |  | |  |  | `CHAR(1)` | Tax Classification 9 for Customer |
| `TaxDepartureCountry` |  | |  |  | `CHAR(3)` | Tax Departure Country/Region |
| `VATRegistrationCountry` |  | |  |  | `CHAR(3)` | Tax Destination Country/Region |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `CompleteDeliveryIsDefined` |  | |  |  | `CHAR(1)` | Complete Delivery Defined for Each Sales Order |
| `DeliveryBlockReason` |  | |  |  | `CHAR(2)` | Delivery Block (Document Header) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `HeaderBillingBlockReason` |  | |  |  | `CHAR(2)` | Billing Block in SD Document |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CustomerCreditAccount` |  | |  |  | `CHAR(10)` | Customer's Account Number with Credit Limit Reference |
| `CustomerCreditGroup` |  | |  |  | `CHAR(4)` | Customer Credit Group |
| `CreditRepresentativeGroup` |  | |  |  | `CHAR(3)` | Credit Representative Group for Credit Management |
| `CustomerRiskCategory` |  | |  |  | `CHAR(3)` | Credit Management: Risk Category |
| `ControllingAreaCurrency` |  | |  |  | `CUKY(5)` | Currency key of credit control area |
| `CreditBlockReleaseDate` |  | |  |  | `DATS(8)` | Release date of the document determined by credit management |
| `NextCreditCheckDate` |  | |  |  | `DATS(8)` | Date of Next Credit Check of Document |
| `NextShippingDate` |  | |  |  | `DATS(8)` | Next date |
| `ReleasedCreditAmount` |  | |  |  | `CURR(15)` | Released Credit Value of the Document |
| `TrdgContrAddlExpnsBlkRsn` |  | |  |  | `CHAR(2)` | Additional Unplanned Expenses Block Reason |
| `TrdgContrSuplrBillgBlkRsn` |  | |  |  | `CHAR(2)` | Supplier Billing Block Reason |
| `AccountingExchangeRate` |  | |  |  | `DEC(9)` | Accounting Exchange Rate |
| `TrdgContrSlsExternalReference` |  | |  |  | `CHAR(12)` | Your Reference |
| `TradingContractIsComplete` |  | |  |  | `CHAR(1)` | Document Is Complete |
| `LastCustomerContactDate` |  | |  |  | `DATS(8)` | Last Customer Contact Date |
| `TrdgContrQuantityIsComplete` |  | |  |  | `CHAR(1)` | Trading Contract: Quantities In Document Are Complete |
| `TradingContractReleaseStatus` |  | |  |  | `CHAR(1)` | Release Status for Follow-On Document Generation |
| `TradingContractExtID` |  | |  |  | `CHAR(30)` | External Identifier in Trading Contract |
| `TrdgContrSrceDocType` |  | |  |  | `CHAR(2)` | Source Document Type |
| `TradingContractGoodsReceiver` |  | |  |  | `CHAR(10)` | Goods Receiver |
| `IsEUTriangularDeal` |  | |  |  | `CHAR(1)` | Indicator: Triangular Deal Within the EU |
| `TrdgContrHdrIsExtended` |  | |  |  | `CHAR(1)` | Dummy Data Element for Trading Contract Header Extensibility |
| `TrdgContrSuccessorArchived` |  | |  |  | `CHAR(1)` | Network Archived |
| `TrdgContrHasCnsldtdItem` |  | |  |  | `CHAR(1)` | Consolidated item exists |
| `TrdgContrVarContrSettlmt` |  | |  |  | `CHAR(1)` | Business Process Variant for Contract Settlement |
| `TrdgContrBatDetnProcedure` |  | |  |  | `CHAR(6)` | Search Procedure for Batch Determination |
| `TrdgContrProcessingStatus` |  | |  |  | `CHAR(1)` | Status for Processing of Follow-on document |
| `TrdgContrProcessingLastAction` |  | |  |  | `CHAR(4)` | Last Action code for Processing of Follow-on document |
| `TrdgContrProcgLastSequence` |  | |  |  | `NUMC(4)` | Last Executed sequence for Processing of Follow-on document |
| `TradingProcessVariantType` |  | |  |  | `CHAR(4)` | Trading Execution Workbench Type |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `TrdgContrPricingType` |  | |  |  | `CHAR(1)` | Definition of Pricing Procedure in Trading Contract |
| `TrdgContrLastChangedCategory` |  | |  |  | `CHAR(1)` | Last Changed Category in Trading Contract |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier's Account Number |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingDocumentOrderDate` |  | |  |  | `DATS(8)` | Purchasing Document Date |
| `TrdgContrPurgReqdDeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date of purchasing item in trading contract |
| `TrdgContrPurgDeliveryDateType` |  | |  |  | `CHAR(1)` | Purchasing Delivery Date Type |
| `TrdgContrSlsReqdDeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date for Item Sales |
| `TrdgContrSlsDeliveryDateType` |  | |  |  | `CHAR(1)` | Sales Delivery Date Type |
| `TrdgContrPurgCurrency` |  | |  |  | `CUKY(5)` | Purchasing Currency |
| `TrdgContrPurgExchangeRate` |  | |  |  | `DEC(9)` | Purchasing Exchange Rate |
| `TrdgContrPurgExchangeRateType` |  | |  |  | `CHAR(4)` | Purchasing Exchange Rate Type |
| `TrdgContrPurgPaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key Purchasing |
| `TrdgContrSalesPaymentTerms` |  | |  |  | `CHAR(4)` | Terms Of Payment Key Sales |
| `TrdgContrSalesFixedValueDate` |  | |  |  | `DATS(8)` | Sales Fixed Value Date |
| `TrdgContrPurgFixedValueDate` |  | |  |  | `DATS(8)` | Purchasing Fixed Value Date |
| `TrdgContrPurgPricingDate` |  | |  |  | `DATS(8)` | Purchasing Pricing Date |
| `SupplyingPlant` |  | |  |  | `CHAR(4)` | Supplying (issuing) plant in case of stock transport order |
| `TrdgContrPurgIncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version Purchasing |
| `TrdgContrPurgIncotermsLoc1Text` |  | |  |  | `CHAR(70)` | Incoterms Location 1 Purchasing |
| `TrdgContrPurgIncotermsLoc2Text` |  | |  |  | `CHAR(70)` | Incoterms Location 2 Purchasing |
| `TrdgContrSalesIncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version Sales |
| `TrdgContrSlsIncotermsLoc1Text` |  | |  |  | `CHAR(70)` | Incoterms Location 1 Sales |
| `TrdgContrSlsIncotermsLoc2Text` |  | |  |  | `CHAR(70)` | Incoterms Location 2 Sales |
| `QuotationSubmissionDate` |  | |  |  | `DATS(8)` | Quotation Submission Date |
| `TrdgContrSalesPaymentMethod` |  | |  |  | `CHAR(1)` | Sales Payment Method |
| `TrdgContrPurgValidityStartDate` |  | |  |  | `DATS(8)` | Purchasing Validity Start Date |
| `TrdgContrPurgValidityEndDate` |  | |  |  | `DATS(8)` | Purchasing Validity End Date |
| `SupplierQuotationExternalID` |  | |  |  | `CHAR(10)` | Supplier Quotation |
| `SupplierRespSalesPersonName` |  | |  |  | `CHAR(30)` | Supplier Responsible Salesperson |
| `SupplierPhoneNumber` |  | |  |  | `CHAR(16)` | Supplier Telephone Number |
| `CorrespncInternalReference` |  | |  |  | `CHAR(12)` | Our Reference |
| `TrdgContrPurgDocExtReference` |  | |  |  | `CHAR(12)` | Purchasing Document External Reference |
| `InternalFinancialDocument` |  | |  |  | `CHAR(10)` | Financial doc. processing: Internal financial doc. number |
| `DepreciationPercentage` |  | |  |  | `DEC(5)` | Depreciation percentage for financial document processing |
| `FixedExchangeRateIsUsed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `PurchasingDocumentType` |  | |  |  | `CHAR(4)` | Order Type (Purchasing) |
| `ShippingType` |  | |  |  | `CHAR(2)` | Shipping Type |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Extended Customer Reference |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Customer Purchase Order Date |
| `TrdgContrPurgPricingProcedure` |  | |  |  | `CHAR(6)` | Purchasing Pricing Procedure |
| `DownPaymentType` |  | |  |  | `CHAR(4)` | Down Payment Indicator |
| `DownPaymentPercentageOfTotAmt` |  | |  |  | `DEC(5)` | Down Payment Percentage |
| `DownPaymentAmount` |  | |  |  | `CURR(11)` | Down Payment Amount in Document Currency |
| `DownPaymentDueDate` |  | |  |  | `DATS(8)` | Due Date for Down Payment |
| `TrdgContrPurgDocCndn` |  | |  |  | `CHAR(10)` | Number of the Document Condition |
| `SlsIncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms Part 1 Sales |
| `PurgIncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms Part 1 Purchasing |
| `TrdgContrPurgDelivAddrCat` |  | |  |  | `CHAR(1)` | Purchasing Delivery Address |
| `PaymentGuaranteeProcedure` |  | |  |  | `CHAR(6)` | Payment Guarantee Procedure |
| `TrdgContrPOByCustomer` |  | |  |  | `CHAR(20)` | Purchase Order by Customer Reference |
| `PaymentTermsName` |  | |  |  | `CHAR(80)` | Description of Terms of Payment |
| `PurgIncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms Part 2 Purchasing |
| `SlsIncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms Part 2 Sales |
| `PurchaseOrderByShipToParty` |  | |  |  | `CHAR(35)` | Ship-to Party's Customer Reference |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Created On/At |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Changed On/At |
| `TrdgContrRelStsCritlty` |  | |  |  | `INT1(3)` | Releease Status Criticality in Trading Contract |
| `CustomerName` |  | |  |  | `CHAR(80)` | Name of Customer |
| `TrdgContrPurgShipgInstrn` |  | |  |  | `CHAR(2)` | Purchasing Shipping Instructions |
| `SupplierConfirmationControlKey` |  | |  |  | `CHAR(4)` | Supplier Confirmation Control Key |
| `TrdgContrMnlPOSplit` |  | |  |  | `CHAR(10)` | Manual Purchase Order Split |
| `UnderlyingPurchaseOrderItem` |  | |  |  | `CHAR(6)` | Item Number of the Underlying Purchase Order |
| `_TrdgContrPartner` | | ✓ | | | | |
| `_TrdgContrSlsPrcgElmnt` | | ✓ | | | | |
| `_TrdgContrPurgPrcgElmnt` | | ✓ | | | | |
| `_TrdgContrItem` | | ✓ | | | | |
| `_TrdgContrReleaseStatus` | | ✓ | | | | |
| `_TrdgContrApplStatus` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ControllingAreaCurrency` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_CreditControlArea` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CustomerCreditAccount` | | ✓ | | | | |
| `_CustomerPurchaseOrderType` | | ✓ | | | | |
| `_CustomerSalesArea` | | ✓ | | | | |
| `_DeliveryBlockReason` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_HeaderBillingBlockReason` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_MatlUsageIndicator` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_PaymentGuaranteeProcedure` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurgIncotermsClassification` | | ✓ | | | | |
| `_SalesArea` | | ✓ | | | | |
| `_SalesDocumentType` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesOrderReason` | | ✓ | | | | |
| `_SalesOrderType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_ShippingCondition` | | ✓ | | | | |
| `_ShippingType` | | ✓ | | | | |
| `_SlsIncotermsClassification` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplyingPlant` | | ✓ | | | | |
| `_TaxDepartureCountry` | | ✓ | | | | |
| `_TradingContractCurrency` | | ✓ | | | | |
| `_TrdgContrExchangeRateType` | | ✓ | | | | |
| `_TrdgContrPurgExchangeRateType` | | ✓ | | | | |
| `_TrdgContrPurgIncotermsVersion` | | ✓ | | | | |
| `_TrdgContrPurgPaymentTerms` | | ✓ | | | | |
| `_TrdgContrSalesCurrency` | | ✓ | | | | |
| `_TrdgContrSalesPaymentTerms` | | ✓ | | | | |
| `_TrdgContrSlsExchangeRateType` | | ✓ | | | | |
| `_TrdgContrSlsIncotermsVersion` | | ✓ | | | | |
| `_TrdgContrSlsPricingProcedure` | | ✓ | | | | |
| `_TrdgContrAddlExpnsBlkRsn` | | ✓ | | | | |
| `_TrdgContrSuplrBillgBlkRsn` | | ✓ | | | | |
| `_VATRegistrationCountry` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrdgContrPartner` | `I_TrdgContrPartner` | [0..*] |
| `_TrdgContrSlsPrcgElmnt` | `I_TrdgContrSlsPrcgElmnt` | [0..*] |
| `_TrdgContrPurgPrcgElmnt` | `I_TrdgContrPurgPrcgElmnt` | [0..*] |
| `_TrdgContrItem` | `I_TrdgContrItem` | [0..*] |
| `_TrdgContrReleaseStatus` | `I_TrdgDocReleaseStatus` | [0..1] |
| `_TrdgContrApplStatus` | `I_TrdgDocApplicationStatus` | [0..1] |
| `_TrdgDocExtension` | `E_TradingDocument` | [0..1] |
| `_TrdgDocBusinessDataExtension` | `E_TradingDocumentBusinessData` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTR')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTR')/$value)*

```abap
@EndUserText.label: 'Trading Contract'
@ObjectModel: {
  compositionRoot: true,
  representativeKey: 'TradingContract',
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #L,
  usageType.dataClass: #TRANSACTIONAL,
  semanticKey: ['TradingContract'],
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE]
}
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser', '_LastChangedByUser' ]
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

define view entity I_TrdgContr
  as select from R_TrdgContr as TrdgContr

  association [0..*] to I_TrdgContrPartner            as _TrdgContrPartner             on  $projection.TradingContract = _TrdgContrPartner.TradingContract
  association [0..*] to I_TrdgContrSlsPrcgElmnt       as _TrdgContrSlsPrcgElmnt        on  $projection.TradingContract = _TrdgContrSlsPrcgElmnt.TradingContract
  association [0..*] to I_TrdgContrPurgPrcgElmnt      as _TrdgContrPurgPrcgElmnt       on  $projection.TradingContract = _TrdgContrPurgPrcgElmnt.TradingContract
  association [0..*] to I_TrdgContrItem               as _TrdgContrItem                on  $projection.TradingContract = _TrdgContrItem.TradingContract
  association [0..1] to I_TrdgDocReleaseStatus        as _TrdgContrReleaseStatus       on  $projection.TradingContractReleaseStatus = _TrdgContrReleaseStatus.TrdgDocReleaseStatus
  association [0..1] to I_TrdgDocApplicationStatus    as _TrdgContrApplStatus          on  $projection.TrdgContrApplicationStatus = _TrdgContrApplStatus.TrdgDocApplicationStatus
  association [0..1] to E_TradingDocument             as _TrdgDocExtension             on  $projection.TradingContract = _TrdgDocExtension.TradingDocument
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [1..1] to E_TradingDocumentBusinessData as _TrdgDocBusinessDataExtension on  $projection.TradingContract                       = _TrdgDocBusinessDataExtension.TradingDocument
                                                                                       and _TrdgDocBusinessDataExtension.TradingDocumentItem = '000000'
{

  key TradingContract,
      TradingContractType,
      TradingContractCategory,
      TrdgContrBusProcessCategory,
      TradingContractPurpose,
      TrdgContrApplicationStatus,
      SalesDocumentType,
      SalesDocumentCondition,
      CreatedByUser,
      LastChangedByUser,
      TrdgContrPersonResponsible,
      CreationDate,
      CreationTime,
      LastChangeDate,
      LastChangeTime,
      TrdgContrDate,
      SalesOrganization,
      DistributionChannel,
      OrganizationDivision,
      SalesGroup,
      SalesOffice,
      SoldToParty,
      AdditionalCustomerGroup1,
      AdditionalCustomerGroup2,
      AdditionalCustomerGroup3,
      AdditionalCustomerGroup4,
      AdditionalCustomerGroup5,
      CreditControlArea,
      SDDocumentCategory,
      SalesDocumentDate,
      SalesOrderReason,
      SDDocumentCollectiveNumber,
      CustomerPurchaseOrderType,
      CustomerPurchaseOrderSuplmnt,
      BindingPeriodValidityStartDate,
      BindingPeriodValidityEndDate,
      TrdgContrSlsValidityStartDate,
      TrdgContrSlsValidityEndDate,
      TrdgContrProdUsgeCat,
      ForeignTrade,
      TrdgContrSlsPersonName,
      PhoneNumber1,
      TrdgContrSlsNrOfFollowUps,
      DocumentReferenceID,
      TradingContractCurrency,
      @Semantics.amount.currencyCode: 'TradingContractCurrency'
      TrdgContrTotalNetAmount,
      TradingContractExchangeRate,
      TrdgContrExchangeRateType,
      TrdgContrExchangeRateDate,
      TradingContractSalesCurrency,
      TrdgContrSalesExchangeRate,
      TrdgContrSalesExchangeRateType,
      TrdgContrSalesPricingDate,
      TrdgContrSalesPricingProcedure,
      CustomerTaxClassification1,
      CustomerTaxClassification2,
      CustomerTaxClassification3,
      CustomerTaxClassification4,
      CustomerTaxClassification5,
      CustomerTaxClassification6,
      CustomerTaxClassification7,
      CustomerTaxClassification8,
      CustomerTaxClassification9,
      TaxDepartureCountry,
      VATRegistrationCountry,
      ShippingCondition,
      CompleteDeliveryIsDefined,
      DeliveryBlockReason,
      CompanyCode,
      HeaderBillingBlockReason,
      ControllingArea,
      CustomerCreditAccount,
      CustomerCreditGroup,
      CreditRepresentativeGroup,
      CustomerRiskCategory,
      ControllingAreaCurrency,
      CreditBlockReleaseDate,
      NextCreditCheckDate,
      NextShippingDate,
      @Semantics.amount.currencyCode: 'ControllingAreaCurrency'
      ReleasedCreditAmount,
      TrdgContrAddlExpnsBlkRsn,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'TrdgContrAddlExpnsBlkRsn'
      TrdgContrSuplrBillgBlkRsn,
      AccountingExchangeRate,
      TrdgContrSlsExternalReference,
      TradingContractIsComplete,
      LastCustomerContactDate,
      TrdgContrQuantityIsComplete,
      TradingContractReleaseStatus,
      TradingContractExtID,
      TrdgContrSrceDocType,
      TradingContractGoodsReceiver,
      IsEUTriangularDeal,
      @Semantics.booleanIndicator: true
      TrdgContrHdrIsExtended,
      TrdgContrSuccessorArchived,
      @Semantics.booleanIndicator: true
      TrdgContrHasCnsldtdItem,
      TrdgContrVarContrSettlmt,
      TrdgContrBatDetnProcedure,
      TrdgContrProcessingStatus,
      TrdgContrProcessingLastAction,
      TrdgContrProcgLastSequence,
      TradingProcessVariantType,
      WBSElementInternalID,
      TrdgContrPricingType,
      TrdgContrLastChangedCategory,
      Supplier,
      PurchasingOrganization,
      PurchasingGroup,
      PurchasingDocumentOrderDate,
      TrdgContrPurgReqdDeliveryDate,
      TrdgContrPurgDeliveryDateType,
      TrdgContrSlsReqdDeliveryDate,
      TrdgContrSlsDeliveryDateType,
      TrdgContrPurgCurrency,
      TrdgContrPurgExchangeRate,
      TrdgContrPurgExchangeRateType,
      TrdgContrPurgPaymentTerms,
      TrdgContrSalesPaymentTerms,
      TrdgContrSalesFixedValueDate,
      TrdgContrPurgFixedValueDate,
      TrdgContrPurgPricingDate,
      SupplyingPlant,
      TrdgContrPurgIncotermsVersion,
      TrdgContrPurgIncotermsLoc1Text,
      TrdgContrPurgIncotermsLoc2Text,
      TrdgContrSalesIncotermsVersion,
      TrdgContrSlsIncotermsLoc1Text,
      TrdgContrSlsIncotermsLoc2Text,
      QuotationSubmissionDate,
      TrdgContrSalesPaymentMethod,
      TrdgContrPurgValidityStartDate,
      TrdgContrPurgValidityEndDate,
      SupplierQuotationExternalID,
      SupplierRespSalesPersonName,
      SupplierPhoneNumber,
      CorrespncInternalReference,
      TrdgContrPurgDocExtReference,
      InternalFinancialDocument,
      DepreciationPercentage,
      FixedExchangeRateIsUsed,

      PurchasingDocumentType,
      ShippingType,
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,
      TrdgContrPurgPricingProcedure,
      DownPaymentType,
      DownPaymentPercentageOfTotAmt,
      @Semantics.amount.currencyCode: 'TrdgContrPurgCurrency'
      DownPaymentAmount,
      DownPaymentDueDate,
      TrdgContrPurgDocCndn,
      SlsIncotermsClassification,
      PurgIncotermsClassification,
      TrdgContrPurgDelivAddrCat,
      PaymentGuaranteeProcedure,
      TrdgContrPOByCustomer,
      PaymentTermsName,
      PurgIncotermsTransferLocation,
      SlsIncotermsTransferLocation,
      PurchaseOrderByShipToParty,
      CreationDateTime,
      LastChangeDateTime,
      TrdgContrRelStsCritlty,
      CustomerName,
      TrdgContrPurgShipgInstrn,
      SupplierConfirmationControlKey,
      TrdgContrMnlPOSplit,
      UnderlyingPurchaseOrderItem,


      /* Associations */
      _AdditionalCustomerGroup1,
      _AdditionalCustomerGroup2,
      _AdditionalCustomerGroup3,
      _AdditionalCustomerGroup4,
      _AdditionalCustomerGroup5,
      _CompanyCode,
      _ControllingArea,
      _ControllingAreaCurrency,
      _CreatedByUser,
      _CreditControlArea,
      _Currency,
      _CustomerCreditAccount,
      _CustomerPurchaseOrderType,
      _CustomerSalesArea,
      _DeliveryBlockReason,
      _DistributionChannel,
      _HeaderBillingBlockReason,
      _LastChangedByUser,
      _MatlUsageIndicator,
      _OrganizationDivision,
      _PaymentGuaranteeProcedure,
      _PurchasingGroup,
      _PurchasingOrganization,
      _PurgIncotermsClassification,
      _SalesArea,
      _SalesDocumentType,
      _SalesGroup,
      _SalesOffice,
      _SalesOrderReason,
      _SalesOrderType,
      _SalesOrganization,

      _SDDocumentCategory,
      _ShippingCondition,
      _ShippingType,
      _SlsIncotermsClassification,
      _SoldToParty,
      _Supplier,
      _SupplyingPlant,
      _TaxDepartureCountry,



      _TradingContractCurrency,
      _TrdgContrExchangeRateType,
      _TrdgContrItem,

      _TrdgContrPurgExchangeRateType,
      _TrdgContrPurgIncotermsVersion,
      _TrdgContrPurgPaymentTerms,
      _TrdgContrPurgPrcgElmnt,
      _TrdgContrReleaseStatus,
      _TrdgContrSalesCurrency,
      _TrdgContrSalesPaymentTerms,
      _TrdgContrSlsExchangeRateType,
      _TrdgContrSlsIncotermsVersion,
      _TrdgContrSlsPricingProcedure,
      _TrdgContrAddlExpnsBlkRsn,
//      @API.element.releaseState: #DEPRECATED
//      @API.element.successor: '_TrdgContrAddlExpnsBlkRsn'
      _TrdgContrSuplrBillgBlkRsn,
      _TrdgContrApplStatus,
      _TrdgContrSlsPrcgElmnt,
      _TrdgContrPartner,
      _VATRegistrationCountry,
      _WBSElementInternalID

}
```
