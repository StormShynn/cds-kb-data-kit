---
name: I_SUPPLIERSUBRANGE
description: "Suppliersubrange"
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - supplier
  - component:LO-MD-BP-2CL
  - lob:Logistics General
  - bo:Supplier
---
# I_SUPPLIERSUBRANGE

**Suppliersubrange**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierSubrange` | ✓ | |  | `ltsnr` |  |  |
| `Supplier` | ✓ | |  | `lifnr` |  |  |
| `DataController1` |  | | `_Supplier` | `DataController1` |  |  |
| `DataController2` |  | | `_Supplier` | `DataController2` |  |  |
| `DataController3` |  | | `_Supplier` | `DataController3` |  |  |
| `DataController4` |  | | `_Supplier` | `DataController4` |  |  |
| `DataController5` |  | | `_Supplier` | `DataController5` |  |  |
| `DataController6` |  | | `_Supplier` | `DataController6` |  |  |
| `DataController7` |  | | `_Supplier` | `DataController7` |  |  |
| `DataController8` |  | | `_Supplier` | `DataController8` |  |  |
| `DataController9` |  | | `_Supplier` | `DataController9` |  |  |
| `DataController10` |  | | `_Supplier` | `DataController10` |  |  |
| `DataControllerSet` |  | | `_Supplier` | `DataControllerSet` |  |  |
| `SupplierName` |  | | `_Supplier` | `SupplierName` |  |  |
| `BPSupplierName` |  | | `_Supplier` | `BPSupplierName` |  |  |
| `AuthorizationGroup` |  | | `_Supplier` | `AuthorizationGroup` |  |  |
| `SupplierAccountGroup` |  | | `_Supplier` | `SupplierAccountGroup` |  |  |
| `IsBusinessPurposeCompleted` |  | | `_Supplier` | `IsBusinessPurposeCompleted` |  |  |
| `_Text` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SupplierSubrangeText` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |

## Source Code

```abap
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@Analytics.dataCategory: #DIMENSION
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION]
@ObjectModel.modelingPattern: #NONE
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IMMSUPLRSR'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey:'SupplierSubrange'
@AccessControl.personalData.blocking: #REQUIRED
@VDM.viewType: #BASIC
@Search.searchable: true
@EndUserText.label: 'Supplier Subrange'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_SupplierSubrange
  as select from wyt1

  association [0..1] to I_SupplierSubrangeText as _Text     on  _Text.SupplierSubrange = $projection.SupplierSubrange
                                                            and _Text.Supplier         = $projection.Supplier
                                                            and _Text.Language         = $session.system_language

  association [0..1] to I_Supplier             as _Supplier on  $projection.Supplier = _Supplier.Supplier
{
      @Search: { defaultSearchElement: true }
  key ltsnr                                                             as SupplierSubrange,
  @ObjectModel.foreignKey.association: '_Supplier'
  key lifnr                                                             as Supplier,
  
//  Adding 10 fields for DCP 10+1 development 
     @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController1,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController2,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController3,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController4,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController5,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController6,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController7,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController8,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController9,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataController10,
      @UI.hidden: true
      @Consumption.hidden: true
      _Supplier.DataControllerSet,

      @Semantics.text: true
      _Supplier.SupplierName,
      
      //    For field length incrrement
       @Semantics.text: true
     _Supplier.BPSupplierName,

      //for DCL
      @UI.hidden: true
      _Supplier.AuthorizationGroup,
      @UI.hidden: true
      _Supplier.SupplierAccountGroup,
      @UI.hidden: true
      @Semantics.booleanIndicator 
      _Supplier.IsBusinessPurposeCompleted,

      _Text,
      _Supplier
}
```
