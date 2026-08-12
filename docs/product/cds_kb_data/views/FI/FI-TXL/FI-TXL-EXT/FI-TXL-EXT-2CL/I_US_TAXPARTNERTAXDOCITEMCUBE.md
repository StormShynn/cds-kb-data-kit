---
name: I_US_TAXPARTNERTAXDOCITEMCUBE
description: "This CDS view provides a single-source view for all external tax documents. This view shows the components of these tax documents, such as the original documents, line items, and the tax amounts at various jurisdiction levels, such as state, county, and city. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FI-TXL-EXT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_US_TAXPARTNERTAXDOCITEMCUBE')/$value
semantic_en: "This CDS view provides a single-source view for all external tax documents. This view shows the components of these tax documents, such as the original documents, line items, and the tax amounts at various jurisdiction levels, such as state, county, and city. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "US Tax Partner Tax Document Item - Cube — CDS view giao diện dựa trên I_US_TxPartTxJurisdictionLevel."
keywords:
  - "tax"
  - "partner"
  - "document"
  - "item"
  - "cube"
  - "jurisdiction"
  - "level"
  - "state"
  - "united"
  - "states"
  - "sourcing"
tags:
  - FI
  - bo:companycode
  - component:FI-TXL-EXT-2CL
  - document
  - FI-TXL
  - FI-TXL-EXT
  - FI-TXL-EXT-2CL
  - interface-view
  - lob:finance
  - bo:salesorganization
---
# I_US_TAXPARTNERTAXDOCITEMCUBE

