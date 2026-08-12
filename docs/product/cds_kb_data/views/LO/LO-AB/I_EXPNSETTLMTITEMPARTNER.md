---
name: I_EXPNSETTLMTITEMPARTNER
description: "Expense Settlement Item Partner"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMPARTNER')/$value
semantic_en: "Expense Settlement Item Partner"
semantic_vi: "Expense Settlement Item Partner — CDS view cơ bản dựa trên R_ExpnSettlmtItemPartner."
keywords:
  - "expense"
  - "settlement"
  - "item"
  - "partner"
  - "expn"
  - "settlmt"
  - "function"
  - "counter"
  - "created"
  - "user"
tags:
  - LO
  - component:LO-AB
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_EXPNSETTLMTITEMPARTNER

**Expense Settlement Item Partner**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExpnSettlmt` | ✓ | |  |  | `CHAR(10)` | Document Number of Expense Settlement |
| `ExpnSettlmtItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `PartnerFunction` | ✓ | |  |  | `CHAR(2)` | Partner Function |
| `PartnerCounter` | ✓ | |  |  | `NUMC(3)` | Partner counter |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of User who Created the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Date of Document Creation |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ContactPerson` |  | |  |  | `NUMC(10)` | Number of Contact Person |
| `Personnel` |  | |  |  | `NUMC(8)` | Personnel Number |
| `AddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `AddressPersonID` |  | |  |  | `CHAR(10)` | Person Number |
| `ReferenceBusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `ExpnSettlmtPartAddrRefType` |  | |  |  | `CHAR(1)` | Address indicator |
| `AddressObjectType` |  | |  |  | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `BPAddrDeterminationTransaction` |  | |  |  | `CHAR(6)` | Address Determination in Document |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  | `CHAR(10)` | BP Reference Address Number |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `_ExpnSettlmt` | | ✓ | | | | |
| `_ExpnSettlmtItem` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_DfltAddrRprstn` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_PersonWorkplaceAddrDfltRprstn` | | ✓ | | | | |
| `_BPRefAddressForDocSpcfcAddr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExpnSettlmt` | `I_ExpnSettlmt` | [1..1] |
| `_ExpnSettlmtItem` | `I_ExpnSettlmtItem` | [1..1] |
| `_Address` | `I_Address` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMPARTNER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EXPNSETTLMTITEMPARTNER')/$value)*

```abap
@VDM: {
  viewType: #BASIC  ,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn', '_PersonWorkplaceAddrDfltRprstn' ]
}
@ObjectModel: {
   representativeKey: 'PartnerCounter',
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities : [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   }
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@Analytics.technicalName: 'IWLFEXPNSMTITMPT'

@EndUserText.label: 'Expense Settlement Item Partner'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view entity I_ExpnSettlmtItemPartner
  as select from R_ExpnSettlmtItemPartner

  association [1..1] to I_ExpnSettlmt     as _ExpnSettlmt     on  _ExpnSettlmt.ExpnSettlmt = $projection.ExpnSettlmt
  association [1..1] to I_ExpnSettlmtItem as _ExpnSettlmtItem on  _ExpnSettlmtItem.ExpnSettlmt     = $projection.ExpnSettlmt
                                                              and _ExpnSettlmtItem.ExpnSettlmtItem = $projection.ExpnSettlmtItem
  association [0..1] to I_Address         as _Address         on  $projection.AddressID = _Address.AddressID

{
      @ObjectModel.foreignKey.association: '_ExpnSettlmt'
      @Consumption: {
          valueHelpDefinition: [{ entity: { name: 'I_ExpnSettlmtStdVH', element: 'ExpnSettlmt' } }]
      }
  key ExpnSettlmt,
      @ObjectModel.foreignKey.association: '_ExpnSettlmtItem'
      @Consumption: {
          valueHelpDefinition: [{ entity: { name: 'I_ExpnSettlmtItemStdVH', element: 'ExpnSettlmtItem' } }]
      }
  key ExpnSettlmtItem,
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key PartnerFunction,
  key PartnerCounter,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @ObjectModel.foreignKey.association: '_Supplier'
      @Consumption: {
          valueHelpDefinition: [{ entity: { name: 'I_Supplier_VH', element: 'Supplier' } }]
      }
      Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      @Consumption: {
          valueHelpDefinition: [{ entity: { name: 'I_Customer_VH', element: 'Customer' } }]
      }
      Customer,
      ContactPerson,
      Personnel,
      @ObjectModel.foreignKey.association: '_Address'
      AddressID,

      AddressPersonID,
      ReferenceBusinessPartner,
      ExpnSettlmtPartAddrRefType,
      AddressObjectType,
      BPAddrDeterminationTransaction,
      BPRefAddressIDForDocSpcfcAddr,

      VATRegistration,

      // associations:
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _ExpnSettlmt,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _ExpnSettlmtItem,
      _PartnerFunction,
      _Supplier,
      _Customer,
      _Address,
      _DfltAddrRprstn,
      _BusinessPartnerAddress,
      _PersonWorkplaceAddrDfltRprstn,
      _BPRefAddressForDocSpcfcAddr

}
```
