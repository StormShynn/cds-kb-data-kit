---
name: I_CREDITMEMOREQPARTNER
description: Creditmemoreqpartner
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - credit
  - partner
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQPARTNER

**Creditmemoreqpartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CreditMemoRequest` | `cast(SalesDocument as credit_memo_request preserving type)` |
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
| `VATRegistration` | `VATRegistration` |
| `UnloadingPointName` | `UnloadingPointName` |
| `CorrespondenceLanguage` | `CorrespondenceLanguage` |
| `FormOfAddress` | `FormOfAddress` |
| `InternationalPhoneNumber` | `InternationalPhoneNumber` |
| `InternationalMobilePhoneNumber` | `InternationalMobilePhoneNumber` |
| `InternationalFaxNumber` | `InternationalFaxNumber` |
| `EmailAddress` | `EmailAddress` |
| `SDDocPartnerAddrIsDocSpecific` | `SDDocPartnerAddrIsDocSpecific` |
| `_CreditMemoRequest` | *Association* |
| `_ContactPerson` | *Association* |
| `_PartnerFunction` | *Association* |
| `_Address` | *Association* |
| `_DfltAddrRprstn` | *Association* |
| `_BusinessPartnerAddress` | *Association* |
| `_BPRefAddressForDocSpcfcAddr` | *Association* |
| `_PersonAddress` | *Association* |
| `_PersonName` | *Association* |
| `_OrganizationAddress` | *Association* |
| `_OrgNamePostalAddress` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditMemoRequest` | `I_CreditMemoRequest` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Credit Memo Request Partner'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: { 
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn', '_PersonAddress', '_PersonName', '_OrganizationAddress', '_OrgNamePostalAddress' ]
}
@AbapCatalog: {
  sqlViewName: 'ICMRPARTNER',
  compiler.compareFilter: true
}
@AbapCatalog.preserveKey:true
@ObjectModel: {
   representativeKey: 'PartnerFunction',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Consumption.dbHints: [ 'USE_HEX_PLAN', 'NO_SUBPLAN_SHARING' ]
@Metadata.ignorePropagatedAnnotations: true
define view I_CreditMemoReqPartner as select from I_SalesDocumentPartner  as Partner

association[1..1] to I_CreditMemoRequest       as _CreditMemoRequest      on $projection.CreditMemoRequest   = _CreditMemoRequest.CreditMemoRequest

{
        @ObjectModel.foreignKey.association: '_CreditMemoRequest'                                                                                                   
    key cast(SalesDocument as credit_memo_request preserving type) as CreditMemoRequest,             
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

        VATRegistration,  
        @Semantics.text: true
        UnloadingPointName,

        CorrespondenceLanguage,
        FormOfAddress,
        
        InternationalPhoneNumber,
        InternationalMobilePhoneNumber,
        InternationalFaxNumber,
        EmailAddress,
        
        SDDocPartnerAddrIsDocSpecific,       
        //Association
        @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]    
        _CreditMemoRequest,
        _ContactPerson,
        _PartnerFunction,
        _Address,
        _DfltAddrRprstn,
        _BusinessPartnerAddress,
        _BPRefAddressForDocSpcfcAddr,
        _PersonAddress,
        _PersonName,
        _OrganizationAddress,
        _OrgNamePostalAddress 
}
where SDDocumentCategory = 'K';
```
