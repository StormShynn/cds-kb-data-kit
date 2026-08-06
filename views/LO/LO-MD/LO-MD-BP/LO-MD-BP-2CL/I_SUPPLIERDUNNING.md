---
name: I_SUPPLIERDUNNING
description: Supplierdunning
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
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
# I_SUPPLIERDUNNING

**Supplierdunning**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Supplier` | `lfb5.lifnr` |
| key `CompanyCode` | `lfb5.bukrs` |
| key `DunningArea` | `lfb5.maber` |
| `DunningRecipient` | `lfb5.lfrma` |
| `LegDunningProcedureOn` | `lfb5.gmvdt` |
| `LastDunnedOn` | `lfb5.madat` |
| `DunningProcedure` | `lfb5.mahna` |
| `DunningLevel` | `lfb5.mahns` |
| `DunningBlock` | `lfb5.mansp` |
| `DunningClerk` | `lfb5.busab` |
| `_SupplierCompany` | *Association* |
| `_DunningArea` | *Association* |
| `_DunningAreaText` | *Association* |
| `_DunningProcedure` | *Association* |
| `_DunningProcedureText` | *Association* |
| `_DunningBlock` | *Association* |
| `_DunningBlockText` | *Association* |
| `_DunningClerk` | *Association* |
| `_DunningRecipient` | *Association* |
| `_Supplier` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierCompany` | `I_SupplierCompany` | [1..1] |
| `_DunningArea` | `I_DunningArea` | [1..1] |
| `_DunningAreaText` | `I_DunningAreaText` | [0..*] |
| `_DunningProcedure` | `I_DunningProcedure` | [1..1] |
| `_DunningProcedureText` | `I_DunningProcedureText` | [0..*] |
| `_DunningBlock` | `I_DunningBlockingReasonCode` | [1..1] |
| `_DunningBlockText` | `I_DunningBlockingReasonText` | [0..*] |
| `_DunningClerk` | `I_AccountingClerk` | [1..1] |
| `_DunningRecipient` | `I_Supplier` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Supplier Company Code Dunning'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AbapCatalog.sqlViewName: 'ISUPPDUNNING'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities:[#SQL_DATA_SOURCE]
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]

define view I_SupplierDunning
  as select from lfb5

  association [1..1] to I_SupplierCompany as _SupplierCompany on  $projection.Supplier    = _SupplierCompany.Supplier
                                                              and $projection.CompanyCode = _SupplierCompany.CompanyCode

  association [1..1] to I_DunningArea as _DunningArea on $projection.CompanyCode  = _DunningArea.CompanyCode
                                                     and $projection.DunningArea  = _DunningArea.DunningArea
                                                     
  association [0..*] to I_DunningAreaText as _DunningAreaText on $projection.CompanyCode = _DunningAreaText.CompanyCode
                                                             and $projection.DunningArea = _DunningAreaText.DunningArea
                                                             
  association [1..1] to I_DunningProcedure as _DunningProcedure on $projection.DunningProcedure = _DunningProcedure.DunningProcedure
  
  association [0..*] to I_DunningProcedureText as _DunningProcedureText on $projection.DunningProcedure = _DunningProcedureText.DunningProcedure                                                           
                                                     
  association [1..1] to I_DunningBlockingReasonCode as _DunningBlock on $projection.DunningBlock = _DunningBlock.DunningBlockingReason
  
  association [0..*] to I_DunningBlockingReasonText as _DunningBlockText on $projection.DunningBlock = _DunningBlockText.DunningBlockingReason
  
  association [1..1] to I_AccountingClerk as _DunningClerk on $projection.CompanyCode  = _DunningClerk.CompanyCode
                                                          and $projection.DunningClerk = _DunningClerk.AccountingClerk
                                                          
  association [1..1] to I_Supplier as _DunningRecipient on $projection.DunningRecipient = _DunningRecipient.Supplier
  association [1..1] to I_Supplier as _Supplier on $projection.Supplier = _Supplier.Supplier
                                                       
{
      @ObjectModel.foreignKey.association: '_Supplier'
  key lfb5.lifnr as Supplier,
      @ObjectModel.foreignKey.association: '_SupplierCompany'
  key lfb5.bukrs as CompanyCode,
      @ObjectModel.foreignKey.association: '_DunningArea'
      @ObjectModel.text.association: '_DunningAreaText'
  key lfb5.maber as DunningArea,
      @ObjectModel.foreignKey.association: '_DunningRecipient'
      lfb5.lfrma as DunningRecipient,
      lfb5.gmvdt as LegDunningProcedureOn,
      lfb5.madat as LastDunnedOn,
      @ObjectModel.foreignKey.association: '_DunningProcedure'
      @ObjectModel.text.association: '_DunningProcedureText'
      lfb5.mahna as DunningProcedure,
      lfb5.mahns as DunningLevel,
      @ObjectModel.foreignKey.association: '_DunningBlock'
      @ObjectModel.text.association: '_DunningBlockText'
      lfb5.mansp as DunningBlock,
      @ObjectModel.foreignKey.association: '_DunningClerk'
      lfb5.busab as DunningClerk,
      
      /*associations*/
      _SupplierCompany,
      _Supplier,
      _DunningArea,
      _DunningAreaText,
      _DunningProcedure,
      _DunningProcedureText,
      _DunningBlock,
      _DunningBlockText,
      _DunningClerk,
      _DunningRecipient
      
}
```