**This CDS view provides a single-source view for all external tax documents. This view shows the components of these tax documents, such as the original documents, line items, and the tax amounts at various jurisdiction levels, such as state, county, and city. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FI-TXL-EXT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_US_TAXPARTNERTAXDOCITEMCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `US_TaxPartnerTaxDocument` | ✓ | | `_JurisdictionLevel` | `US_TaxPartnerTaxDocument` | `CHAR(12)` | External-tax Document Number |
| `US_TaxPartnerTaxDocumentItem` | ✓ | | `_JurisdictionLevel` | `US_TaxPartnerTaxDocumentItem` | `NUMC(6)` | External-tax Document Item Number |
| `TaxJurisdictionLevel` | ✓ | | `_JurisdictionLevel` | `TaxJurisdictionLevel` | `CHAR(1)` | Tax jurisdiction code level |
| `US_TaxState` |  | | `_JurisdictionLevel` | `US_TaxState` | `CHAR(2)` | External Tax State |
| `UnitedStatesTaxSourcing` |  | | `_JurisdictionLevel` | `UnitedStatesTaxSourcing` | `CHAR(1)` | Tax Sourcing |
| `TaxJurisdiction` |  | | `_JurisdictionLevel` | `TaxJurisdiction` | `CHAR(15)` | Tax Jurisdiction |
| `TaxJurisdictionText` |  | | `_JurisdictionLevel` | `TaxJurisdictionText` | `CHAR(200)` | Tax Jurisdiction Code Description |
| `Product` |  | |  | `cast( _Item.US_TaxProduct as productnumber )` | `CHAR(40)` | Product |
| `MaterialGroup` |  | | `_Item` | `MaterialGroup` | `CHAR(9)` | Material Group |
| `TaxCalculationProcedure` |  | | `_Document` | `TaxCalculationProcedure` | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `TaxCode` |  | | `_Item` | `TaxCode` | `CHAR(2)` | Tax on Sales/Purchases Code |
| `PurchasingDocument` |  | | `_Item` | `PurchasingDocument` | `CHAR(10)` | Purchasing Document Number |
| `SDDocument` |  | | `_Item` | `SDDocument` | `CHAR(10)` | Sales and Distribution Document Number |
| `UnitedStatesTaxCategory` |  | | `_Item` | `UnitedStatesTaxCategory` | `CHAR(1)` | Tax Category for US Taxes |
| `CompanyCode` |  | | `_Document` | `CompanyCode` | `CHAR(4)` | Company Code |
| `AccountingDocument` |  | | `_Document` | `AccountingDocument` | `CHAR(10)` | Journal Entry |
| `FiscalYear` |  | | `_Document` | `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `GLAccount` |  | | `_JurisdictionLevel` | `GLAccount` | `CHAR(10)` | G/L Account |
| `TaxBaseAmountInTransCrcy` |  | | `_JurisdictionLevel` | `TaxBaseAmountInTransCrcy` | `CURR(23)` | Tax Base Amount in Transaction Currency |
| `TaxAmountInTransCrcy` |  | | `_JurisdictionLevel` | `TaxAmountInTransCrcy` | `CURR(23)` | Tax Amount in Transaction Currency |
| `TaxExemptionAmount` |  | | `_JurisdictionLevel` | `TaxExemptionAmount` | `CURR(23)` | Tax-Exempt Revaluation Amount |
| `TransactionCurrency` |  | | `_Document` | `TransactionCurrency` | `CUKY(5)` | Transaction Currency |
| `TaxBaseAmountInCoCodeCrcy` |  | | `_JurisdictionLevel` | `TaxBaseAmountInCoCodeCrcy` | `CURR(23)` | Tax Base Amount in Company Code Currency |
| `TaxAmountInCoCodeCrcy` |  | | `_JurisdictionLevel` | `TaxAmountInCoCodeCrcy` | `CURR(23)` | Signed Tax Amount in Company Code Currency |
| `CompanyCodeCurrency` |  | | `_Document` | `CompanyCodeCurrency` | `CUKY(5)` | Company Code Currency |
| `PostingDate` |  | | `_Item` | `PostingDate` | `DATS(8)` | Posting Date |
| `DocumentDate` |  | | `_Item` | `DocumentDate` | `DATS(8)` | Journal Entry Date |
| `ServicesRenderedDate` |  | | `_Item` | `ServicesRenderedDate` | `DATS(8)` | Date on which services are rendered |
| `US_TaxPartnerReceivedTaxDate` |  | | `_Item` | `US_TaxPartnerReceivedTaxDate` | `DATS(8)` | Tax Date as Sent to Partner |
| `TaxCalculationDate` |  | | `_Item` | `TaxCalculationDate` | `DATS(8)` | The date used for external tax calculation |
| `US_TaxFreeDefinedValue1` |  | | `_Item` | `US_TaxFreeDefinedValue1` | `CHAR(100)` | Extension Field 001 |
| `US_TaxFreeDefinedValue2` |  | | `_Item` | `US_TaxFreeDefinedValue2` | `CHAR(100)` | Extension Field 002 |
| `US_TaxFreeDefinedValue3` |  | | `_Item` | `US_TaxFreeDefinedValue3` | `CHAR(100)` | Extension Field 003 |
| `US_TaxFreeDefinedValue4` |  | | `_Item` | `US_TaxFreeDefinedValue4` | `CHAR(100)` | Extension Field 004 |
| `US_TaxFreeDefinedValue5` |  | | `_Item` | `US_TaxFreeDefinedValue5` | `CHAR(100)` | Extension Field 005 |
| `US_TaxFreeDefinedValue6` |  | | `_Item` | `US_TaxFreeDefinedValue6` | `CHAR(100)` | Extension Field 006 |
| `US_TaxFreeDefinedValue7` |  | | `_Item` | `US_TaxFreeDefinedValue7` | `CHAR(100)` | Extension Field 007 |
| `US_TaxFreeDefinedValue8` |  | | `_Item` | `US_TaxFreeDefinedValue8` | `CHAR(100)` | Extension Field 008 |
| `US_TaxFreeDefinedValue9` |  | | `_Item` | `US_TaxFreeDefinedValue9` | `CHAR(100)` | Extension Field 009 |
| `US_TaxFreeDefinedValue10` |  | | `_Item` | `US_TaxFreeDefinedValue10` | `CHAR(100)` | Extension Field 010 |
| `US_TaxFreeDefinedValue11` |  | | `_Item` | `US_TaxFreeDefinedValue11` | `CHAR(100)` | Extension Field 011 |
| `US_TaxFreeDefinedValue12` |  | | `_Item` | `US_TaxFreeDefinedValue12` | `CHAR(100)` | Extension Field 012 |
| `US_TaxFreeDefinedValue13` |  | | `_Item` | `US_TaxFreeDefinedValue13` | `CHAR(100)` | Extension Field 013 |
| `US_TaxFreeDefinedValue14` |  | | `_Item` | `US_TaxFreeDefinedValue14` | `CHAR(100)` | Extension Field 014 |
| `US_TaxFreeDefinedValue15` |  | | `_Item` | `US_TaxFreeDefinedValue15` | `CHAR(100)` | Extension Field 015 |
| `US_TaxFreeDefinedValue16` |  | | `_Item` | `US_TaxFreeDefinedValue16` | `CHAR(100)` | Extension Field 016 |
| `US_TaxFreeDefinedValue17` |  | | `_Item` | `US_TaxFreeDefinedValue17` | `CHAR(100)` | Extension Field 017 |
| `US_TaxFreeDefinedValue18` |  | | `_Item` | `US_TaxFreeDefinedValue18` | `CHAR(100)` | Extension Field 018 |
| `US_TaxFreeDefinedValue19` |  | | `_Item` | `US_TaxFreeDefinedValue19` | `CHAR(100)` | Extension Field 019 |
| `US_TaxFreeDefinedValue20` |  | | `_Item` | `US_TaxFreeDefinedValue20` | `CHAR(100)` | Extension Field 020 |
| `US_TaxFreeDefinedValue21` |  | | `_Item` | `US_TaxFreeDefinedValue21` | `CHAR(100)` | Extension Field 021 |
| `US_TaxFreeDefinedValue22` |  | | `_Item` | `US_TaxFreeDefinedValue22` | `CHAR(100)` | Extension Field 022 |
| `US_TaxFreeDefinedValue23` |  | | `_Item` | `US_TaxFreeDefinedValue23` | `CHAR(100)` | Extension Field 023 |
| `US_TaxFreeDefinedValue24` |  | | `_Item` | `US_TaxFreeDefinedValue24` | `CHAR(100)` | Extension Field 024 |
| `US_TaxFreeDefinedValue25` |  | | `_Item` | `US_TaxFreeDefinedValue25` | `CHAR(100)` | Extension Field 025 |
| `US_TaxFreeDefinedValue26` |  | | `_Item` | `US_TaxFreeDefinedValue26` | `CHAR(100)` | Extension Field 026 |
| `US_TaxFreeDefinedValue27` |  | | `_Item` | `US_TaxFreeDefinedValue27` | `CHAR(100)` | Extension Field 027 |
| `US_TaxFreeDefinedValue28` |  | | `_Item` | `US_TaxFreeDefinedValue28` | `CHAR(100)` | Extension Field 028 |
| `US_TaxFreeDefinedValue29` |  | | `_Item` | `US_TaxFreeDefinedValue29` | `CHAR(100)` | Extension Field 029 |
| `US_TaxFreeDefinedValue30` |  | | `_Item` | `US_TaxFreeDefinedValue30` | `CHAR(100)` | Extension Field 030 |
| `US_TaxFreeDefinedValue31` |  | | `_Item` | `US_TaxFreeDefinedValue31` | `CHAR(100)` | Extension Field 031 |
| `US_TaxFreeDefinedValue32` |  | | `_Item` | `US_TaxFreeDefinedValue32` | `CHAR(100)` | Extension Field 032 |
| `US_TaxFreeDefinedValue33` |  | | `_Item` | `US_TaxFreeDefinedValue33` | `CHAR(100)` | Extension Field 033 |
| `US_TaxFreeDefinedValue34` |  | | `_Item` | `US_TaxFreeDefinedValue34` | `CHAR(100)` | Extension Field 034 |
| `US_TaxFreeDefinedValue35` |  | | `_Item` | `US_TaxFreeDefinedValue35` | `CHAR(100)` | Extension Field 035 |
| `US_TaxFreeDefinedValue36` |  | | `_Item` | `US_TaxFreeDefinedValue36` | `CHAR(100)` | Extension Field 036 |
| `US_TaxFreeDefinedValue37` |  | | `_Item` | `US_TaxFreeDefinedValue37` | `CHAR(100)` | Extension Field 037 |
| `US_TaxFreeDefinedValue38` |  | | `_Item` | `US_TaxFreeDefinedValue38` | `CHAR(100)` | Extension Field 038 |
| `US_TaxFreeDefinedValue39` |  | | `_Item` | `US_TaxFreeDefinedValue39` | `CHAR(100)` | Extension Field 039 |
| `US_TaxFreeDefinedValue40` |  | | `_Item` | `US_TaxFreeDefinedValue40` | `CHAR(100)` | Extension Field 040 |
| `US_TaxFreeDefinedValue41` |  | | `_Item` | `US_TaxFreeDefinedValue41` | `CHAR(100)` | Extension Field 041 |
| `US_TaxFreeDefinedValue42` |  | | `_Item` | `US_TaxFreeDefinedValue42` | `CHAR(100)` | Extension Field 042 |
| `US_TaxFreeDefinedValue43` |  | | `_Item` | `US_TaxFreeDefinedValue43` | `CHAR(100)` | Extension Field 043 |
| `US_TaxFreeDefinedValue44` |  | | `_Item` | `US_TaxFreeDefinedValue44` | `CHAR(100)` | Extension Field 044 |
| `US_TaxFreeDefinedValue45` |  | | `_Item` | `US_TaxFreeDefinedValue45` | `CHAR(100)` | Extension Field 045 |
| `US_TaxFreeDefinedValue46` |  | | `_Item` | `US_TaxFreeDefinedValue46` | `CHAR(100)` | Extension Field 046 |
| `US_TaxFreeDefinedValue47` |  | | `_Item` | `US_TaxFreeDefinedValue47` | `CHAR(100)` | Extension Field 047 |
| `US_TaxFreeDefinedValue48` |  | | `_Item` | `US_TaxFreeDefinedValue48` | `CHAR(100)` | Extension Field 048 |
| `US_TaxFreeDefinedValue49` |  | | `_Item` | `US_TaxFreeDefinedValue49` | `CHAR(100)` | Extension Field 049 |
| `US_TaxFreeDefinedValue50` |  | | `_Item` | `US_TaxFreeDefinedValue50` | `CHAR(100)` | Extension Field 050 |
| `_Document` | | ✓ | | | | |
| `_Item` | | ✓ | | | | |
| `_US_TaxState` | | ✓ | | | | |
| `_TaxSourcing` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_TaxCalculationProcedure` | | ✓ | | | | |
| `_TaxCode` | | ✓ | | | | |
| `_PurchasingDocument` | | ✓ | | | | |
| `_BillingDocument` | | ✓ | | | | |
| `_UnitedStatesTaxCategory` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_GLAccount` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Document` | `I_US_TaxPartnerTaxDocument` | [0..1] |
| `_Item` | `I_US_TaxPartnerTaxDocumentItem` | [0..1] |
| `_US_TaxState` | `I_US_TaxState` | [0..1] |
| `_TaxSourcing` | `I_UnitedStatesTaxSourcing` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_MaterialGroup` | `I_ProductGroup_2` | [0..1] |
| `_TaxCalculationProcedure` | `I_TaxCalculationProcedure` | [0..1] |
| `_TaxCode` | `I_TaxCode` | [0..1] |
| `_PurchasingDocument` | `I_PurchaseOrderAPI01` | [0..1] |
| `_BillingDocument` | `I_BillingDocument` | [0..1] |
| `_UnitedStatesTaxCategory` | `I_UnitedStatesTaxCategory` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_FiscalYear` | `I_FiscalYearForCompanyCode` | [0..1] |
| `_JournalEntry` | `I_JournalEntry` | [0..1] |
| `_GLAccount` | `I_GLAccount` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_US_TAXPARTNERTAXDOCITEMCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_US_TAXPARTNERTAXDOCITEMCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IUSTXPTDITEMCUBE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'US Tax Partner Tax Document Item - Cube'

