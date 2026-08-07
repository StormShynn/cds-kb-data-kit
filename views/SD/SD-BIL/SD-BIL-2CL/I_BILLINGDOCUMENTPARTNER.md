---
name: I_BILLINGDOCUMENTPARTNER
description: Billing DocumentUMENTPARTNER
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - interface-view
  - billing-document
  - billing
  - document
  - partner
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
  - bo:BillingDocument
---
# I_BILLINGDOCUMENTPARTNER

**Billing DocumentUMENTPARTNER**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocument` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressObjectType` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |  |  |
| `VATRegistration` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |  |  |
| `_BillingDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocument` | `I_BillingDocument` | [1..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'ISDBILDOCPT'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations: [ '_Address', '_DfltAddrRprstn' ]

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Billing Document Partner'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'PartnerFunction'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #B, sizeCategory: #XL }

@VDM.viewType: #COMPOSITE

define view I_BillingDocumentPartner
  as select from I_BillingDocumentPartnerBasic as Partner

  association [1..1] to I_BillingDocument as _BillingDocument on $projection.BillingDocument = _BillingDocument.BillingDocument

{
      // --[ GENERATED:012:GlBfhyJl7kY4v5RWfCiSf0
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_BillingDocumentStdVH', element: 'BillingDocument' } } ]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BillingDocument'
  key Partner.BillingDocument,

      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key Partner.PartnerFunction,

      Partner.Customer,

      Partner.Supplier,

      Partner.Personnel,

      @ObjectModel.foreignKey.association: '_Address'
      Partner.AddressID,
      Partner.AddressObjectType,
      Partner.ContactPerson,

      Partner.AddressPersonID,
      Partner.ReferenceBusinessPartner,
      Partner.SDDocPartnerAddressRefType,
      
      Partner.VATRegistration,
      Partner.UnloadingPointName,
      
      Partner.BPRefAddressIDForDocSpcfcAddr,

      // Association
      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT ]
      _BillingDocument,

      Partner._PartnerFunction,
      Partner._Address,
      Partner._BusinessPartnerAddress,
      Partner._DfltAddrRprstn,
      Partner._BPRefAddressForDocSpcfcAddr
}

where _BillingDocument.SDDocumentCategory = 'M' // Invoice
   or _BillingDocument.SDDocumentCategory = 'N' // Invoice Canceled
   or _BillingDocument.SDDocumentCategory = 'O' // Credit Memo
   or _BillingDocument.SDDocumentCategory = 'P' // Debit Memo
   or _BillingDocument.SDDocumentCategory = 'S' // Credit Memo Canceled
   or _BillingDocument.SDDocumentCategory = 'U' // Pro Forma Invoice
   or _BillingDocument.SDDocumentCategory = '5' // Intercompany Invoice
   or _BillingDocument.SDDocumentCategory = '6' // Intercompany Credit Memo
   or _BillingDocument.SDDocumentCategory = 'DPRQ' // Down Payment Request
   or _BillingDocument.SDDocumentCategory = 'DPCC' // Down Payment Cancellation
```
