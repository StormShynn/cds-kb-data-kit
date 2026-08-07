---
name: I_CREDITMEMOREQITEMPARTNER
description: Creditmemoreqitempartner
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
  - item-level
  - partner
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQITEMPARTNER

**Creditmemoreqitempartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CreditMemoRequest` | ✓ | |  | `cast(SalesDocument as credit_memo_request preserving type)` |
| `CreditMemoRequestItem` | ✓ | |  | `cast(SalesDocumentItem as credit_memo_request_item preserving type)` |
| `PartnerFunction` | ✓ | |  |  |
| `Customer` |  | |  |  |
| `Supplier` |  | |  |  |
| `Personnel` |  | |  |  |
| `AddressID` |  | |  |  |
| `AddressPersonID` |  | |  |  |
| `AddressObjectType` |  | |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |
| `BPAddrDeterminationTransaction` |  | |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |
| `ContactPerson` |  | |  |  |
| `ReferenceBusinessPartner` |  | |  |  |
| `_CreditMemoRequest` | | ✓ | | |
| `_CreditMemoRequestItem` | | ✓ | | |
| `_PartnerFunction` | | ✓ | | |
| `_Address` | | ✓ | | |
| `_DfltAddrRprstn` | | ✓ | | |
| `_BusinessPartnerAddress` | | ✓ | | |
| `_BPRefAddressForDocSpcfcAddr` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditMemoRequest` | `I_CreditMemoRequest` | [1..1] |
| `_CreditMemoRequestItem` | `I_CreditMemoRequestItem` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Credit Memo Request Item Partner'
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
  sqlViewName: 'ISDSLSCMRITMPT',
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
@Metadata.ignorePropagatedAnnotations: true

define view I_CreditMemoReqItemPartner as select from I_SalesDocumentItemPartner  as Partner

    association[1..1] to I_CreditMemoRequest       as _CreditMemoRequest      on  $projection.CreditMemoRequest     = _CreditMemoRequest.CreditMemoRequest
    association[1..1] to I_CreditMemoRequestItem   as _CreditMemoRequestItem  on  $projection.CreditMemoRequest     = _CreditMemoRequestItem.CreditMemoRequest  
                                                                              and $projection.CreditMemoRequestItem = _CreditMemoRequestItem.CreditMemoRequestItem  

{
        @ObjectModel.foreignKey.association: '_CreditMemoRequest'                                                                                                   
    key cast(SalesDocument as credit_memo_request preserving type) as CreditMemoRequest,             
        @ObjectModel.foreignKey.association: '_CreditMemoRequestItem'                                                                                                   
    key cast(SalesDocumentItem as credit_memo_request_item preserving type) as CreditMemoRequestItem,             
        @ObjectModel.foreignKey.association: '_PartnerFunction'      
    key PartnerFunction,       
        Customer,          
        Supplier,           
        Personnel,
           
        @ObjectModel.foreignKey.association: '_Address' 
        AddressID,
        AddressPersonID,
        AddressObjectType,
        SDDocPartnerAddressRefType,
        BPAddrDeterminationTransaction,       
        BPRefAddressIDForDocSpcfcAddr,
               
        ContactPerson,
        ReferenceBusinessPartner,
              
        //Association
        @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]    
        _CreditMemoRequest,
        @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]    
        _CreditMemoRequestItem, 
        _PartnerFunction,
        _Address,
        _DfltAddrRprstn,
        _BusinessPartnerAddress,
        _BPRefAddressForDocSpcfcAddr     
}
where SDDocumentCategory = 'K';
```
