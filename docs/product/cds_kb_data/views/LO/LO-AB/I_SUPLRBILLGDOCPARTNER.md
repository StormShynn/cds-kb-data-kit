---
name: I_SUPLRBILLGDOCPARTNER
description: "Supplier Billing Document Partner"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCPARTNER')/$value
semantic_en: "Supplier Billing Document Partner"
semantic_vi: "Supplier Billing Document Partner — CDS view cơ bản dựa trên R_SuplrBillgDocPartner."
keywords:
  - "supplier"
  - "billing"
  - "document"
  - "partner"
  - "suplr"
  - "billg"
  - "function"
  - "counter"
  - "created"
  - "user"
  - "creation"
  - "date"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-AB
  - document
  - interface-view
  - LO-AB
  - lob:logistics general
  - supplier
---
# I_SUPLRBILLGDOCPARTNER

**Supplier Billing Document Partner**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCPARTNER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SuplrBillgDoc` | ✓ | |  |  | `CHAR(10)` | Supplier Billing Document Number |
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
| `SuplrBillgDocPartAddrRefType` |  | |  |  | `CHAR(1)` | Address indicator |
| `AddressObjectType` |  | |  |  | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `BPAddrDeterminationTransaction` |  | |  |  | `CHAR(6)` | Address Determination in Document |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  | `CHAR(10)` | BP Reference Address Number |
| `VATRegistration` |  | |  |  | `CHAR(20)` | VAT Registration Number |
| `_SuplrBillgDoc` | | ✓ | | | | |
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
| `_SuplrBillgDoc` | `I_SuplrBillgDoc` | [1..1] |
| `_Address` | `I_Address` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCPARTNER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SUPLRBILLGDOCPARTNER')/$value)*

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
   supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION],
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
@Analytics.technicalName: 'IWLFSUPBDPART'

@EndUserText.label: 'Supplier Billing Document Partner'
@Metadata: {
      ignorePropagatedAnnotations: true,
      allowExtensions:true }

define view entity I_SuplrBillgDocPartner
  as select from R_SuplrBillgDocPartner

  association [1..1] to I_SuplrBillgDoc as _SuplrBillgDoc on $projection.SuplrBillgDoc = _SuplrBillgDoc.SuplrBillgDoc
  association [0..1] to I_Address       as _Address       on $projection.AddressID = _Address.AddressID

{

      @ObjectModel.foreignKey.association: '_SuplrBillgDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SuplrBillgDocStdVH', element: 'SuplrBillgDoc' } }]
      }
  key SuplrBillgDoc,
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
      SuplrBillgDocPartAddrRefType,
      AddressObjectType,
      BPAddrDeterminationTransaction,
      BPRefAddressIDForDocSpcfcAddr,

      VATRegistration,

      // Associations:
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SuplrBillgDoc,
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
