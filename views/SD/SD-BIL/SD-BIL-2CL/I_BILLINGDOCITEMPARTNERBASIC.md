---
name: I_BILLINGDOCITEMPARTNERBASIC
description: Billing DocumentITEMPARTNERBASIC
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
  - item-level
  - partner
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# I_BILLINGDOCITEMPARTNERBASIC

**Billing DocumentITEMPARTNERBASIC**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BillingDocument` | `cast(Partner.SDDocument as vbeln_vf preserving type )` |
| `BillingDocumentItem` | `}] key BillingDocumentItem.BillingDocumentItem` |
| key `PartnerFunction` | `Partner.PartnerFunction` |
| `Customer` | `Partner.Customer` |
| `Supplier` | `Partner.Supplier` |
| `Personnel` | `Partner.Personnel` |
| `AddressID` | `Partner.AddressID` |
| `ContactPerson` | `Partner.ContactPerson` |
| `AddressPersonID` | `Partner.AddressPersonID` |
| `ReferenceBusinessPartner` | `Partner.ReferenceBusinessPartner` |
| `BPRefAddressIDForDocSpcfcAddr` | `Partner.BPRefAddressIDForDocSpcfcAddr` |
| `SDDocPartnerAddressRefType` | `Partner.SDDocPartnerAddressRefType` |
| `AddressObjectType` | `Partner.AddressObjectType` |
| `VATRegistration` | `Partner.VATRegistration` |
| `UnloadingPointName` | `Partner.UnloadingPointName` |
| `_BillingDocumentBasic` | *Association* |
| `_ItemBasic` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocumentBasic` | `I_BillingDocumentBasic` | [1..1] |
| `_ItemBasic` | `I_BillingDocumentItemBasic` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Item Partner in Billing Process Document'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #REQUIRED,
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDBILDOCITPTBC',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
   representativeKey: 'PartnerFunction',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

define view I_BillingDocItemPartnerBasic
  as select from I_SDDocumentItemPartner    as Partner
    inner join   I_BillingDocumentItemBasic as BillingDocumentItem on  BillingDocumentItem.BillingDocument               = Partner.SDDocument
                                                                   and BillingDocumentItem.BillingDocumentItemInPartSgmt = Partner.SDDocumentItem

  association [1..1] to I_BillingDocumentBasic     as _BillingDocumentBasic on  $projection.BillingDocument = _BillingDocumentBasic.BillingDocument
  association [1..1] to I_BillingDocumentItemBasic as _ItemBasic            on  $projection.BillingDocument     = _ItemBasic.BillingDocument
                                                                            and $projection.BillingDocumentItem = _ItemBasic.BillingDocumentItem

{

      //--[ GENERATED:012:GlBfhyJl7kY4v5RWfCiSf0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BillingDocumentBasicStdVH',
                     element: 'BillingDocument' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BillingDocumentBasic'
  key cast(Partner.SDDocument as vbeln_vf preserving type ) as BillingDocument,

      //--[ GENERATED:012:GlBfhyJl7kY4v5RWfCiSf0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BillgDocItmBscStdVH',
                     element: 'BillingDocumentItem' },
          additionalBinding: [{ localElement: 'BillingDocument',
                                element: 'BillingDocument' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ItemBasic'
  key BillingDocumentItem.BillingDocumentItem,
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key Partner.PartnerFunction,

      Partner.Customer,

      Partner.Supplier,

      Partner.Personnel,
      @ObjectModel.foreignKey.association: '_Address'
      Partner.AddressID,
      Partner.ContactPerson,

      Partner.AddressPersonID,
      Partner.ReferenceBusinessPartner,
      Partner.BPRefAddressIDForDocSpcfcAddr,
      Partner.SDDocPartnerAddressRefType,

      Partner.AddressObjectType,
      Partner.VATRegistration,
      Partner.UnloadingPointName,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
      _BillingDocumentBasic,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
      _ItemBasic,
      Partner._PartnerFunction,
      Partner._Address,
      Partner._BusinessPartnerAddress,
      Partner._BPRefAddressForDocSpcfcAddr,
      Partner._DfltAddrRprstn
}
```