@VDM.viewType: #COMPOSITE
@Analytics.dataCategory: #CUBE
@Analytics.internalName: #LOCAL

@ObjectModel.usageType: {
  dataClass: #MIXED,
  sizeCategory: #XL,
  serviceQuality: #D
}

@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

define view I_US_TaxPartnerTaxDocItemCube
  as select from I_US_TxPartTxJurisdictionLevel as _JurisdictionLevel
  association [0..1] to I_US_TaxPartnerTaxDocument     as _Document                on  $projection.US_TaxPartnerTaxDocument = _Document.US_TaxPartnerTaxDocument
  association [0..1] to I_US_TaxPartnerTaxDocumentItem as _Item                    on  $projection.US_TaxPartnerTaxDocument     = _Item.US_TaxPartnerTaxDocument
                                                                                   and $projection.US_TaxPartnerTaxDocumentItem = _Item.US_TaxPartnerTaxDocumentItem
  association [0..1] to I_US_TaxState                  as _US_TaxState             on  $projection.US_TaxState = _US_TaxState.US_TaxState
  association [0..1] to I_UnitedStatesTaxSourcing      as _TaxSourcing             on  $projection.UnitedStatesTaxSourcing = _TaxSourcing.UnitedStatesTaxSourcing
  association [0..1] to I_Product                      as _Product                 on  $projection.Product = _Product.Product
  //association [0..1] to I_MaterialGroup                as _MaterialGroup           on  $projection.materialgroup = _MaterialGroup.MaterialGroup
  association [0..1] to I_ProductGroup_2               as _MaterialGroup           on  $projection.materialgroup = _MaterialGroup.ProductGroup
  association [0..1] to I_TaxCalculationProcedure      as _TaxCalculationProcedure on  $projection.taxcalculationprocedure = _TaxCalculationProcedure.TaxCalculationProcedure
  association [0..1] to I_TaxCode                      as _TaxCode                 on  $projection.taxcalculationprocedure = _TaxCode.TaxCalculationProcedure
                                                                                   and $projection.taxcode                 = _TaxCode.TaxCode
  //association [0..1] to I_PurchasingDocument           as _PurchasingDocument      on  $projection.purchasingdocument = _PurchasingDocument.PurchasingDocument
  association [0..1] to I_PurchaseOrderAPI01           as _PurchasingDocument      on  $projection.purchasingdocument = _PurchasingDocument.PurchaseOrder
  association [0..1] to I_BillingDocument              as _BillingDocument         on  $projection.sddocument = _BillingDocument.BillingDocument
  association [0..1] to I_UnitedStatesTaxCategory      as _UnitedStatesTaxCategory on  $projection.unitedstatestaxcategory = _UnitedStatesTaxCategory.UnitedStatesTaxCategory
  association [0..1] to I_CompanyCode                  as _CompanyCode             on  $projection.companycode = _CompanyCode.CompanyCode
  association [0..1] to I_FiscalYearForCompanyCode     as _FiscalYear              on  $projection.fiscalyear  = _FiscalYear.FiscalYear
                                                                                   and $projection.companycode = _FiscalYear.CompanyCode
  association [0..1] to I_JournalEntry                 as _JournalEntry            on  $projection.companycode        = _JournalEntry.CompanyCode
                                                                                   and $projection.fiscalyear         = _JournalEntry.FiscalYear
                                                                                   and $projection.accountingdocument = _JournalEntry.AccountingDocument
  association [0..1] to I_GLAccount                    as _GLAccount               on  $projection.GLAccount   = _GLAccount.GLAccount
                                                                                   and $projection.companycode = _GLAccount.CompanyCode
  association [0..1] to I_Currency                     as _TransactionCurrency     on  $projection.transactioncurrency = _TransactionCurrency.Currency
  association [0..1] to I_Currency                     as _CompanyCodeCurrency     on  $projection.companycodecurrency = _CompanyCodeCurrency.Currency

