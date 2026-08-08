---
name: I_SALESORDERPARTNER
description: "Sales OrderPARTNER"
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
  - sales-order
  - partner
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERPARTNER

**Sales OrderPARTNER**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  | `cast(Partner.SalesDocument as vdm_sales_order preserving type)` |  |  |
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
| `SDDocPartnerAddrIsDocSpecific` |  | |  |  |  |  |
| `PartnerIsOneTimeAccount` |  | |  |  |  |  |
| `VATRegistration` |  | |  |  |  |  |
| `UnloadingPointName` |  | |  |  |  |  |
| `CorrespondenceLanguage` |  | |  |  |  |  |
| `FormOfAddress` |  | |  |  |  |  |
| `InternationalPhoneNumber` |  | |  |  |  |  |
| `InternationalMobilePhoneNumber` |  | |  |  |  |  |
| `InternationalFaxNumber` |  | |  |  |  |  |
| `EmailAddress` |  | |  |  |  |  |
| `_SalesOrder` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Sales Order Partner'
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
  sqlViewName: 'ISDSLSORDPT',
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

define view I_SalesOrderPartner   
 as select from I_SalesDocumentPartner as Partner
      
    association[1..1] to I_SalesOrder  as _SalesOrder on $projection.SalesOrder   = _SalesOrder.SalesOrder     
    
{
        @ObjectModel.foreignKey.association: '_SalesOrder'                                                                                                   
    key cast(Partner.SalesDocument as vdm_sales_order preserving type) as SalesOrder,             
        @ObjectModel.foreignKey.association: '_PartnerFunction'
    key Partner.PartnerFunction,  
         
        Partner.Customer,          
        Partner.Supplier,           
        Partner.Personnel,           
        Partner.ContactPerson,       
        
        @ObjectModel.text.element: ['FullName']
        Partner.Partner,
        
        @Semantics: {
          text: true,
          name.fullName: true
        }
        Partner.FullName,
       
        Partner.ReferenceBusinessPartner,  
            
        @ObjectModel.foreignKey.association: '_Address'
        Partner.AddressID,
        Partner.AddressPersonID,
        Partner.AddressObjectType,
        Partner.SDDocPartnerAddressRefType,
        Partner.BPAddrDeterminationTransaction,
        Partner.BPRefAddressIDForDocSpcfcAddr, 
        Partner.SDDocPartnerAddrIsDocSpecific,
        Partner.PartnerIsOneTimeAccount,
           
        Partner.VATRegistration,  
        @Semantics.text: true
        Partner.UnloadingPointName,
        
        Partner.CorrespondenceLanguage,
        Partner.FormOfAddress,
        
        Partner.InternationalPhoneNumber,
        Partner.InternationalMobilePhoneNumber,
        Partner.InternationalFaxNumber,
        Partner.EmailAddress,
        
        //Association
        @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]    
        _SalesOrder,
        Partner._PartnerFunction,
        Partner._ContactPerson,
        Partner._WorkforcePersonMappings,
        Partner._Address,
        Partner._DfltAddrRprstn,
        Partner._BusinessPartnerAddress,
        Partner._BPRefAddressForDocSpcfcAddr,
        Partner._PersonAddress,
        Partner._PersonName,
        Partner._OrganizationAddress,
        Partner._OrgNamePostalAddress 

}
where Partner.SDDocumentCategory = 'C';
```
