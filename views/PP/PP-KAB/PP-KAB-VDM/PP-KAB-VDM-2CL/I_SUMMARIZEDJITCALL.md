---
name: I_SUMMARIZEDJITCALL
description: "Summarizedjitcall"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_SUMMARIZEDJITCALL

**Summarizedjitcall**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `JITCallNumber` | ✓ | |  | `pabnum` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `Supplier` |  | |  | `lifnr` |  |  |
| `JITCallProfile` |  | |  | `pabprf` |  |  |
| `OutputPartnerForSumzdJITCall` |  | |  | `pabnpl` |  |  |
| `SumzdJITCallPlndDelivDateTime` |  | |  | `pabzpk` |  |  |
| `SumzdJITCallMessageIsProcessed` |  | |  | `pabdkz` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `_SumJITCallItem` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_OutputPartner` | | ✓ | | | | |
| `_OutputPartnerCompanyByPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SumJITCallItem` | `I_SummarizedJITCallItem` | [0..*] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |
| `_OutputPartner` | `I_Supplier` | [0..1] |
| `_OutputPartnerCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPSUMJITCALL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Summarized JIT Call'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'JITCallNumber'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #XXL, dataClass: #TRANSACTIONAL }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.sapObjectNodeType.name: 'KanbanSummarizedJITCall'
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_SummarizedJITCall
  as select from pabhd
  association [0..*] to I_SummarizedJITCallItem  as _SumJITCallItem              on  $projection.JITCallNumber = _SumJITCallItem.JITCallNumber

  association [0..1] to I_Supplier               as _Supplier                    on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompanyByPlant as _SupplierCompanyByPlant      on  $projection.Supplier = _SupplierCompanyByPlant.Supplier
                                                                                 and $projection.Plant = _SupplierCompanyByPlant.Plant

  association [0..1] to I_Supplier               as _OutputPartner               on  $projection.OutputPartnerForSumzdJITCall = _OutputPartner.Supplier
  association [0..1] to I_SupplierCompanyByPlant as _OutputPartnerCompanyByPlant on  $projection.OutputPartnerForSumzdJITCall = _OutputPartnerCompanyByPlant.Supplier
                                                                                 and $projection.Plant  = _OutputPartnerCompanyByPlant.Plant
{
  key pabnum  as JITCallNumber,
      werks   as Plant,
      lifnr   as Supplier,
      pabprf  as JITCallProfile,
      pabnpl  as OutputPartnerForSumzdJITCall,
      pabzpk  as SumzdJITCallPlndDelivDateTime,
      @Semantics.booleanIndicator
      pabdkz  as SumzdJITCallMessageIsProcessed, 
      ekorg   as PurchasingOrganization,         

      _SumJITCallItem,

      //only for DCL
      @Consumption.hidden: true
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,

      @Consumption.hidden: true
      _OutputPartner,
      @Consumption.hidden: true
      _OutputPartnerCompanyByPlant
}
```
