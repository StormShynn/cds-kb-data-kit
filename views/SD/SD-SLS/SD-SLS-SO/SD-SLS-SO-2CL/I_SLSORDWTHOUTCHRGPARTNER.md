---
name: I_SLSORDWTHOUTCHRGPARTNER
description: Slsordwthoutchrgpartner
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - partner
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
---
# I_SLSORDWTHOUTCHRGPARTNER

**Slsordwthoutchrgpartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesOrderWithoutCharge` | `cast(Partner.SalesDocument as sales_order_without_charge preserving type)` |
| key `PartnerFunction` | `PartnerFunction` |
| `Customer` | `Customer` |
| `Supplier` | `Supplier` |
| `Personnel` | `Personnel` |
| `ContactPerson` | `ContactPerson` |
| `Partner` | `Partner` |
| `FullName` | `FullName` |
| `ReferenceBusinessPartner` | `ReferenceBusinessPartner` |
| `AddressID` | `AddressID` |
| `AddressPersonID` | `AddressPersonID` |
| `AddressObjectType` | `AddressObjectType` |
| `SDDocPartnerAddressRefType` | `SDDocPartnerAddressRefType` |
| `BPAddrDeterminationTransaction` | `BPAddrDeterminationTransaction` |
| `BPRefAddressIDForDocSpcfcAddr` | `BPRefAddressIDForDocSpcfcAddr` |
| `PartnerIsOneTimeAccount` | `PartnerIsOneTimeAccount` |
| `SDDocPartnerAddrIsDocSpecific` | `SDDocPartnerAddrIsDocSpecific` |
| `VATRegistration` | `VATRegistration` |
| `UnloadingPointName` | `UnloadingPointName` |
| `CorrespondenceLanguage` | `CorrespondenceLanguage` |
| `FormOfAddress` | `FormOfAddress` |
| `InternationalPhoneNumber` | `InternationalPhoneNumber` |
| `InternationalMobilePhoneNumber` | `InternationalMobilePhoneNumber` |
| `InternationalFaxNumber` | `InternationalFaxNumber` |
| `EmailAddress` | `EmailAddress` |
| `_SalesOrderWithoutCharge` | *Association* |
| `_PartnerFunction` | *Association* |
| `_ContactPerson` | *Association* |
| `_Address` | *Association* |
| `_DfltAddrRprstn` | *Association* |
| `_BusinessPartnerAddress` | *Association* |
| `_BPRefAddressForDocSpcfcAddr` | *Association* |
| `_OrgNamePostalAddress` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderWithoutCharge` | `I_SalesOrderWithoutCharge` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Partner for Sales Order Without Charge'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn', '_OrgNamePostalAddress' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDSOWTCHRGPT',
  compiler.compareFilter: true
}
@ObjectModel: {
   representativeKey: 'PartnerFunction',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Consumption.dbHints: [ 'USE_HEX_PLAN', 'NO_SUBPLAN_SHARING' ]
@Metadata.ignorePropagatedAnnotations: true

define view I_SlsOrdWthoutChrgPartner
  as select from I_SalesDocumentPartner as Partner

  association [1..1] to I_SalesOrderWithoutCharge as _SalesOrderWithoutCharge on $projection.SalesOrderWithoutCharge = _SalesOrderWithoutCharge.SalesOrderWithoutCharge

{
      @ObjectModel.foreignKey.association: '_SalesOrderWithoutCharge'
  key cast(Partner.SalesDocument as sales_order_without_charge preserving type) as SalesOrderWithoutCharge,
      @ObjectModel.foreignKey.association: '_PartnerFunction'
  key PartnerFunction,

      Customer,
      Supplier,
      Personnel,
      ContactPerson,

      @ObjectModel.text.element: ['FullName']
      Partner,
      @Semantics: {
        text: true,
        name.fullName: true
      }
      FullName,
      ReferenceBusinessPartner,

      @ObjectModel.foreignKey.association: '_Address'
      AddressID,
      AddressPersonID,
      AddressObjectType,
      SDDocPartnerAddressRefType,
      BPAddrDeterminationTransaction,
      BPRefAddressIDForDocSpcfcAddr,
      PartnerIsOneTimeAccount,
      SDDocPartnerAddrIsDocSpecific,

      VATRegistration,
      @Semantics.text: true
      UnloadingPointName,

      CorrespondenceLanguage,
      FormOfAddress,

      InternationalPhoneNumber,
      InternationalMobilePhoneNumber,
      InternationalFaxNumber,
      EmailAddress,

      //Association
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _SalesOrderWithoutCharge,
      _PartnerFunction,
      _ContactPerson,
      _Address,
      _DfltAddrRprstn,
      _BusinessPartnerAddress,
      _BPRefAddressForDocSpcfcAddr,
      _OrgNamePostalAddress

}
where
  SDDocumentCategory = 'I';
```
