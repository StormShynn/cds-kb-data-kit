---
name: I_DEBITMEMOREQPARTNER
description: "Debitmemoreqpartner"
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
  - partner
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQPARTNER

**Debitmemoreqpartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebitMemoRequest` | ✓ | |  | `cast(SalesDocument as debit_memo_request preserving type)` |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `Partner` |  | |  |  |  |  |
| `FullName` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `AddressObjectType` |  | |  |  |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |  |  |
| `BPAddrDeterminationTransaction` |  | |  |  |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |  |  |
| `VATRegistration` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `InternationalPhoneNumber` |  | |  |  |  |  |
| `InternationalMobilePhoneNumber` |  | |  |  |  |  |
| `InternationalFaxNumber` |  | |  |  |  |  |
| `EmailAddress` |  | |  |  |  |  |
| `SDDocPartnerAddrIsDocSpecific` |  | |  |  |  |  |
| `_DebitMemoRequest` | | ✓ | | | | |
| `_ContactPerson` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_DfltAddrRprstn` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_BPRefAddressForDocSpcfcAddr` | | ✓ | | | | |
| `_PersonAddress` | | ✓ | | | | |
| `_PersonName` | | ✓ | | | | |
| `_OrganizationAddress` | | ✓ | | | | |
| `_OrgNamePostalAddress` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DebitMemoRequest` | `I_DebitMemoRequest` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Debit Memo Request Partner'
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
  sqlViewName: 'IDMRPARTNER',
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
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@Consumption.dbHints: [ 'USE_HEX_PLAN', 'NO_SUBPLAN_SHARING' ]
@Metadata.ignorePropagatedAnnotations: true
define view I_DebitMemoReqPartner as select from I_SalesDocumentPartner  as Partner

association[1..1] to I_DebitMemoRequest       as _DebitMemoRequest      on $projection.DebitMemoRequest   = _DebitMemoRequest.DebitMemoRequest

{
        @ObjectModel.foreignKey.association: '_DebitMemoRequest'                                                                                                   
    key cast(SalesDocument as debit_memo_request preserving type) as DebitMemoRequest,             
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
        _DebitMemoRequest,
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
where SDDocumentCategory = 'L';
```