{
      @ObjectModel.foreignKey.association: '_Document'
  key _JurisdictionLevel.US_TaxPartnerTaxDocument,
      @ObjectModel.foreignKey.association: '_Item'
  key _JurisdictionLevel.US_TaxPartnerTaxDocumentItem,
  key _JurisdictionLevel.TaxJurisdictionLevel,

      @ObjectModel.foreignKey.association: '_US_TaxState'
      _JurisdictionLevel.US_TaxState,

      @ObjectModel.foreignKey.association: '_TaxSourcing'
      _JurisdictionLevel.UnitedStatesTaxSourcing,
      _JurisdictionLevel.TaxJurisdiction,
      _JurisdictionLevel.TaxJurisdictionText,

      //@ObjectModel.foreignKey.association: '_Product'
      cast( _Item.US_TaxProduct as productnumber ) as Product,

      @ObjectModel.foreignKey.association: '_MaterialGroup'
      _Item.MaterialGroup,

      @ObjectModel.foreignKey.association: '_TaxCalculationProcedure'
      _Document.TaxCalculationProcedure,

      @ObjectModel.foreignKey.association: '_TaxCode'
      _Item.TaxCode,

      @ObjectModel.foreignKey.association: '_PurchasingDocument'
      _Item.PurchasingDocument,

      @ObjectModel.foreignKey.association: '_BillingDocument'
      _Item.SDDocument,

      @ObjectModel.foreignKey.association: '_UnitedStatesTaxCategory'
      _Item.UnitedStatesTaxCategory,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      _Document.CompanyCode,

      @ObjectModel.foreignKey.association: '_JournalEntry'
      _Document.AccountingDocument,

      @ObjectModel.foreignKey.association: '_FiscalYear'
      _Document.FiscalYear,

      @ObjectModel.foreignKey.association: '_GLAccount'
      _JurisdictionLevel.GLAccount,

      @DefaultAggregation: #MAX
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _JurisdictionLevel.TaxBaseAmountInTransCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _JurisdictionLevel.TaxAmountInTransCrcy,

      @DefaultAggregation: #MAX
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _JurisdictionLevel.TaxExemptionAmount,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      _Document.TransactionCurrency,

      @DefaultAggregation: #MAX
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      _JurisdictionLevel.TaxBaseAmountInCoCodeCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      _JurisdictionLevel.TaxAmountInCoCodeCrcy,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      _Document.CompanyCodeCurrency,

      @Semantics.businessDate.at: true
      _Item.PostingDate,
      @Semantics.businessDate.at: true
      _Item.DocumentDate,
      @Semantics.businessDate.at: true
      _Item.ServicesRenderedDate,
      @Semantics.businessDate.at: true
      _Item.US_TaxPartnerReceivedTaxDate,
      @Semantics.businessDate.at: true
      _Item.TaxCalculationDate,

      // Free defined value fields
      _Item.US_TaxFreeDefinedValue1,
      _Item.US_TaxFreeDefinedValue2,
      _Item.US_TaxFreeDefinedValue3,
      _Item.US_TaxFreeDefinedValue4,
      _Item.US_TaxFreeDefinedValue5,
      _Item.US_TaxFreeDefinedValue6,
      _Item.US_TaxFreeDefinedValue7,
      _Item.US_TaxFreeDefinedValue8,
      _Item.US_TaxFreeDefinedValue9,
      _Item.US_TaxFreeDefinedValue10,
      _Item.US_TaxFreeDefinedValue11,
      _Item.US_TaxFreeDefinedValue12,
      _Item.US_TaxFreeDefinedValue13,
      _Item.US_TaxFreeDefinedValue14,
      _Item.US_TaxFreeDefinedValue15,
      _Item.US_TaxFreeDefinedValue16,
      _Item.US_TaxFreeDefinedValue17,
      _Item.US_TaxFreeDefinedValue18,
      _Item.US_TaxFreeDefinedValue19,
      _Item.US_TaxFreeDefinedValue20,
      _Item.US_TaxFreeDefinedValue21,
      _Item.US_TaxFreeDefinedValue22,
      _Item.US_TaxFreeDefinedValue23,
      _Item.US_TaxFreeDefinedValue24,
      _Item.US_TaxFreeDefinedValue25,
      _Item.US_TaxFreeDefinedValue26,
      _Item.US_TaxFreeDefinedValue27,
      _Item.US_TaxFreeDefinedValue28,
      _Item.US_TaxFreeDefinedValue29,
      _Item.US_TaxFreeDefinedValue30,
      _Item.US_TaxFreeDefinedValue31,
      _Item.US_TaxFreeDefinedValue32,
      _Item.US_TaxFreeDefinedValue33,
      _Item.US_TaxFreeDefinedValue34,
      _Item.US_TaxFreeDefinedValue35,
      _Item.US_TaxFreeDefinedValue36,
      _Item.US_TaxFreeDefinedValue37,
      _Item.US_TaxFreeDefinedValue38,
      _Item.US_TaxFreeDefinedValue39,
      _Item.US_TaxFreeDefinedValue40,
      _Item.US_TaxFreeDefinedValue41,
      _Item.US_TaxFreeDefinedValue42,
      _Item.US_TaxFreeDefinedValue43,
      _Item.US_TaxFreeDefinedValue44,
      _Item.US_TaxFreeDefinedValue45,
      _Item.US_TaxFreeDefinedValue46,
      _Item.US_TaxFreeDefinedValue47,
      _Item.US_TaxFreeDefinedValue48,
      _Item.US_TaxFreeDefinedValue49,
      _Item.US_TaxFreeDefinedValue50,

      // associations
      _Document,
      _Item,
      _US_TaxState,
      _TaxSourcing,
      _Product,
      _MaterialGroup,
      _TaxCalculationProcedure,
      _TaxCode,
      _PurchasingDocument,
      _BillingDocument,
      _UnitedStatesTaxCategory,
      _CompanyCode,
      _FiscalYear,
      _JournalEntry,
      _GLAccount,
      _TransactionCurrency,
      _CompanyCodeCurrency
}
```
