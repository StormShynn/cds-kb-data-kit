---
name: I_ONRRPAYERCODE
description: "ONRR Payor Code"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYERCODE')/$value
semantic_en: "ONRR Payor Code"
semantic_vi: "ONRR Payor Code — CDS view giao diện dựa trên ONRR Payor Code."
keywords:
  - "onrr"
  - "payor"
  - "code"
  - "payer"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_ONRRPAYERCODE

**ONRR Payor Code**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYERCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRPayerCode` | ✓ | |  | `payor_cd` | `NUMC(5)` | ONRR-2014 - Payor Code |
| `ONRRPayerCodeName` |  | |  | `payor_nm` | `CHAR(30)` | ONEE-2014 - Payor Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYERCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ONRRPAYERCODE')/$value)*

```abap
@EndUserText.label: 'ONRR Payor Code'
@Analytics.dataCategory: #DIMENSION
@Metadata.allowExtensions:true
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVONRRPAYERCODE'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ONRRPayerCode'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name: 'ONRRPayerCode'

define view I_ONRRPayerCode
  as select from /pra/c_fp_payor

{
  @ObjectModel.text.element: ['ONRRPayerCodeName']
  key payor_cd                        as ONRRPayerCode,
  @Semantics.text: true
      payor_nm                        as ONRRPayerCodeName

}
```
