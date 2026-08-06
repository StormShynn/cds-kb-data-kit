---
name: I_CSGNMTANDSTOTAXPRPSLITEM
description: Csgnmtandstotaxprpslitem
app_component: FI-TXL-TGM
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-TXL
  - FI-TXL-TGM
  - interface-view
  - tax
  - item-level
  - component:FI-TXL-TGM
  - lob:Finance
---
# I_CSGNMTANDSTOTAXPRPSLITEM

**Csgnmtandstotaxprpslitem**

| Property | Value |
|---|---|
| App Component | `FI-TXL-TGM` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProposalTaxPostingIdentifier` | `TaxPropslItem.ptxnr` |
| key `ProposalTaxPostingItem` | `TaxPropslItem.ptxit` |
| `DeliveringPlant` | `TaxPropslItem.werks` |
| `ReceivingPlant` | `TaxPropslItem.umwrk` |
| `MaterialDocumentItem` | `TaxPropslItem.zeile` |
| `OutboundDeliveryItem` | `TaxPropslItem.posnr` |
| `Batch` | `TaxPropslItem.charg` |
| `HigherLvlItmOfBatSpltItm` | `TaxPropslItem.uecha` |
| `MaterialIsIntBatchManaged` | `TaxPropslItem.xchar` |
| `ReversedMaterialDocumentItem` | `TaxPropslItem.smblp` |
| `Material` | `TaxPropslItem.matnr` |
| `TransactionCurrency` | `_TaxProposalHeader.TransactionCurrency` |
| `ForeignTradeStstclCurrency` | `_TaxProposalHeader.ForeignTradeStstclCurrency` |
| `QuantityInEntryUnit` | `} TaxPropslItem.fkimg` |
| `SalesUnit` | `TaxPropslItem.vrkme` |
| `QuantityInEntryUnitBaseUnit` | `} TaxPropslItem.fklmg` |
| `BaseUnit` | `TaxPropslItem.meins` |
| `MaterialNetWeight` | `} TaxPropslItem.ntgew` |
| `WeightUnit` | `TaxPropslItem.gewei` |
| `ServicesRenderedDate` | `TaxPropslItem.fbuda` |
| `PriceDetnExchangeRate` | `cast( TaxPropslItem.kursk as kursk_not_converted preserving type )` |
| `ItemNetAmountOfBillingDoc` | `} TaxPropslItem.netwr` |
| `PrecdgSDDocCategory` | `TaxPropslItem.vgtyp` |
| `SalesDocument` | `TaxPropslItem.aubel` |
| `SalesDocumentItem` | `TaxPropslItem.aupos` |
| `SalesDocumentItemText` | `TaxPropslItem.arktx` |
| `SalesDocumentItemCategory` | `TaxPropslItem.pstyv` |
| `SDDocumentCategory` | `TaxPropslItem.autyp` |
| `ItemGrossAmountOfBillingDoc` | `} TaxPropslItem.brtwr` |
| `ForeignTradeStstclAmt` | `TaxPropslItem.grwrt` |
| `CountryOfOrigin` | `TaxPropslItem.spe_herkl` |
| `RegionOfOrigin` | `TaxPropslItem.spe_herkr` |
| `CommodityCode` | `TaxPropslItem.itm_comco` |
| `SpecialStockIdfgCustomer` | `TaxPropslItem.nsdm_kunnr` |
| `SoldToParty` | `TaxPropslItem.kunag` |
| `SoldToPartyAddressID` | `TaxPropslItem.kunag_adr` |
| `ShipToParty` | `TaxPropslItem.kunwe` |
| `ShipToPartyAddressID` | `TaxPropslItem.kunwe_adr` |
| `CompanyCode` | `_TaxProposalHeader.CompanyCode` |
| `_TaxProposalHeader` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TaxProposalHeader` | `I_CsgnmtAndSTOTaxPrpsl` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ITAXPRPSLITEM'
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Tax Proposal Posting Item'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:[
  #CDS_MODELING_DATA_SOURCE,
  #CDS_MODELING_ASSOCIATION_TARGET,
  #SQL_DATA_SOURCE,
  #EXTRACTION_DATA_SOURCE
]
@Analytics.dataExtraction.enabled:true
@ObjectModel.sapObjectNodeType.name: 'ConsignmentAndSTOTaxProposal'
define view I_CsgnmtAndSTOTaxPrpslItem
  as select from ptxpi as TaxPropslItem
  association [1..1] to I_CsgnmtAndSTOTaxPrpsl as _TaxProposalHeader on $projection.ProposalTaxPostingIdentifier = _TaxProposalHeader.ProposalTaxPostingIdentifier
{
  key TaxPropslItem.ptxnr                                                as ProposalTaxPostingIdentifier,
  key TaxPropslItem.ptxit                                                as ProposalTaxPostingItem,
      TaxPropslItem.werks                                                as DeliveringPlant,
      TaxPropslItem.umwrk                                                as ReceivingPlant, //
      TaxPropslItem.zeile                                                as MaterialDocumentItem, //
      TaxPropslItem.posnr                                                as OutboundDeliveryItem, //
      TaxPropslItem.charg                                                as Batch, //
      TaxPropslItem.uecha                                                as HigherLvlItmOfBatSpltItm, //
      TaxPropslItem.xchar                                                as MaterialIsIntBatchManaged, //
      TaxPropslItem.smblp                                                as ReversedMaterialDocumentItem, //
      TaxPropslItem.matnr                                                as Material, //
      @Semantics.currencyCode: true
      _TaxProposalHeader.TransactionCurrency                             as TransactionCurrency,
      @Semantics.currencyCode: true
      _TaxProposalHeader.ForeignTradeStstclCurrency                      as ForeignTradeStstclCurrency,
      @Semantics: { quantity : {unitOfMeasure: 'SalesUnit' } }
      TaxPropslItem.fkimg                                                as QuantityInEntryUnit, //
      @Semantics.unitOfMeasure:true
      TaxPropslItem.vrkme                                                as SalesUnit, //
      @Semantics: { quantity : {unitOfMeasure: 'BaseUnit' } }
      TaxPropslItem.fklmg                                                as QuantityInEntryUnitBaseUnit,
      @Semantics.unitOfMeasure:true
      TaxPropslItem.meins                                                as BaseUnit, //
      @Semantics: { quantity : {unitOfMeasure: 'WeightUnit' } }
      TaxPropslItem.ntgew                                                as MaterialNetWeight, //
      @Semantics.unitOfMeasure:true
      TaxPropslItem.gewei                                                as WeightUnit, //
      TaxPropslItem.fbuda                                                as ServicesRenderedDate, //
      cast( TaxPropslItem.kursk as kursk_not_converted preserving type ) as PriceDetnExchangeRate, //
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      TaxPropslItem.netwr                                                as ItemNetAmountOfBillingDoc, //
      TaxPropslItem.vgtyp                                                as PrecdgSDDocCategory,
      TaxPropslItem.aubel                                                as SalesDocument, //
      TaxPropslItem.aupos                                                as SalesDocumentItem,
      TaxPropslItem.arktx                                                as SalesDocumentItemText, //
      TaxPropslItem.pstyv                                                as SalesDocumentItemCategory, //
      TaxPropslItem.autyp                                                as SDDocumentCategory, //
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      TaxPropslItem.brtwr                                                as ItemGrossAmountOfBillingDoc, //
      @Semantics.amount.currencyCode: 'ForeignTradeStstclCurrency'
      TaxPropslItem.grwrt                                                as ForeignTradeStstclAmt,
      TaxPropslItem.spe_herkl                                            as CountryOfOrigin, //
      TaxPropslItem.spe_herkr                                            as RegionOfOrigin,  //
      TaxPropslItem.itm_comco                                            as CommodityCode, //
      TaxPropslItem.nsdm_kunnr                                           as SpecialStockIdfgCustomer,
      TaxPropslItem.kunag                                                as SoldToParty,
      TaxPropslItem.kunag_adr                                            as SoldToPartyAddressID,
      TaxPropslItem.kunwe                                                as ShipToParty,
      TaxPropslItem.kunwe_adr                                            as ShipToPartyAddressID,
      _TaxProposalHeader.CompanyCode                                     as CompanyCode,
      _TaxProposalHeader
      //TaxPropslItem.PTXPIUUID                                                  as CommodityCode,
      //TaxPropslItem.VERSION                                                    as CommodityCode,


}
```
