---
name: I_CUSTSETTLMTITEMPARTNER
description: "Customer Settlement Item Partner"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMPARTNER')/$value
semantic_en: "Customer Settlement Item Partner"
semantic_vi: "Customer Settlement Item Partner — CDS view cơ bản dựa trên R_CustSettlmtItemPartner."
keywords:
  - "customer"
  - "settlement"
  - "item"
  - "partner"
  - "cust"
  - "settlmt"
  - "function"
  - "counter"
  - "created"
  - "user"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMTITEMPARTNER

**Customer Settlement Item Partner**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmt` | ✓ | |  |  | `CHAR(10)` | Customer Settlement |
| `CustSettlmtItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
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
| `CustSettlmtPartAddrRefType` |  | |  |  | `CHAR(1)` | Address indicator |
| `AddressObjectType` |  | |  |  | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `BPAddrDeterminationTransaction` |  | |  |  | `CHAR(6)` | Address Determination in Document |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  | `CHAR(10)` | BP Reference Address Number |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `_CustSettlmt` | | ✓ | | | | |
| `_CustSettlmtItem` | | ✓ | | | | |
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
| `_CustSettlmt` | `I_CustSettlmt` | [1..1] |
| `_CustSettlmtItem` | `I_CustSettlmtItem` | [1..1] |
| `_Address` | `I_Address` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMPARTNER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTITEMPARTNER')/$value)*

```abap
@VDM: {
  viewType: #BASIC,
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
     serviceQuality: #A,
     sizeCategory:   #XL 
   }
}
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
}
@Analytics.technicalName: 'IWLFCUSTMITMPRT'

@EndUserText.label: 'Customer Settlement Item Partner'
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions:true
}

define view entity I_CustSettlmtItemPartner
  as select from R_CustSettlmtItemPartner

  association [1..1] to I_CustSettlmt     as _CustSettlmt     on  _CustSettlmt.CustSettlmt = $projection.CustSettlmt
  association [1..1] to I_CustSettlmtItem as _CustSettlmtItem on  _CustSettlmtItem.CustSettlmt     = $projection.CustSettlmt
                                                              and _CustSettlmtItem.CustSettlmtItem = $projection.CustSettlmtItem
  association [0..1] to I_Address         as _Address         on  $projection.AddressID = _Address.AddressID

{
      @ObjectModel.foreignKey.association: '_CustSettlmt'
      @Consumption: {
          valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtStdVH', element: 'CustSettlmt' } }]
      }
  key CustSettlmt,
      @ObjectModel.foreignKey.association: '_CustSettlmtItem'
      @Consumption: {
          valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtItemStdVH', element: 'CustSettlmtItem' } }]
      }
  key CustSettlmtItem,
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key PartnerFunction,
  key PartnerCounter, --representative key
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
      CustSettlmtPartAddrRefType,
      AddressObjectType,
      BPAddrDeterminationTransaction,
      BPRefAddressIDForDocSpcfcAddr,

      VATRegistration,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _CustSettlmt,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _CustSettlmtItem,
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
