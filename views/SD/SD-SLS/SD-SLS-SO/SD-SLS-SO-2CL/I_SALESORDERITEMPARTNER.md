---
name: I_SALESORDERITEMPARTNER
description: "Sales OrderITEMPARTNER"
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
  - item-level
  - partner
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERITEMPARTNER

**Sales OrderITEMPARTNER**

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
| `SalesOrderItem` | ✓ | |  | `cast(Partner.SalesDocumentItem as sales_order_item preserving type)` |  |  |
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
| `InternationalPhoneNumber` |  | |  |  |  |  |
| `InternationalMobilePhoneNumber` |  | |  |  |  |  |
| `EmailAddress` |  | |  |  |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Sales Order Item Partner'
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
  sqlViewName: 'ISDSLSORDITMPT',
  compiler.compareFilter: true
}
@ObjectModel: {
   representativeKey: 'PartnerFunction',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
}
@Consumption.dbHints: [ 'USE_HEX_PLAN', 'NO_SUBPLAN_SHARING' ]
@Metadata.ignorePropagatedAnnotations: true

define view I_SalesOrderItemPartner as select from I_SalesDocumentItemPartner  as Partner
      
    association[1..1] to I_SalesOrder      as _SalesOrder      on  $projection.SalesOrder     = _SalesOrder.SalesOrder 
    association[1..1] to I_SalesOrderItem  as _SalesOrderItem  on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder  
                                                               and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem  
    
{
        @ObjectModel.foreignKey.association: '_SalesOrder'                                                                                                   
    key cast(Partner.SalesDocument as vdm_sales_order preserving type)      as SalesOrder,             
        @ObjectModel.foreignKey.association: '_SalesOrderItem'                                                                                                   
    key cast(Partner.SalesDocumentItem as sales_order_item preserving type) as SalesOrderItem,             
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
      
        Partner.InternationalPhoneNumber,
        Partner.InternationalMobilePhoneNumber,
        Partner.EmailAddress,
        
        //Association
        @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]    
        _SalesOrder,
        @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]    
        _SalesOrderItem, 
        Partner._PartnerFunction,
        Partner._WorkforcePersonMappings,
        Partner._Address,
        Partner._DfltAddrRprstn,
        Partner._BusinessPartnerAddress,
        Partner._BPRefAddressForDocSpcfcAddr    

}
where Partner.SDDocumentCategory = 'C';
```
