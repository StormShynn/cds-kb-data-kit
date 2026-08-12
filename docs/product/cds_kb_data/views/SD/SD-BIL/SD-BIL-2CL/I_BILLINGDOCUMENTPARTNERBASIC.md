---
name: I_BILLINGDOCUMENTPARTNERBASIC
description: "Billing DocumentUMENTPARTNERBASIC"
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_BILLINGDOCUMENTPARTNERBASIC

**Billing DocumentUMENTPARTNERBASIC**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocument` | ✓ | |  | `cast(Partner.SDDocument as vbeln_vf preserving type )` |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |  |  |
| `AddressObjectType` |  | |  |  |  |  |
| `VATRegistration` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `_BillingDocumentBasic` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillingDocumentBasic` | `I_BillingDocumentBasic` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Partner in Billing Process Document'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #REQUIRED,
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDBILDOCPTBC',
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

define view I_BillingDocumentPartnerBasic
  as select from I_SDDocumentPartner    as Partner
    inner join   I_BillingDocumentBasic as BillingDocument on BillingDocument.BillingDocument = Partner.SDDocument

  association [1..1] to I_BillingDocumentBasic as _BillingDocumentBasic on $projection.BillingDocument = _BillingDocumentBasic.BillingDocument

{
      //--[ GENERATED:012:GlBfhyJl7kY4v5RWfCiSf0
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BillingDocumentBasicStdVH',
                     element: 'BillingDocument' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_BillingDocumentBasic'
  key cast(Partner.SDDocument as vbeln_vf preserving type ) as BillingDocument,
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
      Partner.SDDocPartnerAddressRefType,
      Partner.BPRefAddressIDForDocSpcfcAddr,

      Partner.AddressObjectType,
      Partner.VATRegistration,
      Partner.UnloadingPointName,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _BillingDocumentBasic,
      Partner._PartnerFunction,
      Partner._Address,
      Partner._BusinessPartnerAddress,
      Partner._BPRefAddressForDocSpcfcAddr,
      Partner._DfltAddrRprstn
}
```
