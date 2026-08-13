---
name: D_BDRCRTEFRMEXTPRCGELMNTP
description: "D Bdrcrtefrmextprcgelmntp"
semantic_vi: "View này hiển thị dữ liệu điều kiện tỷ lệ và số lượng cho các yếu tố giá trong một tài liệu bán hàng, thường được sử dụng khi phân tích điều kiện giá trong đơn đặt hàng bán hàng hoặc hóa đơn."
keywords:
  - "sales document"
  - "đơn đặt hàng bán hàng"
  - "hóa đơn"
  - "condition rate"
  - "tỷ lệ điều kiện"
  - "pricing element"
  - "yếu tố giá"
  - "sales order"
  - "đơn mua hàng"
  - "ekko"
  - "sap"
  - "sales and distribution"
semantic_en: "This view exposes condition rate and quantity data for pricing elements in a sales document, typically used when analyzing pricing conditions in a sales order or invoice."
app_component: SD-BIL-BDR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-BDR
  - transactional-processing
  - component:SD-BIL-BDR-2CL
  - lob:Sales & Distribution
---
# D_BDRCRTEFRMEXTPRCGELMNTP

**D Bdrcrtefrmextprcgelmntp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-BDR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionType` |  | |  | `kschl` |  |  |
| `ConditionRateAmount` |  | |  | `vfprc_rate_amount` |  |  |
| `ConditionCurrency` |  | |  | `waers` |  |  |
| `ConditionQuantity` |  | |  | `kpein` |  |  |
| `ConditionQuantityUnit` |  | |  | `kmein` |  |  |
| `ConditionRateRatio` |  | |  | `vfprc_element_ratio` |  |  |
| `ConditionRateRatioUnit` |  | |  | `msehi` |  |  |

## Source Code

```abap
@EndUserText.label: 'Create BDR from Ext Data - Pricing Param'
@VDM.usage.type:[#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BDRCrteFrmExtPrcgElmntP { 

    ConditionType           : kschl;
    
    @OData.v2.amount.noDecimalShift: true    
    @Semantics.amount.currencyCode: 'ConditionCurrency' 
    ConditionRateAmount     : vfprc_rate_amount;
    
    @Semantics.currencyCode: true
    ConditionCurrency       : waers;  //No semantics in I-View
    
    @Semantics.quantity.unitOfMeasure: 'ConditionQuantityUnit'
    ConditionQuantity       : kpein;
    
    @Semantics.unitOfMeasure: true
    ConditionQuantityUnit   : kmein;
  
    @Semantics.quantity.unitOfMeasure: 'ConditionRateRatioUnit'
    ConditionRateRatio      : vfprc_element_ratio; // Datenelemente klären
  
    @Semantics.unitOfMeasure: true
    ConditionRateRatioUnit  : msehi;
  
  

  
   
  
}
```
