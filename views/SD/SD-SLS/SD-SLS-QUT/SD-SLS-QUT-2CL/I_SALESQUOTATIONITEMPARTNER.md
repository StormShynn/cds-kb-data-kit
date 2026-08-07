---
name: I_SALESQUOTATIONITEMPARTNER
description: Salesquotationitempartner
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
  - item-level
  - partner
  - component:SD-SLS-QUT-2CL
  - lob:Sales & Distribution
---
# I_SALESQUOTATIONITEMPARTNER

**Salesquotationitempartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-QUT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotation` | ✓ | |  | `cast(SalesDocument as sales_quotation preserving type)` |  |  |
| `SalesQuotationItem` | ✓ | |  | `cast(SalesDocumentItem as sales_quotation_item preserving type)` |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Personnel` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `AddressPersonID` |  | |  |  |  |  |
| `AddressObjectType` |  | |  |  |  |  |
| `SDDocPartnerAddressRefType` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ReferenceBusinessPartner` |  | |  |  |  |  |
| `_SalesQuotation` | | ✓ | | | | |
| `_SalesQuotationItem` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_DfltAddrRprstn` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesQuotation` | `I_SalesQuotation` | [1..1] |
| `_SalesQuotationItem` | `I_SalesQuotationItem` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Sales Quotation Item Partner'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: { 
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_Address','_DfltAddrRprstn' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDSLSQTANITMPT',
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
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN', 'NO_SUBPLAN_SHARING' ]
define view I_SalesQuotationItemPartner as select from I_SalesDocumentItemPartner  as Partner
      
    association[1..1] to I_SalesQuotation      as _SalesQuotation      on  $projection.SalesQuotation     = _SalesQuotation.SalesQuotation 
    association[1..1] to I_SalesQuotationItem  as _SalesQuotationItem  on  $projection.SalesQuotation     = _SalesQuotationItem.SalesQuotation  
                                                                       and $projection.SalesQuotationItem = _SalesQuotationItem.SalesQuotationItem  
    
{
        @ObjectModel.foreignKey.association: '_SalesQuotation'                                                                                                   
    key cast(SalesDocument as sales_quotation preserving type) as SalesQuotation,             
        @ObjectModel.foreignKey.association: '_SalesQuotationItem'                                                                                                   
    key cast(SalesDocumentItem as sales_quotation_item preserving type) as SalesQuotationItem,   
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
        ContactPerson,
        ReferenceBusinessPartner,
        
        //Association
        @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]    
        _SalesQuotation,
        @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]    
        _SalesQuotationItem, 
        _PartnerFunction,
        _Address,
        _DfltAddrRprstn,
        _BusinessPartnerAddress

}
where SDDocumentCategory = 'B';
```
