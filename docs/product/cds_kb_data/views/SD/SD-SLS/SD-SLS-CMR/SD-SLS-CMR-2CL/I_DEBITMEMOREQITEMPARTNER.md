---
name: I_DEBITMEMOREQITEMPARTNER
description: "Debitmemoreqitempartner"
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - interface-view
  - item-level
  - partner
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# I_DEBITMEMOREQITEMPARTNER

**Debitmemoreqitempartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DebitMemoRequest` | ✓ | |  | `cast(SalesDocument as debit_memo_request preserving type)` |  |  |
| `DebitMemoRequestItem` | ✓ | |  | `cast(SalesDocumentItem as debit_memo_request_item preserving type)` |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `AddressObjectType` |  | |  |  |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |  |  |
| `BPAddrDeterminationTransaction` |  | |  |  |  |  |
| `BPRefAddressIDForDocSpcfcAddr` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `_DebitMemoRequest` | | ✓ | | | | |
| `_DebitMemoRequestItem` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_DfltAddrRprstn` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_BPRefAddressForDocSpcfcAddr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DebitMemoRequest` | `I_DebitMemoRequest` | [1..1] |
| `_DebitMemoRequestItem` | `I_DebitMemoRequestItem` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Debit Memo Request Item Partner'
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
  sqlViewName: 'ISDSLSDMRITMPT',
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
@Metadata.ignorePropagatedAnnotations: true

define view I_DebitMemoReqItemPartner as select from I_SalesDocumentItemPartner  as Partner

    association[1..1] to I_DebitMemoRequest       as _DebitMemoRequest      on  $projection.DebitMemoRequest     = _DebitMemoRequest.DebitMemoRequest
    association[1..1] to I_DebitMemoRequestItem   as _DebitMemoRequestItem  on  $projection.DebitMemoRequest     = _DebitMemoRequestItem.DebitMemoRequest  
                                                                            and $projection.DebitMemoRequestItem = _DebitMemoRequestItem.DebitMemoRequestItem  

{
        @ObjectModel.foreignKey.association: '_DebitMemoRequest'                                                                                                   
    key cast(SalesDocument as debit_memo_request preserving type)          as DebitMemoRequest,             
        @ObjectModel.foreignKey.association: '_DebitMemoRequestItem'                                                                                                   
    key cast(SalesDocumentItem as debit_memo_request_item preserving type) as DebitMemoRequestItem,             
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
        _DebitMemoRequest,
        @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]    
        _DebitMemoRequestItem, 
        _PartnerFunction,
        _Address,
        _DfltAddrRprstn,
        _BusinessPartnerAddress,
        _BPRefAddressForDocSpcfcAddr 
            
}
where SDDocumentCategory = 'L';
```
