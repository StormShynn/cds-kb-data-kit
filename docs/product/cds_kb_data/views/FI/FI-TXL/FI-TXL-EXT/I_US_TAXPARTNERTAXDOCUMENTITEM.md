---
name: I_US_TAXPARTNERTAXDOCUMENTITEM
description: "US Taxpartnertaxdocumentitem"
app_component: FI-TXL-EXT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-TXL
  - FI-TXL-EXT
  - interface-view
  - tax
  - document
  - item-level
  - partner
  - component:FI-TXL-EXT
  - lob:Finance
---
# I_US_TAXPARTNERTAXDOCUMENTITEM

**US Taxpartnertaxdocumentitem**

| Property | Value |
|---|---|
| App Component | `FI-TXL-EXT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `US_TaxPartnerTaxDocument` | ✓ | |  | `docnr` |  |  |
| `US_TaxPartnerTaxDocumentItem` | ✓ | |  | `itemnr` |  |  |
| `CompanyCode` |  | | `_TaxDoc` | `CompanyCode` |  |  |
| `ShipToParty` |  | |  | `cast(etxdci.shipto as kunwe preserving type)` |  |  |
| `SoldToParty` |  | |  | `cast(etxdci.soldto as kunag preserving type)` |  |  |
| `MaterialGroup` |  | |  | `cast(etxdci.matkl as matkl preserving type)` |  |  |
| `TaxCalculationDate` |  | |  | `cast(case etxdci.tax_date_return when '' then '00000000' else etxdci.tax_date_return end as fis_externaltaxcalculationdate)` |  |  |
| `PostingDate` |  | |  | `cast(etxdci.post_date as fis_budat preserving type)` |  |  |
| `DocumentDate` |  | |  | `cast(etxdci.doc_date as fis_bldat preserving type)` |  |  |
| `ServicesRenderedDate` |  | |  | `cast(etxdci.sr_date as fbuda preserving type)` |  |  |
| `TaxCode` |  | |  | `cast(etxdci.mwskz as fis_mwskz preserving type)` |  |  |
| `CostCenter` |  | |  | `cast(etxdci.kostl as fis_kostl preserving type)` |  |  |
| `US_TaxState` |  | |  | `cast(etxdci.tax_state as fis_externaltaxstate preserving type)` |  |  |
| `TaxBaseAmountInTransCrcy` |  | |  | `cast(etxdci.amount as fwbas_shl preserving type)` |  |  |
| `TransactionCurrency` |  | | `_TaxDoc` | `TransactionCurrency` |  |  |
| `CompanyCodeCurrency` |  | | `_TaxDoc` | `CompanyCodeCurrency` |  |  |
| `DebitCreditCode` |  | |  | `cast(case etxdci.credit_ind when '0' then 'H' else 'S' end as gl_shkzg preserving type)` |  |  |
| `ShipFromAddressTaxJurisdiction` |  | |  | `cast(etxdci.txjcd_sf as txjcd_sf preserving type)` |  |  |
| `ShipToAddressTaxJurisdiction` |  | |  | `cast(etxdci.txjcd_st as txjcd_st preserving type)` |  |  |
| `PointOfOrderAcceptanceTxJx` |  | |  | `cast(etxdci.txjcd_poa as txjcd_poa preserving type)` |  |  |
| `PointOfOrderOriginTxJx` |  | |  | `cast(etxdci.txjcd_poo as txjcd_poo preserving type)` |  |  |
| `BillToParty` |  | |  | `cast(etxdci.billto as kunre preserving type)` |  |  |
| `TaxDepartureCountry` |  | |  | `country` |  |  |
| `PurchasingDocument` |  | |  | `ebeln` |  |  |
| `SDDocumentCategory` |  | |  | `vbtyp` |  |  |
| `SDDocument` |  | |  | `vbeln` |  |  |
| `US_TaxPartnerReceivedTaxDate` |  | |  | `cast(etxdci.tax_date as fis_etxtaxpartnerreceiveddate preserving type)` |  |  |
| `US_TaxProduct` |  | |  | `matnr` |  |  |
| `QuantityInBaseUnit` |  | |  | `cast( etxdci.quantity as menge_d preserving type )` |  |  |
| `SalesMeasureUnit` |  | |  | `cast( etxdci.unit as vrkme preserving type )` |  |  |
| `MainItemPricingRefMaterial` |  | |  | `upmat` |  |  |
| `TaxType` |  | |  | `cast( etxdci.apar_ind as mwart preserving type )` |  |  |
| `UnitedStatesTaxCategory` |  | |  | `cast( etxdci.tax_type as txind_007a preserving type )` |  |  |
| `FreightAmount` |  | |  | `cast(etxdci.freight_am as fis_etxdc_etdfrtamount preserving type)` |  |  |
| `WBSElementInternalID` |  | |  | `cast(etxdci.wbs_element as ps_s4_pspnr preserving type)` |  |  |
| `Supplier` |  | |  | `cast(etxdci.supplier as md_supplier preserving type)` |  |  |
| `TaxBaseAmountInCoCodeCrcy` |  | |  | `cast(etxdci.gl_taxbas as hwbas_shl preserving type)` |  |  |
| `US_TaxFreeDefinedValue1` |  | |  | `cast(etxdci.extension_field001 as fis_etxdc_extension_field001 preserving type)` |  |  |
| `US_TaxFreeDefinedValue2` |  | |  | `cast(etxdci.extension_field002 as fis_etxdc_extension_field002 preserving type)` |  |  |
| `US_TaxFreeDefinedValue3` |  | |  | `cast(etxdci.extension_field003 as fis_etxdc_extension_field003 preserving type)` |  |  |
| `US_TaxFreeDefinedValue4` |  | |  | `cast(etxdci.extension_field004 as fis_etxdc_extension_field004 preserving type)` |  |  |
| `US_TaxFreeDefinedValue5` |  | |  | `cast(etxdci.extension_field005 as fis_etxdc_extension_field005 preserving type)` |  |  |
| `US_TaxFreeDefinedValue6` |  | |  | `cast(etxdci.extension_field006 as fis_etxdc_extension_field006 preserving type)` |  |  |
| `US_TaxFreeDefinedValue7` |  | |  | `cast(etxdci.extension_field007 as fis_etxdc_extension_field007 preserving type)` |  |  |
| `US_TaxFreeDefinedValue8` |  | |  | `cast(etxdci.extension_field008 as fis_etxdc_extension_field008 preserving type)` |  |  |
| `US_TaxFreeDefinedValue9` |  | |  | `cast(etxdci.extension_field009 as fis_etxdc_extension_field009 preserving type)` |  |  |
| `US_TaxFreeDefinedValue10` |  | |  | `cast(etxdci.extension_field010 as fis_etxdc_extension_field010 preserving type)` |  |  |
| `US_TaxFreeDefinedValue11` |  | |  | `cast(etxdci.extension_field011 as fis_etxdc_extension_field011 preserving type)` |  |  |
| `US_TaxFreeDefinedValue12` |  | |  | `cast(etxdci.extension_field012 as fis_etxdc_extension_field012 preserving type)` |  |  |
| `US_TaxFreeDefinedValue13` |  | |  | `cast(etxdci.extension_field013 as fis_etxdc_extension_field013 preserving type)` |  |  |
| `US_TaxFreeDefinedValue14` |  | |  | `cast(etxdci.extension_field014 as fis_etxdc_extension_field014 preserving type)` |  |  |
| `US_TaxFreeDefinedValue15` |  | |  | `cast(etxdci.extension_field015 as fis_etxdc_extension_field015 preserving type)` |  |  |
| `US_TaxFreeDefinedValue16` |  | |  | `cast(etxdci.extension_field016 as fis_etxdc_extension_field016 preserving type)` |  |  |
| `US_TaxFreeDefinedValue17` |  | |  | `cast(etxdci.extension_field017 as fis_etxdc_extension_field017 preserving type)` |  |  |
| `US_TaxFreeDefinedValue18` |  | |  | `cast(etxdci.extension_field018 as fis_etxdc_extension_field018 preserving type)` |  |  |
| `US_TaxFreeDefinedValue19` |  | |  | `cast(etxdci.extension_field019 as fis_etxdc_extension_field019 preserving type)` |  |  |
| `US_TaxFreeDefinedValue20` |  | |  | `cast(etxdci.extension_field020 as fis_etxdc_extension_field020 preserving type)` |  |  |
| `US_TaxFreeDefinedValue21` |  | |  | `cast(etxdci.extension_field021 as fis_etxdc_extension_field021 preserving type)` |  |  |
| `US_TaxFreeDefinedValue22` |  | |  | `cast(etxdci.extension_field022 as fis_etxdc_extension_field022 preserving type)` |  |  |
| `US_TaxFreeDefinedValue23` |  | |  | `cast(etxdci.extension_field023 as fis_etxdc_extension_field023 preserving type)` |  |  |
| `US_TaxFreeDefinedValue24` |  | |  | `cast(etxdci.extension_field024 as fis_etxdc_extension_field024 preserving type)` |  |  |
| `US_TaxFreeDefinedValue25` |  | |  | `cast(etxdci.extension_field025 as fis_etxdc_extension_field025 preserving type)` |  |  |
| `US_TaxFreeDefinedValue26` |  | |  | `cast(etxdci.extension_field026 as fis_etxdc_extension_field026 preserving type)` |  |  |
| `US_TaxFreeDefinedValue27` |  | |  | `cast(etxdci.extension_field027 as fis_etxdc_extension_field027 preserving type)` |  |  |
| `US_TaxFreeDefinedValue28` |  | |  | `cast(etxdci.extension_field028 as fis_etxdc_extension_field028 preserving type)` |  |  |
| `US_TaxFreeDefinedValue29` |  | |  | `cast(etxdci.extension_field029 as fis_etxdc_extension_field029 preserving type)` |  |  |
| `US_TaxFreeDefinedValue30` |  | |  | `cast(etxdci.extension_field030 as fis_etxdc_extension_field030 preserving type)` |  |  |
| `US_TaxFreeDefinedValue31` |  | |  | `cast(etxdci.extension_field031 as fis_etxdc_extension_field031 preserving type)` |  |  |
| `US_TaxFreeDefinedValue32` |  | |  | `cast(etxdci.extension_field032 as fis_etxdc_extension_field032 preserving type)` |  |  |
| `US_TaxFreeDefinedValue33` |  | |  | `cast(etxdci.extension_field033 as fis_etxdc_extension_field033 preserving type)` |  |  |
| `US_TaxFreeDefinedValue34` |  | |  | `cast(etxdci.extension_field034 as fis_etxdc_extension_field034 preserving type)` |  |  |
| `US_TaxFreeDefinedValue35` |  | |  | `cast(etxdci.extension_field035 as fis_etxdc_extension_field035 preserving type)` |  |  |
| `US_TaxFreeDefinedValue36` |  | |  | `cast(etxdci.extension_field036 as fis_etxdc_extension_field036 preserving type)` |  |  |
| `US_TaxFreeDefinedValue37` |  | |  | `cast(etxdci.extension_field037 as fis_etxdc_extension_field037 preserving type)` |  |  |
| `US_TaxFreeDefinedValue38` |  | |  | `cast(etxdci.extension_field038 as fis_etxdc_extension_field038 preserving type)` |  |  |
| `US_TaxFreeDefinedValue39` |  | |  | `cast(etxdci.extension_field039 as fis_etxdc_extension_field039 preserving type)` |  |  |
| `US_TaxFreeDefinedValue40` |  | |  | `cast(etxdci.extension_field040 as fis_etxdc_extension_field040 preserving type)` |  |  |
| `US_TaxFreeDefinedValue41` |  | |  | `cast(etxdci.extension_field041 as fis_etxdc_extension_field041 preserving type)` |  |  |
| `US_TaxFreeDefinedValue42` |  | |  | `cast(etxdci.extension_field042 as fis_etxdc_extension_field042 preserving type)` |  |  |
| `US_TaxFreeDefinedValue43` |  | |  | `cast(etxdci.extension_field043 as fis_etxdc_extension_field043 preserving type)` |  |  |
| `US_TaxFreeDefinedValue44` |  | |  | `cast(etxdci.extension_field044 as fis_etxdc_extension_field044 preserving type)` |  |  |
| `US_TaxFreeDefinedValue45` |  | |  | `cast(etxdci.extension_field045 as fis_etxdc_extension_field045 preserving type)` |  |  |
| `US_TaxFreeDefinedValue46` |  | |  | `cast(etxdci.extension_field046 as fis_etxdc_extension_field046 preserving type)` |  |  |
| `US_TaxFreeDefinedValue47` |  | |  | `cast(etxdci.extension_field047 as fis_etxdc_extension_field047 preserving type)` |  |  |
| `US_TaxFreeDefinedValue48` |  | |  | `cast(etxdci.extension_field048 as fis_etxdc_extension_field048 preserving type)` |  |  |
| `US_TaxFreeDefinedValue49` |  | |  | `cast(etxdci.extension_field049 as fis_etxdc_extension_field049 preserving type)` |  |  |
| `US_TaxFreeDefinedValue50` |  | |  | `cast(etxdci.extension_field050 as fis_etxdc_extension_field050 preserving type)` |  |  |
| `US_ItmTxExtExmpRsnCode` |  | |  | `cast(etxdci.exreason as ext_detcode preserving type)` |  |  |
| `_TaxType` | | ✓ | | | | |
| `_TaxDoc` | | ✓ | | | | |
| `_Jurisdiction` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_UnitedStatesTaxCategory` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_BusinessPartner1` | | ✓ | | | | |
| `_BusinessPartner2` | | ✓ | | | | |
| `_BusinessPartner3` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CompanyCodeCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaxType` | `I_TaxType` | [0..1] |
| `_TaxDoc` | `I_US_TaxPartnerTaxDocument` | [1..1] |
| `_Jurisdiction` | `I_US_TxPartTxJurisdictionLevel` | [1..*] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_UnitedStatesTaxCategory` | `I_UnitedStatesTaxCategory` | [0..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_BusinessPartner1` | `I_BusinessPartner` | [0..1] |
| `_BusinessPartner2` | `I_BusinessPartner` | [0..1] |
| `_BusinessPartner3` | `I_BusinessPartner` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CompanyCodeCurrency` | `I_Currency` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUSTXPARTDOCITM'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'US TaxPartnerTaxDocumentItem'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ObjectModel.representativeKey: 'US_TaxPartnerTaxDocumentItem'
@ObjectModel.sapObjectNodeType.name: 'US_TaxPartnerTaxDocumentItem'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XL
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities:
   [ #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_US_TaxPartnerTaxDocumentItem
  as select from etxdci

  association [0..1] to I_TaxType                      as _TaxType                 on  $projection.TaxType = _TaxType.TaxType
  association [1..1] to I_US_TaxPartnerTaxDocument     as _TaxDoc                  on  $projection.US_TaxPartnerTaxDocument = _TaxDoc.US_TaxPartnerTaxDocument
  association [1..*] to I_US_TxPartTxJurisdictionLevel as _Jurisdiction            on  $projection.US_TaxPartnerTaxDocument     = _Jurisdiction.US_TaxPartnerTaxDocument
                                                                                   and $projection.US_TaxPartnerTaxDocumentItem = _Jurisdiction.US_TaxPartnerTaxDocumentItem
  association [1..1] to I_DebitCreditCode              as _DebitCreditCode         on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [0..1] to I_Product                      as _Product                 on  $projection.US_TaxProduct = _Product.Product
  association [0..1] to I_UnitedStatesTaxCategory      as _UnitedStatesTaxCategory on  $projection.UnitedStatesTaxCategory = _UnitedStatesTaxCategory.UnitedStatesTaxCategory
  association [0..1] to I_BusinessPartner              as _BusinessPartner         on  $projection.BillToParty = _BusinessPartner.BusinessPartner
  association [0..1] to I_BusinessPartner              as _BusinessPartner1        on  $projection.SoldToParty = _BusinessPartner1.BusinessPartner
  association [0..1] to I_BusinessPartner              as _BusinessPartner2        on  $projection.ShipToParty = _BusinessPartner2.BusinessPartner
  association [0..1] to I_BusinessPartner              as _BusinessPartner3        on  $projection.Supplier = _BusinessPartner3.BusinessPartner
  association [0..1] to I_Supplier                     as _Supplier                on  $projection.Supplier = _Supplier.Supplier
  //  association [0..1] to I_CostCenter                   as _CostCenter              on  $projection.CostCenter = _CostCenter.CostCenter
  //   association [0..1] to I_WBSElementBasicData          as _WBSElement             on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
  association [0..1] to I_Currency                     as _TransactionCurrency     on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Currency                     as _CompanyCodeCurrency     on  $projection.CompanyCodeCurrency = _CompanyCodeCurrency.Currency
{
      @ObjectModel.foreignKey.association: '_TaxDoc'
  key etxdci.docnr                                                                    as US_TaxPartnerTaxDocument,
  key etxdci.itemnr                                                                   as US_TaxPartnerTaxDocumentItem,
      _TaxDoc.CompanyCode                                                             as CompanyCode,
      cast(etxdci.shipto as kunwe preserving type)                                    as ShipToParty,
      cast(etxdci.soldto as kunag preserving type)                                    as SoldToParty,
      cast(etxdci.matkl  as matkl preserving type)                                    as MaterialGroup,
      cast(case etxdci.tax_date_return when '' then '00000000'
                                  else etxdci.tax_date_return
           end as fis_externaltaxcalculationdate)                                     as TaxCalculationDate,
      cast(etxdci.post_date as fis_budat preserving type)                             as PostingDate,
      cast(etxdci.doc_date as fis_bldat preserving type)                              as DocumentDate,
      cast(etxdci.sr_date as fbuda preserving type)                                   as ServicesRenderedDate,
      cast(etxdci.mwskz as fis_mwskz preserving type)                                 as TaxCode,
      cast(etxdci.kostl as fis_kostl preserving type)                                 as CostCenter,
      cast(etxdci.tax_state as fis_externaltaxstate preserving type)                  as US_TaxState,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      cast(etxdci.amount as fwbas_shl preserving type)                                as TaxBaseAmountInTransCrcy,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      _TaxDoc.TransactionCurrency                                                     as TransactionCurrency,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_CompanyCodeCurrency'
      _TaxDoc.CompanyCodeCurrency                                                     as CompanyCodeCurrency,
      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      cast(case etxdci.credit_ind
              when '0' then 'H'
              else 'S'
              end as gl_shkzg preserving type)                                        as DebitCreditCode,
      cast(etxdci.txjcd_sf as txjcd_sf preserving type)                               as ShipFromAddressTaxJurisdiction,
      cast(etxdci.txjcd_st  as txjcd_st preserving type)                              as ShipToAddressTaxJurisdiction,
      cast(etxdci.txjcd_poa  as txjcd_poa preserving type)                            as PointOfOrderAcceptanceTxJx,
      cast(etxdci.txjcd_poo  as   txjcd_poo preserving type)                          as PointOfOrderOriginTxJx,
      cast(etxdci.billto   as kunre preserving type)                                  as BillToParty,
      etxdci.country                                                                  as TaxDepartureCountry,
      //     cast(case etxdci.apar_ind when 'V' then etxdci.accnt_no end as )


      etxdci.ebeln                                                                    as PurchasingDocument,
      etxdci.vbtyp                                                                    as SDDocumentCategory,
      etxdci.vbeln                                                                    as SDDocument,
      cast(etxdci.tax_date     as    fis_etxtaxpartnerreceiveddate preserving type)   as US_TaxPartnerReceivedTaxDate,

      //   cast( etxdci.division as fis_rbusa preserving type )                          as BusinessArea,
      @ObjectModel.foreignKey.association: '_Product'
      etxdci.matnr                                                                    as US_TaxProduct,
      @Semantics.quantity.unitOfMeasure: 'SalesMeasureUnit'
      cast( etxdci.quantity as menge_d preserving type )                              as QuantityInBaseUnit,
      cast( etxdci.unit as vrkme preserving type )                                    as SalesMeasureUnit,
      etxdci.upmat                                                                    as MainItemPricingRefMaterial,
      @ObjectModel.foreignKey.association: '_TaxType'
      cast( etxdci.apar_ind as mwart preserving type )                                as TaxType,
      @ObjectModel.foreignKey.association: '_UnitedStatesTaxCategory'
      cast( etxdci.tax_type as txind_007a preserving type  )                          as UnitedStatesTaxCategory,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      cast(etxdci.freight_am    as fis_etxdc_etdfrtamount preserving type)            as FreightAmount,
      //etxdci.wbs_element                                                              as WBSElementInternalID,
      cast(etxdci.wbs_element as ps_s4_pspnr preserving type)                         as WBSElementInternalID,
      //    _WBSElement.WBSElementExternalID                       as WBSElementExternalID,
      cast(etxdci.supplier as md_supplier preserving type)                            as Supplier,
      @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
      cast(etxdci.gl_taxbas as hwbas_shl preserving type)                             as TaxBaseAmountInCoCodeCrcy,
      cast(etxdci.extension_field001 as fis_etxdc_extension_field001 preserving type) as US_TaxFreeDefinedValue1,
      cast(etxdci.extension_field002 as fis_etxdc_extension_field002 preserving type) as US_TaxFreeDefinedValue2,
      cast(etxdci.extension_field003 as fis_etxdc_extension_field003 preserving type) as US_TaxFreeDefinedValue3,
      cast(etxdci.extension_field004 as fis_etxdc_extension_field004 preserving type) as US_TaxFreeDefinedValue4,
      cast(etxdci.extension_field005 as fis_etxdc_extension_field005 preserving type) as US_TaxFreeDefinedValue5,
      cast(etxdci.extension_field006 as fis_etxdc_extension_field006 preserving type) as US_TaxFreeDefinedValue6,
      cast(etxdci.extension_field007 as fis_etxdc_extension_field007 preserving type) as US_TaxFreeDefinedValue7,
      cast(etxdci.extension_field008 as fis_etxdc_extension_field008 preserving type) as US_TaxFreeDefinedValue8,
      cast(etxdci.extension_field009 as fis_etxdc_extension_field009 preserving type) as US_TaxFreeDefinedValue9,
      cast(etxdci.extension_field010 as fis_etxdc_extension_field010 preserving type) as US_TaxFreeDefinedValue10,
      cast(etxdci.extension_field011 as fis_etxdc_extension_field011 preserving type) as US_TaxFreeDefinedValue11,
      cast(etxdci.extension_field012 as fis_etxdc_extension_field012 preserving type) as US_TaxFreeDefinedValue12,
      cast(etxdci.extension_field013 as fis_etxdc_extension_field013 preserving type) as US_TaxFreeDefinedValue13,
      cast(etxdci.extension_field014 as fis_etxdc_extension_field014 preserving type) as US_TaxFreeDefinedValue14,
      cast(etxdci.extension_field015 as fis_etxdc_extension_field015 preserving type) as US_TaxFreeDefinedValue15,
      cast(etxdci.extension_field016 as fis_etxdc_extension_field016 preserving type) as US_TaxFreeDefinedValue16,
      cast(etxdci.extension_field017 as fis_etxdc_extension_field017 preserving type) as US_TaxFreeDefinedValue17,
      cast(etxdci.extension_field018 as fis_etxdc_extension_field018 preserving type) as US_TaxFreeDefinedValue18,
      cast(etxdci.extension_field019 as fis_etxdc_extension_field019 preserving type) as US_TaxFreeDefinedValue19,
      cast(etxdci.extension_field020 as fis_etxdc_extension_field020 preserving type) as US_TaxFreeDefinedValue20,
      cast(etxdci.extension_field021 as fis_etxdc_extension_field021 preserving type) as US_TaxFreeDefinedValue21,
      cast(etxdci.extension_field022 as fis_etxdc_extension_field022 preserving type) as US_TaxFreeDefinedValue22,
      cast(etxdci.extension_field023 as fis_etxdc_extension_field023 preserving type) as US_TaxFreeDefinedValue23,
      cast(etxdci.extension_field024 as fis_etxdc_extension_field024 preserving type) as US_TaxFreeDefinedValue24,
      cast(etxdci.extension_field025 as fis_etxdc_extension_field025 preserving type) as US_TaxFreeDefinedValue25,
      cast(etxdci.extension_field026 as fis_etxdc_extension_field026 preserving type) as US_TaxFreeDefinedValue26,
      cast(etxdci.extension_field027 as fis_etxdc_extension_field027 preserving type) as US_TaxFreeDefinedValue27,
      cast(etxdci.extension_field028 as fis_etxdc_extension_field028 preserving type) as US_TaxFreeDefinedValue28,
      cast(etxdci.extension_field029 as fis_etxdc_extension_field029 preserving type) as US_TaxFreeDefinedValue29,
      cast(etxdci.extension_field030 as fis_etxdc_extension_field030 preserving type) as US_TaxFreeDefinedValue30,
      cast(etxdci.extension_field031 as fis_etxdc_extension_field031 preserving type) as US_TaxFreeDefinedValue31,
      cast(etxdci.extension_field032 as fis_etxdc_extension_field032 preserving type) as US_TaxFreeDefinedValue32,
      cast(etxdci.extension_field033 as fis_etxdc_extension_field033 preserving type) as US_TaxFreeDefinedValue33,
      cast(etxdci.extension_field034 as fis_etxdc_extension_field034 preserving type) as US_TaxFreeDefinedValue34,
      cast(etxdci.extension_field035 as fis_etxdc_extension_field035 preserving type) as US_TaxFreeDefinedValue35,
      cast(etxdci.extension_field036 as fis_etxdc_extension_field036 preserving type) as US_TaxFreeDefinedValue36,
      cast(etxdci.extension_field037 as fis_etxdc_extension_field037 preserving type) as US_TaxFreeDefinedValue37,
      cast(etxdci.extension_field038 as fis_etxdc_extension_field038 preserving type) as US_TaxFreeDefinedValue38,
      cast(etxdci.extension_field039 as fis_etxdc_extension_field039 preserving type) as US_TaxFreeDefinedValue39,
      cast(etxdci.extension_field040 as fis_etxdc_extension_field040 preserving type) as US_TaxFreeDefinedValue40,
      cast(etxdci.extension_field041 as fis_etxdc_extension_field041 preserving type) as US_TaxFreeDefinedValue41,
      cast(etxdci.extension_field042 as fis_etxdc_extension_field042 preserving type) as US_TaxFreeDefinedValue42,
      cast(etxdci.extension_field043 as fis_etxdc_extension_field043 preserving type) as US_TaxFreeDefinedValue43,
      cast(etxdci.extension_field044 as fis_etxdc_extension_field044 preserving type) as US_TaxFreeDefinedValue44,
      cast(etxdci.extension_field045 as fis_etxdc_extension_field045 preserving type) as US_TaxFreeDefinedValue45,
      cast(etxdci.extension_field046 as fis_etxdc_extension_field046 preserving type) as US_TaxFreeDefinedValue46,
      cast(etxdci.extension_field047 as fis_etxdc_extension_field047 preserving type) as US_TaxFreeDefinedValue47,
      cast(etxdci.extension_field048 as fis_etxdc_extension_field048 preserving type) as US_TaxFreeDefinedValue48,
      cast(etxdci.extension_field049 as fis_etxdc_extension_field049 preserving type) as US_TaxFreeDefinedValue49,
      cast(etxdci.extension_field050 as fis_etxdc_extension_field050 preserving type) as US_TaxFreeDefinedValue50,
      cast(etxdci.exreason as ext_detcode preserving type)          as US_ItmTxExtExmpRsnCode,


      _TaxType,
      _TaxDoc,
      _DebitCreditCode,
      _Jurisdiction,
      _UnitedStatesTaxCategory,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Product,
      _BusinessPartner,
      _BusinessPartner1,
      _BusinessPartner2,
      _Supplier,
      _BusinessPartner3,
      // _CostCenter
      //   _WBSElement
      _TransactionCurrency,
      _CompanyCodeCurrency

}
```
