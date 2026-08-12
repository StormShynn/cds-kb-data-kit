---
name: I_SUMMARIZEDJITCALLITEM
description: "Summarizedjitcallitem"
app_component: PP-KAB-VDM-2CL
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
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - item-level
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_SUMMARIZEDJITCALLITEM

**Summarizedjitcallitem**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
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
| `JITCallNumber` | ✓ | |  | `pabnum` |  |  |
| `JITCallItemNumber` | ✓ | |  | `pabpos` |  |  |
| `Product` |  | |  | `matnr` |  |  |
| `SummarizedJITCallQtyInBaseUnit` |  | |  | `pabmng` |  |  |
| `BaseUnit` |  | |  | `meins` |  |  |
| `PurchasingDocument` |  | |  | `ebeln` |  |  |
| `PurchasingDocumentItem` |  | |  | `ebelp` |  |  |
| `UnloadingPointName` |  | |  | `ablad` |  |  |
| `ProductionSupplyArea` |  | |  | `prvbe` |  |  |
| `SumzdJITCallPlndDelivDateTime` |  | |  | `pabtim` |  |  |
| `GoodsReceiptIsExisting` |  | |  | `pabwef` |  |  |
| `GoodsReceiptQtyInBaseUnit` |  | |  | `pabwem` |  |  |
| `Plant` |  | | `_SummarizedJITCall` | `Plant` |  |  |
| `Supplier` |  | | `_SummarizedJITCall` | `Supplier` |  |  |
| `OutputPartnerForSumzdJITCall` |  | | `_SummarizedJITCall` | `OutputPartnerForSumzdJITCall` |  |  |
| `_SummarizedJITCall` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SupplierCompanyByPlant` | | ✓ | | | | |
| `_OutputPartner` | | ✓ | | | | |
| `_OutputPartnerCompanyByPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SummarizedJITCall` | `I_SummarizedJITCall` | [1..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |
| `_OutputPartner` | `I_Supplier` | [0..1] |
| `_OutputPartnerCompanyByPlant` | `I_SupplierCompanyByPlant` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPSUMJITCALLITM'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Summarized JIT Call Item'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'JITCallItemNumber'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #XXL, dataClass: #TRANSACTIONAL }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view I_SummarizedJITCallItem
  as select from pabit

  association [1..1] to I_SummarizedJITCall      as _SummarizedJITCall           on  $projection.JITCallNumber = _SummarizedJITCall.JITCallNumber

  association [0..1] to I_Supplier               as _Supplier                    on  $projection.supplier = _Supplier.Supplier
  association [0..1] to I_SupplierCompanyByPlant as _SupplierCompanyByPlant      on  $projection.supplier = _SupplierCompanyByPlant.Supplier
                                                                                 and $projection.plant    = _SupplierCompanyByPlant.Plant

  association [0..1] to I_Supplier               as _OutputPartner               on  $projection.outputpartnerforsumzdjitcall = _OutputPartner.Supplier
  association [0..1] to I_SupplierCompanyByPlant as _OutputPartnerCompanyByPlant on  $projection.outputpartnerforsumzdjitcall = _OutputPartnerCompanyByPlant.Supplier
                                                                                 and $projection.plant                        = _OutputPartnerCompanyByPlant.Plant
{

      @ObjectModel.foreignKey.association: '_SummarizedJITCall'
  key pabnum as JITCallNumber,

  key pabpos as JITCallItemNumber,
      matnr  as Product,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      pabmng as SummarizedJITCallQtyInBaseUnit,
      meins  as BaseUnit,
      ebeln  as PurchasingDocument,
      ebelp  as PurchasingDocumentItem,
      ablad  as UnloadingPointName,
      prvbe  as ProductionSupplyArea,
      pabtim as SumzdJITCallPlndDelivDateTime, 
      pabwef as GoodsReceiptIsExisting,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      pabwem as GoodsReceiptQtyInBaseUnit,

      // For DCL
      _SummarizedJITCall.Plant,

      _SummarizedJITCall,

      @Consumption.hidden: true
      _SummarizedJITCall.Supplier,
      @Consumption.hidden: true
      _Supplier,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,

      @Consumption.hidden: true
      _SummarizedJITCall.OutputPartnerForSumzdJITCall,
      @Consumption.hidden: true
      _OutputPartner,
      @Consumption.hidden: true
      _OutputPartnerCompanyByPlant
}
```
