---
name: I_SALESQUOTATIONPARTNER
description: Salesquotationpartner
app_component: SD-SLS-QUT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-QUT
  - interface-view
  - sales-quotation
  - partner
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONPARTNER

**Salesquotationpartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesQuotation` | `cast(SalesDocument as sales_quotation preserving type)` |
| key `PartnerFunction` | `PartnerFunction` |
| `Customer` | `Customer` |
| `Supplier` | `Supplier` |
| `Personnel` | `Personnel` |
| `AddressID` | `AddressID` |
| `ContactPerson` | `ContactPerson` |
| `Partner` | `Partner` |
| `FullName` | `FullName` |
| `AddressPersonID` | `AddressPersonID` |
| `AddressObjectType` | `AddressObjectType` |
| `SDDocPartnerAddressRefType` | `SDDocPartnerAddressRefType` |
| `ReferenceBusinessPartner` | `ReferenceBusinessPartner` |
| `BPRefAddressIDForDocSpcfcAddr` | `BPRefAddressIDForDocSpcfcAddr` |
| `SDDocPartnerAddrIsDocSpecific` | `SDDocPartnerAddrIsDocSpecific` |
| `BPAddrDeterminationTransaction` | `BPAddrDeterminationTransaction` |
| `VATRegistration` | `VATRegistration` |
| `UnloadingPointName` | `UnloadingPointName` |
| `CorrespondenceLanguage` | `CorrespondenceLanguage` |
| `FormOfAddress` | `FormOfAddress` |
| `InternationalPhoneNumber` | `InternationalPhoneNumber` |
| `InternationalMobilePhoneNumber` | `InternationalMobilePhoneNumber` |
| `InternationalFaxNumber` | `InternationalFaxNumber` |
| `EmailAddress` | `EmailAddress` |
| `_SalesQuotation` | *Association* |
| `_PartnerFunction` | *Association* |
| `_ContactPerson` | *Association* |
| `_Address` | *Association* |
| `_DfltAddrRprstn` | *Association* |
| `_BusinessPartnerAddress` | *Association* |
| `_PersonAddress` | *Association* |
| `_PersonName` | *Association* |
| `_OrganizationAddress` | *Association* |
| `_OrgNamePostalAddress` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesQuotation` | `I_SalesQuotation` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Sales Quotation Partner'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: { 
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_Address', '_DfltAddrRprstn' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDSLSQTANPT',
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
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN', 'NO_SUBPLAN_SHARING' ]
define view I_SalesQuotationPartner as select from I_SalesDocumentPartner  as Partner
      
    association[1..1] to I_SalesQuotation       as _SalesQuotation      on $projection.SalesQuotation   = _SalesQuotation.SalesQuotation     
    
{
        @ObjectModel.foreignKey.association: '_SalesQuotation'                                                                                                   
    key cast(SalesDocument as sales_quotation preserving type) as SalesQuotation,         
        @ObjectModel.foreignKey.association: '_PartnerFunction'
    key PartnerFunction,       
        Customer,          
        Supplier,           
        Personnel,  
        @ObjectModel.foreignKey.association: '_Address'  
        AddressID,        
        ContactPerson,
        @ObjectModel.text.element: ['FullName']
        Partner,
        @Semantics: {
          text: true,
          name.fullName: true
        }
        FullName,
        AddressPersonID,
        AddressObjectType,
        SDDocPartnerAddressRefType,  
        ReferenceBusinessPartner,
        BPRefAddressIDForDocSpcfcAddr,
        SDDocPartnerAddrIsDocSpecific,
        BPAddrDeterminationTransaction,
        
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
        _SalesQuotation,
        _PartnerFunction,
        _ContactPerson,
        _Address,
        _DfltAddrRprstn,
        _BusinessPartnerAddress,
        _PersonAddress,
        _PersonName,
        _OrganizationAddress,
        _OrgNamePostalAddress
}
where SDDocumentCategory = 'B';
```
