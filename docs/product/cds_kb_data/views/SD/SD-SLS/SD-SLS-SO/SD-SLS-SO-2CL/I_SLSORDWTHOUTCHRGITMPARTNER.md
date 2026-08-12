---
name: I_SLSORDWTHOUTCHRGITMPARTNER
description: "Slsordwthoutchrgitmpartner"
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_SLSORDWTHOUTCHRGITMPARTNER

**Slsordwthoutchrgitmpartner**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrderWithoutCharge` | ✓ | |  | `cast(Partner.SalesDocument as sales_order_without_charge preserving type)` |  |  |
| `SalesOrderWithoutChargeItem` | ✓ | |  | `cast(Partner.SalesDocumentItem as sales_order_without_charge_itm preserving type)` |  |  |
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
| `_SalesOrderWithoutCharge` | | ✓ | | | | |
| `_SalesOrderWithoutChargeItem` | | ✓ | | | | |
| `_PartnerFunction` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_DfltAddrRprstn` | | ✓ | | | | |
| `_BusinessPartnerAddress` | | ✓ | | | | |
| `_BPRefAddressForDocSpcfcAddr` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrderWithoutCharge` | `I_SalesOrderWithoutCharge` | [1..1] |
| `_SalesOrderWithoutChargeItem` | `I_SalesOrderWithoutChargeItem` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@EndUserText.label: 'Item Partner for Sales Order Without Charge'
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
  sqlViewName: 'ISDSOWTCHRGITPT',
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

define view I_SlsOrdWthoutChrgItmPartner 
      as select from I_SalesDocumentItemPartner  as Partner

      association [1..1] to I_SalesOrderWithoutCharge       as _SalesOrderWithoutCharge     on  $projection.SalesOrderWithoutCharge     = _SalesOrderWithoutCharge.SalesOrderWithoutCharge
      association [1..1] to I_SalesOrderWithoutChargeItem   as _SalesOrderWithoutChargeItem on  $projection.SalesOrderWithoutCharge     = _SalesOrderWithoutChargeItem.SalesOrderWithoutCharge
                                                                                            and $projection.SalesOrderWithoutChargeItem = _SalesOrderWithoutChargeItem.SalesOrderWithoutChargeItem
                                                                                                                                                                                   
{

      // Key
          @ObjectModel.foreignKey.association: '_SalesOrderWithoutCharge'
      key cast(Partner.SalesDocument as sales_order_without_charge preserving type)          as SalesOrderWithoutCharge,
                           
          @ObjectModel.foreignKey.association: '_SalesOrderWithoutChargeItem'
      key cast(Partner.SalesDocumentItem as sales_order_without_charge_itm preserving type)  as SalesOrderWithoutChargeItem,
                 
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
                          
          InternationalPhoneNumber,
          InternationalMobilePhoneNumber,
          EmailAddress,
                         
          //Association
          @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]    
          _SalesOrderWithoutCharge,
          @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]    
          _SalesOrderWithoutChargeItem,
          _PartnerFunction,
          _Address,
          _DfltAddrRprstn,
          _BusinessPartnerAddress,
          _BPRefAddressForDocSpcfcAddr           

}
where SDDocumentCategory = 'I';
```
