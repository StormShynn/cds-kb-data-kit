---
name: I_PRELIMBILLINGDOCPARTNER
description: "PRELIMBilling DocumentPARTNER"
app_component: SD-BIL-PBD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-PBD
  - interface-view
  - billing-document
  - billing
  - partner
  - component:SD-BIL-PBD-2CL
  - lob:Sales & Distribution
---
# I_PRELIMBILLINGDOCPARTNER

**PRELIMBilling DocumentPARTNER**

| Property | Value |
|---|---|
| App Component | `SD-BIL-PBD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PrelimBillingDocument` | ✓ | |  | `cast( Partner.BillingDocument as prelim_billing_document preserving type )` |  |  |
| `PartnerFunction` | ✓ | |  | `cast(Partner.PartnerFunction as parvw_unv preserving type )` |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `AddressObjectType` |  | |  |  |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |  |  |
| `VATRegistration` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `_PrelimBillingDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrelimBillingDocument` | `I_PrelimBillingDocument` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Preliminary Billing Document Partner'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDPREBILDOCPT',
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

@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

define view I_PrelimBillingDocPartner
  as select from I_BillingDocumentPartnerBasic as Partner

  association [1..1] to I_PrelimBillingDocument as _PrelimBillingDocument on $projection.PrelimBillingDocument = _PrelimBillingDocument.PrelimBillingDocument

{
      @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_PrelimBillingDocumentStdVH',
                       element: 'PrelimBillingDocument' }
          }]
      @ObjectModel.foreignKey.association: '_PrelimBillingDocument'
  key cast( Partner.BillingDocument as prelim_billing_document preserving type ) as PrelimBillingDocument,

      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key cast(Partner.PartnerFunction as parvw_unv preserving type )                as PartnerFunction,

      Partner.Customer,
      Partner.Supplier,
      Partner.Personnel,
      Partner.ContactPerson,
      Partner.ReferenceBusinessPartner,

      @ObjectModel.foreignKey.association: '_Address'
      Partner.AddressID,
      Partner.AddressPersonID,
      Partner.AddressObjectType,
      Partner.SDDocPartnerAddressRefType,

      Partner.VATRegistration,
      Partner.UnloadingPointName,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _PrelimBillingDocument,
      Partner._PartnerFunction,
      Partner._Address,
      Partner._BusinessPartnerAddress,
      Partner._DfltAddrRprstn
}
where
  _PrelimBillingDocument.SDDocumentCategory = 'PBD'
```
