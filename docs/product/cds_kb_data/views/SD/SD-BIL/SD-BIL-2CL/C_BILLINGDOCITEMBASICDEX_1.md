---
name: C_BILLINGDOCITEMBASICDEX_1
description: "Billing DocumentITEMBASICDEX 1"
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - consumption-view
  - data-extraction
  - billing-document
  - billing
  - item-level
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# C_BILLINGDOCITEMBASICDEX_1

**Billing DocumentITEMBASICDEX 1**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocument` | ✓ | |  |  |  |  |
| `BillingDocumentItem` | ✓ | |  |  |  |  |
| `SalesDocumentItemCategory` |  | |  |  |  |  |
| `SalesDocumentItemType` |  | |  |  |  |  |
| `ReturnItemProcessingType` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `BillingDocumentCategory` |  | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | | `_BillingDocumentBasic` | `LastChangeDate` |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `BillingDocumentIsTemporary` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `PricingReferenceMaterial` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `MaterialCommissionGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `BillingDocumentIsCancelled` |  | | `_BillingDocumentBasic` | `BillingDocumentIsCancelled` |  |  |
| `CancelledBillingDocument` |  | | `_BillingDocumentBasic` | `CancelledBillingDocument` |  |  |
| `BillingDocumentItemText` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `BillingQuantity` |  | |  |  |  |  |
| `BillingQuantityUnit` |  | |  |  |  |  |
| `BillingQuantityInBaseUnit` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `MRPRequiredQuantityInBaseUnit` |  | |  |  |  |  |
| `BillingToBaseQuantityDnmntr` |  | |  |  |  |  |
| `BillingToBaseQuantityNmrtr` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `BillToPartyCountry` |  | |  |  |  |  |
| `BillToPartyRegion` |  | |  |  |  |  |
| `BillingPlanRule` |  | |  |  |  |  |
| `BillingPlan` |  | |  |  |  |  |
| `BillingPlanItem` |  | |  |  |  |  |
| `CustomerPriceGroup` |  | |  |  |  |  |
| `PriceListType` |  | | `_BillingDocumentBasic` | `PriceListType` |  |  |
| `TaxDepartureCountry` |  | | `_BillingDocumentBasic` | `TaxDepartureCountry` |  |  |
| `VATRegistration` |  | | `_BillingDocumentBasic` | `VATRegistration` |  |  |
| `VATRegistrationCountry` |  | | `_BillingDocumentBasic` | `VATRegistrationCountry` |  |  |
| `VATRegistrationOrigin` |  | | `_BillingDocumentBasic` | `VATRegistrationOrigin` |  |  |
| `CustomerTaxClassification1` |  | | `_BillingDocumentBasic` | `CustomerTaxClassification1` |  |  |
| `CustomerTaxClassification2` |  | | `_BillingDocumentBasic` | `CustomerTaxClassification2` |  |  |
| `CustomerTaxClassification3` |  | | `_BillingDocumentBasic` | `CustomerTaxClassification3` |  |  |
| `CustomerTaxClassification4` |  | | `_BillingDocumentBasic` | `CustomerTaxClassification4` |  |  |
| `CustomerTaxClassification5` |  | | `_BillingDocumentBasic` | `CustomerTaxClassification5` |  |  |
| `CustomerTaxClassification6` |  | | `_BillingDocumentBasic` | `CustomerTaxClassification6` |  |  |
| `CustomerTaxClassification7` |  | | `_BillingDocumentBasic` | `CustomerTaxClassification7` |  |  |
| `CustomerTaxClassification8` |  | | `_BillingDocumentBasic` | `CustomerTaxClassification8` |  |  |
| `CustomerTaxClassification9` |  | | `_BillingDocumentBasic` | `CustomerTaxClassification9` |  |  |
| `SDPricingProcedure` |  | | `_BillingDocumentBasic` | `SDPricingProcedure` |  |  |
| `NetAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `GrossAmount` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `PricingScaleQuantityInBaseUnit` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `CostAmount` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `StatisticalValueControl` |  | |  |  |  |  |
| `StatisticsExchangeRate` |  | |  |  |  |  |
| `StatisticsCurrency` |  | | `_BillingDocumentBasic` | `StatisticsCurrency` |  |  |
| `SalesOrganizationCurrency` |  | | `_SalesOrganization` | `SalesOrganizationCurrency` |  |  |
| `EligibleAmountForCashDiscount` |  | |  |  |  |  |
| `ContractAccount` |  | | `_BillingDocumentBasic` | `ContractAccount` |  |  |
| `CustomerPaymentTerms` |  | | `_BillingDocumentBasic` | `CustomerPaymentTerms` |  |  |
| `PaymentMethod` |  | | `_BillingDocumentBasic` | `PaymentMethod` |  |  |
| `PaymentReference` |  | | `_BillingDocumentBasic` | `PaymentReference` |  |  |
| `FixedValueDate` |  | | `_BillingDocumentBasic` | `FixedValueDate` |  |  |
| `AdditionalValueDays` |  | | `_BillingDocumentBasic` | `AdditionalValueDays` |  |  |
| `PayerParty` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `FiscalYear` |  | | `_BillingDocumentBasic` | `FiscalYear` |  |  |
| `FiscalPeriod` |  | | `_BillingDocumentBasic` | `FiscalPeriod` |  |  |
| `CustomerAccountAssignmentGroup` |  | | `_BillingDocumentBasic` | `CustomerAccountAssignmentGroup` |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `AccountingDocument` |  | | `_BillingDocumentBasic` | `AccountingDocument` |  |  |
| `ProfitabilitySegment` |  | |  | `cast(case when ProfitabilitySegment > '9999999999' then '9999999999' else lpad(ProfitabilitySegment, 10, '0') end as rkeobjnr_numc)` |  |  |
| `ProfitabilitySegment_2` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `OriginSDDocument` |  | |  |  |  |  |
| `OriginSDDocumentItem` |  | |  |  |  |  |
| `PriceDetnExchangeRateDate` |  | |  |  |  |  |
| `ExchangeRateType` |  | | `_BillingDocumentBasic` | `ExchangeRateType` |  |  |
| `FiscalYearVariant` |  | | `_CompanyCode` | `FiscalYearVariant` |  |  |
| `Currency` |  | | `_CompanyCode` | `Currency` |  |  |
| `AccountingExchangeRate` |  | | `_BillingDocumentBasic` | `AccountingExchangeRate` |  |  |
| `AccountingExchangeRateIsSet` |  | | `_BillingDocumentBasic` | `AccountingExchangeRateIsSet` |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `SalesSDDocumentCategory` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `BillingDocumentItemInPartSgmt` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `ItemIsRelevantForCredit` |  | |  |  |  |  |
| `CreditRelatedPrice` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `Country` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `SalesEmployee` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `IncotermsVersion` |  | | `_BillingDocumentBasic` | `IncotermsVersion` |  |  |
| `IncotermsClassification` |  | | `_BillingDocumentBasic` | `IncotermsClassification` |  |  |
| `IncotermsTransferLocation` |  | | `_BillingDocumentBasic` | `IncotermsTransferLocation` |  |  |
| `IncotermsLocation1` |  | | `_BillingDocumentBasic` | `IncotermsLocation1` |  |  |
| `IncotermsLocation2` |  | | `_BillingDocumentBasic` | `IncotermsLocation2` |  |  |
| `ShippingCondition` |  | | `_BillingDocumentBasic` | `ShippingCondition` |  |  |
| `OverallSDProcessStatus` |  | |  |  |  |  |
| `OverallBillingStatus` |  | |  |  |  |  |
| `AccountingPostingStatus` |  | | `_BillingDocumentBasic` | `AccountingPostingStatus` |  |  |
| `AccountingTransferStatus` |  | | `_BillingDocumentBasic` | `AccountingTransferStatus` |  |  |
| `BillingIssueType` |  | | `_BillingDocumentBasic` | `BillingIssueType` |  |  |
| `InvoiceListStatus` |  | | `_BillingDocumentBasic` | `InvoiceListStatus` |  |  |
| `OvrlItmGeneralIncompletionSts` |  | | `_BillingDocumentBasic` | `OvrlItmGeneralIncompletionSts` |  |  |
| `OverallPricingIncompletionSts` |  | | `_BillingDocumentBasic` | `OverallPricingIncompletionSts` |  |  |
| `_BillingDocumentBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExtensionItem` | `E_BillingDocumentItem` | [0..1] |
| `_ExtensionHeader` | `E_BillingDocument` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'CSDBILDOCITMBDX1'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.dataCategory: #FACT

@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [ { table: 'vbrp',
                                                                  role: #MAIN,
                                                                  viewElement: [ 'BillingDocument',
                                                                                 'BillingDocumentItem' ],
                                                                  tableElement: [ 'vbeln', 'posnr' ] },
                                                                { table: 'vbrk',
                                                                  role: #LEFT_OUTER_TO_ONE_JOIN,
                                                                  viewElement: [ 'BillingDocument' ],
                                                                  tableElement: [ 'vbeln' ] } ] }

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Data Extraction for Billing Doc Item Basic'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.representativeKey: 'BillingDocumentItem'
@ObjectModel.sapObjectNodeType.name: 'BillingDocumentItem'
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #C, sizeCategory: #XL }

@VDM.viewType: #CONSUMPTION

define view C_BillingDocItemBasicDEX_1

  as select from I_BillingDocumentItemBasic as BillingDocumentItemBasic

  // Extension
  association [0..1] to E_BillingDocumentItem as _ExtensionItem
    on  $projection.BillingDocument     = _ExtensionItem.BillingDocument
    and $projection.BillingDocumentItem = _ExtensionItem.BillingDocumentItem

  association [0..1] to E_BillingDocument     as _ExtensionHeader
    on $projection.BillingDocument = _ExtensionHeader.BillingDocument

{
      // key
      @ObjectModel.foreignKey.association: '_BillingDocumentBasic'
  key BillingDocument,

  key BillingDocumentItem,

      // Category
      SalesDocumentItemCategory,
      SalesDocumentItemType,
      ReturnItemProcessingType,   ---   <-- SHKZG !

      BillingDocumentType,
      BillingDocumentCategory,
      SDDocumentCategory,

      // Admin
      -- CreatedByUser, -- from Cube
      @Semantics.systemDate.createdAt: true
      CreationDate,

      @Semantics.systemTime.createdAt
      CreationTime, -- from Cube
      -- ReferenceLogicalSystem,

      _BillingDocumentBasic.LastChangeDate,
      BillingDocumentDate,

      BillingDocumentIsTemporary,
      // Organization
      OrganizationDivision,
      Division,
      SalesOffice,

      SalesOrganization,
      DistributionChannel,

      // Product
      Material,

      @Analytics.internalName: #LOCAL
      Product,

      OriginallyRequestedMaterial,
      InternationalArticleNumber,
      PricingReferenceMaterial, -- Cube
      Batch,
      -- ProductHierarchyNode, -- Outdated and not used in Cloud
      MaterialGroup,

      @Analytics.internalName: #LOCAL
      ProductGroup,

      AdditionalMaterialGroup1,
      AdditionalMaterialGroup2,
      AdditionalMaterialGroup3,
      AdditionalMaterialGroup4,
      AdditionalMaterialGroup5,
      -- ProductConfiguration,
      MaterialCommissionGroup,
      Plant,
      StorageLocation,
      -- ReplacementPartType,
      -- MaterialGroupHierarchy1,
      -- MaterialGroupHierarchy2,
      -- PlantRegion,
      -- PlantCounty,
      -- PlantCity,
      -- BOMExplosion,
      -- MaterialDeterminationType,

      // Billing
      -- BillingDocumentItemText,
      _BillingDocumentBasic.BillingDocumentIsCancelled, -- Cube
      _BillingDocumentBasic.CancelledBillingDocument, -- Cube
      BillingDocumentItemText, -- Cube
      ServicesRenderedDate,

      @Semantics.quantity.unitOfMeasure: 'BillingQuantityUnit'
      BillingQuantity,

      @Semantics.unitOfMeasure: true
      BillingQuantityUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      BillingQuantityInBaseUnit,

      @Semantics.unitOfMeasure: true
      BaseUnit,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      MRPRequiredQuantityInBaseUnit, -- Cube

      BillingToBaseQuantityDnmntr, -- Cube
      BillingToBaseQuantityNmrtr, -- Cube

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,

      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,

      @Semantics.unitOfMeasure: true
      ItemWeightUnit,

      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,

      @Semantics.unitOfMeasure: true
      ItemVolumeUnit,

      BillToPartyCountry,
      BillToPartyRegion,
      BillingPlanRule,
      BillingPlan,
      BillingPlanItem, -- Cube

      // Pricing
      CustomerPriceGroup, -- Cube
      _BillingDocumentBasic.PriceListType, -- cube
      _BillingDocumentBasic.TaxDepartureCountry, -- Cube
      _BillingDocumentBasic.VATRegistration, -- Cube
      _BillingDocumentBasic.VATRegistrationCountry, -- Cube
      _BillingDocumentBasic.VATRegistrationOrigin, -- Cube
      _BillingDocumentBasic.CustomerTaxClassification1, -- Cube
      _BillingDocumentBasic.CustomerTaxClassification2, -- Cube
      _BillingDocumentBasic.CustomerTaxClassification3, -- Cube
      _BillingDocumentBasic.CustomerTaxClassification4, -- Cube
      _BillingDocumentBasic.CustomerTaxClassification5, -- Cube
      _BillingDocumentBasic.CustomerTaxClassification6, -- Cube
      _BillingDocumentBasic.CustomerTaxClassification7, -- Cube
      _BillingDocumentBasic.CustomerTaxClassification8, -- Cube
      _BillingDocumentBasic.CustomerTaxClassification9, -- Cube
      _BillingDocumentBasic.SDPricingProcedure,

      @Semantics.amount.currencyCode: 'TransactionCurrency' //Natascha
      NetAmount,

      @Semantics.currencyCode: true
      TransactionCurrency,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      GrossAmount,

      PricingDate,
      PriceDetnExchangeRate,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      PricingScaleQuantityInBaseUnit,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      TaxAmount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CostAmount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal1Amount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal2Amount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal3Amount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal4Amount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal5Amount,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Subtotal6Amount,

      StatisticalValueControl,
      -- CashDiscountIsDeductible,
      -- CustomerConditionGroup1,
      -- CustomerConditionGroup2,
      -- CustomerConditionGroup3,
      -- CustomerConditionGroup4,
      -- CustomerConditionGroup5,
      -- ManualPriceChangeType,
      -- MaterialPricingGroup,
      StatisticsExchangeRate,

      -- MainItemPricingRefMaterial,
      -- MainItemMaterialPricingGroup,
      @Semantics.currencyCode: true
      _BillingDocumentBasic.StatisticsCurrency,

      @Semantics.currencyCode: true
      _SalesOrganization.SalesOrganizationCurrency,

      // Tax
      -- DepartureCountry,
      -- TaxJurisdiction,
      -- ProductTaxClassification1,
      -- ProductTaxClassification2,
      -- ProductTaxClassification3,
      -- ProductTaxClassification4,
      -- ProductTaxClassification5,
      -- ProductTaxClassification6,
      -- ProductTaxClassification7,
      -- ProductTaxClassification8,
      -- ProductTaxClassification9,
      -- ZeroVATRsn,
      -- TaxCode,
      -- TaxRateValidityStartDate,

      // Payment
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      EligibleAmountForCashDiscount, -- Cube

      _BillingDocumentBasic.ContractAccount, -- Cube
      _BillingDocumentBasic.CustomerPaymentTerms, -- Cube
      _BillingDocumentBasic.PaymentMethod, -- Cube
      _BillingDocumentBasic.PaymentReference, -- Cube
      _BillingDocumentBasic.FixedValueDate, -- Cube
      _BillingDocumentBasic.AdditionalValueDays, -- Cube
      PayerParty,

      // Accounting
      CompanyCode,
      _BillingDocumentBasic.FiscalYear, -- Cube
      _BillingDocumentBasic.FiscalPeriod, -- Cube
      _BillingDocumentBasic.CustomerAccountAssignmentGroup, -- Cube
      BusinessArea, -- Cube
      ProfitCenter, -- Cube
      OrderID, -- Cube

      -- WBSElement, --Cube
      @Analytics.internalName: #LOCAL
      BillingDocumentItemBasic.WBSElementInternalID,

      ControllingArea,
      _BillingDocumentBasic.AccountingDocument,  -- added AT:23.02.2022

      -- ProfitabilitySegment, --Cube -- BK 14.02.2021. Deprecation
      @API.element: { releaseState: #DECOMMISSIONED, successor: 'ProfitabilitySegment_2' }
      cast(case when ProfitabilitySegment > '9999999999' then '9999999999' else lpad(ProfitabilitySegment, 10, '0') end as rkeobjnr_numc)
                                                                                                                        as ProfitabilitySegment,

      @Analytics.internalName: #LOCAL
      ProfitabilitySegment_2,

      CostCenter, -- Cube
      OriginSDDocument, -- Cube
      OriginSDDocumentItem, -- Cube
      PriceDetnExchangeRateDate,

      -- MatlAccountAssignmentGroup,

      _BillingDocumentBasic.ExchangeRateType,
      _CompanyCode.FiscalYearVariant,
      _CompanyCode.Currency,
      _BillingDocumentBasic.AccountingExchangeRate,
      _BillingDocumentBasic.AccountingExchangeRateIsSet,

      // Reference
      ReferenceSDDocument,
      ReferenceSDDocumentItem,
      ReferenceSDDocumentCategory,
      SalesDocument,
      SalesDocumentItem,
      SalesSDDocumentCategory,
      HigherLevelItem, -- cube
      BillingDocumentItemInPartSgmt, -- cube
      -- ExternalReferenceDocument,
      -- ExternalReferenceDocumentItem,

      // Sales
      SalesGroup,
      AdditionalCustomerGroup1,
      AdditionalCustomerGroup2,
      AdditionalCustomerGroup3,
      AdditionalCustomerGroup4,
      AdditionalCustomerGroup5,
      SDDocumentReason, -- Cube
      --    RetailPromotion, out of scope

      ItemIsRelevantForCredit, -- Cube

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CreditRelatedPrice, -- Cube
      --    SalesDeal, -- out of scope
      -- SalesPromotion,
      -- SalesOrderSalesDistrict,
      -- SalesOrderCustomerGroup,
      -- SalesOrderCustomerPriceGroup,
      -- SalesOrderPriceListType,
      -- SalesOrderSalesOrganization,
      -- SalesOrderDistributionChannel,
      -- SalesDocIsCreatedFromReference,

      SalesDistrict,
      CustomerGroup,
      SoldToParty,
      Country,

      ShipToParty,
      BillToParty, // added as soon as the I_View contains the field
      SalesEmployee,
      ResponsibleEmployee,

      -- cast(COALESCE(ItemStandardPartner.SalesEmployee, StandardPartner.SalesEmployee) as sales_empl)     as  SalesEmployee,
      -- cast(COALESCE(ItemStandardPartner.ResponsibleEmployee, StandardPartner.ResponsibleEmployee) as resp_empl) as ResponsibleEmployee, -- Cube
      // Sales Employee ID & Responsible Employee ID
//     cast(COALESCE(ItemStandardPartner.SalesEmployeeWorkAgreement, StandardPartner.SalesEmployeeWorkAgreement) as sales_empl) as SalesEmployeeWorkAgreement, --Cube
//     cast(COALESCE(ItemStandardPartner.ResponsibleEmployeeWorkAgrmt, StandardPartner.ResponsibleEmployeeWorkAgrmt) as resp_empl) as ResponsibleEmployeeWorkAgrmt, --Cube


      // Shipping
      ShippingPoint,
      _BillingDocumentBasic.IncotermsVersion,
      _BillingDocumentBasic.IncotermsClassification,
      _BillingDocumentBasic.IncotermsTransferLocation,
      _BillingDocumentBasic.IncotermsLocation1,
      _BillingDocumentBasic.IncotermsLocation2,

      _BillingDocumentBasic.ShippingCondition,


      // Status
      BillingDocumentItemBasic.OverallSDProcessStatus,
      BillingDocumentItemBasic.OverallBillingStatus,

      _BillingDocumentBasic.AccountingPostingStatus,
      _BillingDocumentBasic.AccountingTransferStatus,
      _BillingDocumentBasic.BillingIssueType,
      _BillingDocumentBasic.InvoiceListStatus,
      _BillingDocumentBasic.OvrlItmGeneralIncompletionSts,
      _BillingDocumentBasic.OverallPricingIncompletionSts,


      // CRM
      -- ServiceDocumentType,
      -- ServiceDocument,
      -- ServiceDocumentItem,

      // Other fields
      -- HigherLevelItemUsage,

      // associations
      _BillingDocumentBasic
}

where BillingDocumentIsTemporary = ' '   -- excluding data from Temporary Billing Documents
  and (   SDDocumentCategory = 'M' // Invoice
       or SDDocumentCategory = 'N' // Invoice Canceled
       or SDDocumentCategory = 'O' // Credit Memo
       or SDDocumentCategory = 'P' // Debit Memo
       or SDDocumentCategory = 'S' // Credit Memo Canceled
       or SDDocumentCategory = 'U' // Pro Forma Invoice
       or SDDocumentCategory = '5' // Intercompany Invoice
       or SDDocumentCategory = '6' // Intercompany Credit Memo
       or SDDocumentCategory = 'DPRQ' // Down Payment Request
       or SDDocumentCategory = 'DPCC' // Down Payment Cancellation  
       or SDDocumentCategory = 'PBD' // Preliminary Billing Document
     )
```
