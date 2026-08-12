---
name: I_TRDGCONTRITEMPARTNER
description: "Partner of Trading Contract Item"
app_component: LO-GT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITEMPARTNER')/$value
semantic_en: "Partner of Trading Contract Item"
semantic_vi: "Partner of Trading Contract Item — CDS view tổng hợp dựa trên R_TrdgContrItemPartner."
keywords:
  - "partner"
  - "trading"
  - "contract"
  - "item"
  - "function"
  - "counter"
  - "supplier"
tags:
  - LO
  - component:LO-GT
  - contract
  - interface-view
  - LO-GT
  - lob:logistics general
---
# I_TRDGCONTRITEMPARTNER

**Partner of Trading Contract Item**

| Property | Value |
|---|---|
| App Component | `LO-GT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITEMPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TradingContract` | ✓ | |  |  | `CHAR(10)` | Trading Contract |
| `TradingContractItem` | ✓ | |  |  | `NUMC(6)` | Item Number of Trading Contract |
| `PartnerFunction` | ✓ | |  |  | `CHAR(2)` | Partner Function |
| `PartnerCounter` | ✓ | |  |  | `NUMC(3)` | Partner counter |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `DefaultPartner` |  | |  |  | `CHAR(1)` | Default Partner |
| `ContactPerson` |  | |  |  | `NUMC(10)` | Number of Contact Person |
| `Personnel` |  | |  |  | `NUMC(8)` | Personnel Number |
| `AddressID` |  | |  |  | `CHAR(10)` | Address |
| `TrdgContrPartAddrRefType` |  | |  |  | `CHAR(1)` | Address indicator |
| `ReferenceBusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `BPAddrDeterminationTransaction` |  | |  |  | `CHAR(6)` | Business Partner Address Determination |
| `AddressObjectType` |  | |  |  | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `AddressPersonID` |  | |  |  | `CHAR(10)` | Person Number |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  | `CHAR(10)` | BP Reference Address Number |
| `TrdgContrPrtnHierLvlVal` |  | |  |  | `NUMC(2)` | Level number within the hierarchy of a Trdg Doc Partner |
| `NFPartnerIsNaturalPerson` |  | |  |  | `CHAR(1)` | Natural Person |
| `TaxNumberType` |  | |  |  | `CHAR(2)` | Tax Number Type |
| `TrdgContrDelivSchedUnldgPt` |  | |  |  | `CHAR(25)` | Unloading Point |
| `TrdgContrCustHierCat` |  | |  |  | `CHAR(1)` | Sales Hierarchy Category |
| `TrdgContrSuplrHierCat` |  | |  |  | `CHAR(1)` | Purchasing Hierarchy Category |
| `TrdgContrIsHierPrDetnRlvt` |  | |  |  | `CHAR(1)` | Relevant for price determination ID |
| `TrdgContrCustIsRbteRlvt` |  | |  |  | `CHAR(1)` | Indicator: Customer Is Rebate-Relevant |
| `TrdgContrPurgIsSubjToSettlmt` |  | |  |  | `CHAR(1)` | Indicator: supplier subject to subseq. settlement accounting |
| `TrdgContrPartAddrIsDocSpcfc` |  | |  |  | `CHAR(1)` | Document-Specific Address Indicator |
| `_TradingContract` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TradingContract` | `I_TrdgContr` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITEMPARTNER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRDGCONTRITEMPARTNER')/$value)*

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_Address' ]
}
@EndUserText.label: 'Partner of Trading Contract Item'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  semanticKey: ['TradingContract', 'TradingContractItem'],
  modelingPattern: #NONE,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #TRANSACTIONAL
  }
}
@AbapCatalog.viewEnhancementCategory: [#NONE]
@Metadata.ignorePropagatedAnnotations: true

/* Generic BO Layer */
define view entity I_TrdgContrItemPartner
  as select from R_TrdgContrItemPartner as TrdgcontrItemPartner

  association [1..1] to I_TrdgContr as _TradingContract on $projection.TradingContract = _TradingContract.TradingContract
{
  key TradingContract,
  key TradingContractItem,
  key PartnerFunction,
  key PartnerCounter,
      Supplier,
      SoldToParty,
      DefaultPartner,
      ContactPerson,
      Personnel,
      AddressID,
      TrdgContrPartAddrRefType,
      ReferenceBusinessPartner,
      BPAddrDeterminationTransaction,
      AddressObjectType,
      AddressPersonID,
      BPRefAddressIDForDocSpcfcAddr,
      TrdgContrPrtnHierLvlVal,
      @Semantics.booleanIndicator: true
      NFPartnerIsNaturalPerson,
      TaxNumberType,
      TrdgContrDelivSchedUnldgPt,
      TrdgContrCustHierCat,
      TrdgContrSuplrHierCat,
      TrdgContrIsHierPrDetnRlvt,
      TrdgContrCustIsRbteRlvt,
      TrdgContrPurgIsSubjToSettlmt,
      TrdgContrPartAddrIsDocSpcfc,

      _Address,
      _TradingContract

}
```
