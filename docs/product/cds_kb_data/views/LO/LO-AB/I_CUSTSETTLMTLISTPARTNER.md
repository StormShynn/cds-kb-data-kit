---
name: I_CUSTSETTLMTLISTPARTNER
description: "Customer Settlement List Partner"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTPARTNER')/$value
semantic_en: "Customer Settlement List Partner"
semantic_vi: "Customer Settlement List Partner — CDS view cơ bản dựa trên R_CustSettlmtListPartner."
keywords:
  - "customer"
  - "settlement"
  - "list"
  - "partner"
  - "cust"
  - "settlmt"
  - "function"
  - "counter"
  - "created"
  - "user"
  - "creation"
  - "date"
tags:
  - LO
  - bo:businesspartner
  - component:LO-AB
  - customer
  - interface-view
  - LO-AB
  - lob:logistics general
---
# I_CUSTSETTLMTLISTPARTNER

**Customer Settlement List Partner**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustSettlmtList` | ✓ | |  |  | `CHAR(10)` | Settlement Document: Customer Settlement List |
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
| `CustSettlmtListPartAddrRefType` |  | |  |  | `CHAR(1)` | Address indicator |
| `AddressObjectType` |  | |  |  | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `BPAddrDeterminationTransaction` |  | |  |  | `CHAR(6)` | Address Determination in Document |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  | `CHAR(10)` | BP Reference Address Number |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `_CustSettlmtList` | | ✓ | | | | |
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
| `_CustSettlmtList` | `I_CustSettlmtList` | [1..1] |
| `_Address` | `I_Address` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTPARTNER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTSETTLMTLISTPARTNER')/$value)*

```abap
@EndUserText.label: 'Customer Settlement List Partner'
@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations: [ '_Address', '_DfltAddrRprstn', '_PersonWorkplaceAddrDfltRprstn' ]
    }
@ObjectModel: {
    representativeKey: 'PartnerCounter',
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities : [ #ANALYTICAL_DIMENSION,
                              #CDS_MODELING_ASSOCIATION_TARGET,
                              #SQL_DATA_SOURCE,
                              #CDS_MODELING_DATA_SOURCE ], 
    usageType.dataClass: #TRANSACTIONAL,
    usageType.serviceQuality: #A,
    usageType.sizeCategory:   #XL
    }
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction.enabled: false,
    internalName: #LOCAL
    }
@Analytics.technicalName: 'IWLFCSTSMTLTPART'
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CustSettlmtListPartner
  as select from R_CustSettlmtListPartner

  association [1..1] to I_CustSettlmtList as _CustSettlmtList on $projection.CustSettlmtList = _CustSettlmtList.CustSettlmtList
  association [0..1] to I_Address         as _Address         on $projection.AddressID = _Address.AddressID


{

      @ObjectModel.foreignKey.association: '_CustSettlmtList'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CustSettlmtListStdVH', element: 'CustSettlmtList' } }]
      }
  key CustSettlmtList,
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
      CustSettlmtListPartAddrRefType,
      AddressObjectType,
      BPAddrDeterminationTransaction,
      BPRefAddressIDForDocSpcfcAddr,

      VATRegistration,

      /* Associations */
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _CustSettlmtList,
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
